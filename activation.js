// activation.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('activationModal');
  const err = document.getElementById('errorMsg');

  // --- Check stored activation ---
  let activated = false;
  try {
    const s = localStorage.getItem('activationStatus');
    if (s) {
      const js = JSON.parse(s);
      // must match the current ACTIVATION_KEY
      if (js.activated && js.key === ACTIVATION_KEY) {
        activated = true;
      }
    }
  } catch (e) { activated = false; }

  if (activated) {
    // Already activated
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = ''; 
    showActivatedUser();
    return;
  }

  // --- Show modal if not activated ---
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Allow Enter key to submit
  ['userName','userEmail','activationKey'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') verifyActivation();
    });
  });

  // Hide error on input
  ['userName','userEmail','activationKey'].forEach(id=>{
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', ()=> { 
      const e = document.getElementById('errorMsg'); 
      if (e) e.style.display = 'none'; 
    });
  });
});

function verifyActivation() {
  const name = (document.getElementById('userName') || {}).value || '';
  const email = (document.getElementById('userEmail') || {}).value || '';
  const key = (document.getElementById('activationKey') || {}).value || '';
  const err = document.getElementById('errorMsg');

  if (!name.trim() || !email.trim() || !key.trim()) {
    if (err) { 
      err.textContent = 'Please fill all fields.'; 
      err.style.display = 'block'; 
    }
    return;
  }

  // Compare with owner key (from config.js)
  if (typeof ACTIVATION_KEY !== 'undefined' && key === ACTIVATION_KEY) {
    const userInfo = { 
      name: name.trim(), 
      email: email.trim(), 
      activated: true, 
      key: ACTIVATION_KEY,   // 🔑 store current key
      date: new Date().toISOString() 
    };
    localStorage.setItem('activationStatus', JSON.stringify(userInfo));
    const modal = document.getElementById('activationModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    showActivatedUser();
    alert('Activation successful — welcome, ' + userInfo.name + '!');
  } else {
    if (err) { 
      err.textContent = 'Invalid or expired key. Please try again.'; 
      err.style.display = 'block'; 
    }
  }
}

// helper: show activated user in header
function showActivatedUser() {
  try {
    const data = JSON.parse(localStorage.getItem('activationStatus') || '{}');
    if (data && data.activated && data.name) {
      const el = document.getElementById('userBadge');
      if (el) el.textContent = `Welcome, ${data.name}`;
    }
  } catch (e) { /* ignore */ }
}
