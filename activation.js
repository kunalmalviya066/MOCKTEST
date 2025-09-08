// activation.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('activationModal');
  const err = document.getElementById('errorMsg');

  // try to parse stored activation
  let activated = false;
  try {
    const s = localStorage.getItem('activationStatus');
    if (s) {
      const js = JSON.parse(s);
      activated = !!js.activated;
    }
  } catch (e) { activated = false; }

  if (activated) {
    // Already activated — hide modal and optionally show user badge
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = ''; // ensure scroll enabled
    showActivatedUser();
    return;
  }

  // Show modal and prevent background scroll
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // allow Enter key to submit from any field
  ['userName','userEmail','activationKey'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') verifyActivation();
    });
  });

  // hide error on input
  ['userName','userEmail','activationKey'].forEach(id=>{
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', ()=> { const e = document.getElementById('errorMsg'); if (e) e.style.display = 'none'; });
  });
});

function verifyActivation() {
  const name = (document.getElementById('userName') || {}).value || '';
  const email = (document.getElementById('userEmail') || {}).value || '';
  const key = (document.getElementById('activationKey') || {}).value || '';
  const err = document.getElementById('errorMsg');

  if (!name.trim() || !email.trim() || !key.trim()) {
    if (err) { err.textContent = 'Please fill all fields.'; err.style.display = 'block'; }
    return;
  }

  // Compare with owner key (from config.js)
  if (typeof ACTIVATION_KEY !== 'undefined' && key === ACTIVATION_KEY) {
    const userInfo = { name: name.trim(), email: email.trim(), activated: true, date: new Date().toISOString() };
    localStorage.setItem('activationStatus', JSON.stringify(userInfo));
    const modal = document.getElementById('activationModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    showActivatedUser();
    alert('Activation successful — welcome, ' + userInfo.name + '!');
  } else {
    if (err) { err.textContent = 'Invalid key. Please try again.'; err.style.display = 'block'; }
  }
}

// helper: optionally show activated user in header (you'll add an element for this)
function showActivatedUser() {
  try {
    const data = JSON.parse(localStorage.getItem('activationStatus') || '{}');
    if (data && data.activated && data.name) {
      const el = document.getElementById('userBadge');
      if (el) el.textContent = `Welcome, ${data.name}`;
    }
  } catch (e) { /* ignore */ }
}
