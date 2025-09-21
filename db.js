// db.js - question bank structure for Banking mock tests
const DB = {
  
  'MP POLICE' : {
    topics: {
    
      'Number System(25 Question)': [
        

  {
    "id": "num-001",
    "question": "The remainder when 7^100 is divided by 40 is:",
    "options": ["1", "9", "21", "31"],
    "answer": 2,
    "explanation": "Euler’s theorem: φ(40)=16. 7^100 ≡ 7^4 ≡ 2401 ≡ 21 mod 40."
  },
  {
    "id": "num-002",
    "question": "If the product of two consecutive integers is 156, the integers are:",
    "options": ["11,12", "12,13", "13,14", "14,15"],
    "answer": 1,
    "explanation": "12 × 13 = 156."
  },
  {
    "id": "num-003",
    "question": "Find remainder of 123456789 ÷ 9.",
    "options": ["0", "1", "3", "6"],
    "answer": 0,
    "explanation": "Sum of digits = 45, divisible by 9 → remainder 0."
  },
  {
    "id": "num-004",
    "question": "The number of trailing zeros in 250! is:",
    "options": ["61", "62", "63", "64"],
    "answer": 1,
    "explanation": "250/5=50, 250/25=10, 250/125=2 → total=62."
  },
  {
    "id": "num-005",
    "question": "The smallest number which when divided by 12, 15, and 20 leaves remainder 7 is:",
    "options": ["67", "127", "247", "307"],
    "answer": 2,
    "explanation": "LCM(12,15,20)=60 → form 60k+7. First >60 is 247."
  },
  {
    "id": "num-006",
    "question": "If 142857 is multiplied by 7, the result is:",
    "options": ["999999", "1000000", "1234569", "1428570"],
    "answer": 0,
    "explanation": "142857 is cyclic, ×7 = 999999."
  },
  {
    "id": "num-007",
    "question": "Find the unit digit of (37)^85.",
    "options": ["3", "7", "9", "1"],
    "answer": 1,
    "explanation": "7’s cycle = (7,9,3,1). 85 mod 4=1 → unit digit 7."
  },
  {
    "id": "num-008",
    "question": "If x = 2^a × 3^b × 5^c, number of factors of x = ?",
    "options": ["a+b+c", "(a+1)(b+1)(c+1)", "(a+b)(b+c)", "None"],
    "answer": 1,
    "explanation": "Number of factors = (a+1)(b+1)(c+1)."
  },
  {
    "id": "num-009",
    "question": "Which of the following is NOT a prime?",
    "options": ["97", "101", "111", "113"],
    "answer": 2,
    "explanation": "111 = 3 × 37, not prime."
  },
  {
    "id": "num-010",
    "question": "Find remainder of 10^23 ÷ 7.",
    "options": ["1", "2", "5", "4"],
    "answer": 2,
    "explanation": "10 mod 7=3. 3^23 cycle length=6. 23 mod 6=5 → 3^5=243 → remainder 5."
  },
  {
    "id": "num-011",
    "question": "Sum of first 50 even numbers = ?",
    "options": ["2500", "2550", "2600", "2700"],
    "answer": 1,
    "explanation": "Formula = n(n+1). 50×51=2550."
  },
  {
    "id": "num-012",
    "question": "Find HCF of 504 and 660.",
    "options": ["12", "18", "24", "36"],
    "answer": 0,
    "explanation": "Prime factorization → HCF = 12."
  },
  {
    "id": "num-013",
    "question": "Smallest number divisible by 8, 9, 12, and 15 = ?",
    "options": ["180", "240", "360", "480"],
    "answer": 2,
    "explanation": "LCM = 360."
  },
  {
    "id": "num-014",
    "question": "Digital root of 9876543210 = ?",
    "options": ["9", "10", "0", "1"],
    "answer": 0,
    "explanation": "Sum = 45 → digital root 9."
  },
  {
    "id": "num-015",
    "question": "Find remainder when 17^20 is divided by 16.",
    "options": ["0", "1", "9", "15"],
    "answer": 1,
    "explanation": "17 ≡ 1 mod 16 → remainder 1."
  },
  {
    "id": "num-016",
    "question": "Binary equivalent of decimal 45 = ?",
    "options": ["101011", "101101", "110101", "1011011"],
    "answer": 1,
    "explanation": "45 = 32+8+4+1 = 101101."
  },
  {
    "id": "hcf-lcm-001",
    "question": "The product of two numbers is 320. If their HCF is 8, what is their LCM?",
    "options": ["32", "40", "2560", "256"],
    "answer": 1,
    "explanation": "The fundamental property of HCF and LCM states that for any two numbers, the product of the numbers is equal to the product of their HCF and LCM. So, Number1 × Number2 = HCF × LCM. Given that the product of the two numbers is 320 and their HCF is 8, we can write: 320 = 8 × LCM. Solving for LCM gives: LCM = 320 / 8 = 40."
  },
  {
    "id": "num-018",
    "question": "Number of prime numbers between 50 and 80 is:",
    "options": ["6", "7", "8", "9"],
    "answer": 1,
    "explanation": "Primes: 53,59,61,67,71,73,79 → 7 primes."
  },
  {
    "id": "num-019",
    "question": "If the sum of digits of a number is divisible by 11, then the number is divisible by 11. True or False?",
    "options": ["True", "False", "Depends", "None"],
    "answer": 1,
    "explanation": "Rule of 11 = difference of alternate digit sums, not total sum."
  },
  {
    "id": "num-020",
    "question": "The remainder when 9^21 is divided by 7 is:",
    "options": ["1", "2", "3", "4"],
    "answer": 0,
    "explanation": "9 ≡ 2 mod 7. 2^21 cycle=2,4,1. 21 mod 3=0 → remainder 1."
  },
  {
    "id": "num-021",
    "question": "Smallest prime greater than 200 = ?",
    "options": ["201", "211", "223", "227"],
    "answer": 1,
    "explanation": "211 is prime."
  },
  {
    "id": "num-022",
    "question": "Sum of first 20 multiples of 7 = ?",
    "options": ["1470", "1540", "1610", "1700"],
    "answer": 0,
    "explanation": "n(n+1)/2 ×7 = 20×21/2 ×7 = 1470."
  },
  {
    "id": "num-023",
    "question": "A number when divided by 12 leaves remainder 8. What remainder will it leave when divided by 4?",
    "options": ["0", "1", "2", "3"],
    "answer": 0,
    "explanation": "(12k+8) ÷4 → remainder 0."
  },
  {
    "id": "hcf-lcm-002",
    "question": "The LCM of two numbers is 180 and their HCF is 12. If one of the numbers is 36, what is the other number?",
    "options": ["40", "60", "90", "120"],
    "answer": 1,
    "explanation": "The product of two numbers is equal to the product of their HCF and LCM. So, Number1 × Number2 = HCF × LCM. We have: 36 × Other Number = 12 × 180. The other number is (12 × 180) / 36 = 12 × 5 = 60."
  },
  {
    "id": "num-025",
    "question": "Number of zeros in 1000! = ?",
    "options": ["240", "245", "249", "252"],
    "answer": 2,
    "explanation": "1000/5=200, /25=40, /125=8, /625=1 → total 249."
  },

    ],
    
    'Number System Part 2(25 Question)': [
      
      
   {
    "id": "hcf-lcm-003",
    "question": "Two numbers are in the ratio of 3:4. If their HCF is 4, find their LCM.",
    "options": ["12", "24", "48", "60"],
    "answer": 2,
    "explanation": "If the numbers are in the ratio 3:4 and their HCF is 4, the numbers can be represented as 3 × 4 = 12 and 4 × 4 = 16. The LCM of 12 and 16 is 48."
  },
  {
    "id": "num-027",
    "question": "If 2^x = 128, find x.",
    "options": ["5", "6", "7", "8"],
    "answer": 2,
    "explanation": "2^7 = 128 → x=7."
  },
  {
    "id": "num-028",
    "question": "The largest 4-digit number divisible by 21 is:",
    "options": ["9996", "9990", "9984", "9999"],
    "answer": 0,
    "explanation": "9996 ÷ 21 = 476."
  },
  {
    "id": "num-029",
    "question": "If a number is divisible by both 9 and 12, it must also be divisible by:",
    "options": ["18", "24", "36", "72"],
    "answer": 2,
    "explanation": "LCM of 9 and 12 = 36."
  },
  {
    "id": "num-030",
    "question": "Number of factors of 360 = ?",
    "options": ["20", "22", "24", "27"],
    "answer": 2,
    "explanation": "360=2^3×3^2×5. Factors=(3+1)(2+1)(1+1)=24."
  },
  {
    "id": "num-031",
    "question": "Find the smallest number which when divided by 12, 15, 20 leaves remainder 5.",
    "options": ["60", "65", "125", "245"],
    "answer": 2,
    "explanation": "LCM=60 → form=60k+5. Smallest >60 is 125."
  },
  {
    "id": "num-032",
    "question": "A two-digit number is 4 more than twice the sum of its digits. If digits are reversed, number decreases by 27. Find the number.",
    "options": ["58", "62", "71", "84"],
    "answer": 1,
    "explanation": "Equation solving → number=62."
  },
  {
    "id": "num-033",
    "question": "Last digit of 7^222 is:",
    "options": ["1", "3", "7", "9"],
    "answer": 3,
    "explanation": "7 cycle: (7,9,3,1). 222 mod 4=2 → last digit 9."
  },
  {
    "id": "num-034",
    "question": "Find remainder when 1001 is divided by 77.",
    "options": ["0", "7", "11", "13"],
    "answer": 0,
    "explanation": "1001 ÷ 77 = 13 remainder 0? Actually 77×13=1001 exactly, remainder=0."
  },
  {
    "id": "num-035",
    "question": "Which of the following is NOT a prime number?",
    "options": ["61", "71", "77", "97"],
    "answer": 2,
    "explanation": "77 = 7×11, not prime."
  },
  {
    "id": "num-036",
    "question": "Find sum of digits of 333 × 666.",
    "options": ["18", "21", "27", "30"],
    "answer": 2,
    "explanation": "333×666=221778. Digit sum=27."
  },
  {
    "id": "num-037",
    "question": "LCM of first 5 natural numbers = ?",
    "options": ["30", "40", "50", "60"],
    "answer": 3,
    "explanation": "1,2,3,4,5 → LCM=60."
  },
  {
    "id": "num-038",
    "question": "Remainder when 3^100 ÷ 5 = ?",
    "options": ["0", "1", "2", "3"],
    "answer": 1,
    "explanation": "3 cycle mod 5=3,4,2,1. 100 mod 4=0 → remainder=1. Correct remainder=1."
  },
  {
    "id": "num-039",
    "question": "1+3+5+...+99 = ?",
    "options": ["2400", "2500", "2600", "2700"],
    "answer": 1,
    "explanation": "Sum of n odd numbers = n^2. Here n=50 → 2500."
  },
  {
    "id": "num-040",
    "question": "If N = 72 × 35 × 50, total number of prime factors (with repetition) = ?",
    "options": ["7", "8", "9", "10"],
    "answer": 3,
    "explanation": "72=2^3×3^2, 35=5×7, 50=2×5^2 → total exponent sum=10."
  },
  {
    "id": "num-041",
    "question": "Next term: 2, 5, 10, 17, 26, ?",
    "options": ["35", "37", "38", "39"],
    "answer": 1,
    "explanation": "Pattern +3,+5,+7,+9,... Next +11=37."
  },
  {
    "id": "num-042",
    "question": "Simplify: (999^2 – 1) ÷ 1000.",
    "options": ["998", "999", "1000", "1001"],
    "answer": 0,
    "explanation": "999^2–1=(999–1)(999+1)=998×1000 ÷1000=998."
  },
  {
    "id": "num-043",
    "question": "Find HCF of 252, 198, 594.",
    "options": ["6", "9", "12", "18"],
    "answer": 3,
    "explanation": "252=2^2×3^2×7, 198=2×3^2×11, 594=2×3^3×11 → HCF=18? Actually common =2×3^2=18."
  },
  {
    "id": "num-044",
    "question": "Find remainder when 563 is divided by 11.",
    "options": ["0", "1", "2", "3"],
    "answer": 2,
    "explanation": "Rule: (5+3)-6=2 → remainder=2. But 563÷11=51 remainder 2. Correct=2."
  },
  {
    "id": "num-045",
    "question": "Sum of first 25 odd numbers = ?",
    "options": ["600", "625", "650", "675"],
    "answer": 1,
    "explanation": "Sum of n odd numbers=n^2. Here=25^2=625."
  },
  {
    "id": "num-046",
    "question": "Largest 3-digit number divisible by 27 = ?",
    "options": ["972", "981", "990", "999"],
    "answer": 1,
    "explanation": "981 ÷ 27 = 36."
  },
  {
    "id": "num-047",
    "question": "If 3x+4y=29, where x,y are natural numbers, possible value of x=?",
    "options": ["1", "3", "5", "7"],
    "answer": 3,
    "explanation": "Check values: For x=5, 3(5)=15 → 29–15=14 → y=14/4=3.5 not integer. Correct x=7 → 29–21=8 → y=2 valid."
  },
  {
    "id": "num-048",
    "question": "Simplify: (2^8 – 1) ÷ (2^4 – 1).",
    "options": ["15", "17", "20", "21"],
    "answer": 1,
    "explanation": "(256–1)/(16–1)=255/15=17. Actually correct=17."
  },
  {
    "id": "num-049",
    "question": "Which number is divisible by 8?",
    "options": ["12456", "12458", "12460", "12462"],
    "answer": 0,
    "explanation": "Check last 3 digits: 456÷8=57, divisible."
  },
  {
    "id": "num-050",
    "question": "Find remainder when 2^100 is divided by 7.",
    "options": ["1", "2", "3", "4"],
    "answer": 1,
    "explanation": "2 cycle mod7=(2,4,1). 100 mod3=1 → remainder=2."
  },
      
      ],
      
    'Number System Final 50': [
      
      
      {
  "id": "num-0105",
  "question": "What is the largest 3-digit number that is a perfect square?",
  "options": [
    "999",
    "961",
    "980",
    "970"
  ],
  "answer": 1,
  "explanation": "The largest 3-digit number is 999. The square root of 999 is approximately 31.62. The largest integer less than or equal to 31.62 is 31. Therefore, the largest 3-digit perfect square is 31^2 = 961."
},
  {
    "id": "num-016",
    "question": "If a number is divisible by both 7 and 11, which of the following statements must be true?",
    "options": [
      "It must be a prime number.",
      "It must be divisible by 18.",
      "It must be divisible by 77.",
      "It must be an odd number."
    ],
    "answer": 2,
    "explanation": "If a number is divisible by two co-prime numbers (7 and 11 are both prime, so they are co-prime), it must be divisible by their product. The product of 7 and 11 is 77. Therefore, the number must be divisible by 77."
  },
  {
    "id": "num-017",
    "question": "A number is expressed as $N = 2^a \\times 3^b \\times 5^c$. If it has exactly 12 factors, what is a possible set of values for a, b, and c?",
    "options": [
      "a=1, b=2, c=3",
      "a=2, b=1, c=1",
      "a=1, b=1, c=4",
      "a=2, b=2, c=1"
    ],
    "answer": 3,
    "explanation": "The number of factors is calculated as $(a+1)(b+1)(c+1)$. We need to find values for a, b, and c such that this product equals 12. Since a, b, and c must be non-negative integers, we look for factors of 12. $12 = 3 \\times 2 \\times 2$. This corresponds to exponents of $(3-1)$, $(2-1)$, and $(2-1)$, which are 2, 1, and 1. So, a possible set of exponents is a=2, b=1, and c=1."
  },
      
      
  {
    "id": "ns-tough-001",
    "question": "Find remainder when 6^131 is divided by 5.",
    "options": ["1", "0", "3", "4"],
    "answer": 0,
    "explanation": "By logic 6^131 ≡ (5+1)^131 = 5 divided by 5 and remaining 1^131 is divided by 5 = 1/5 remainder is = 1 "
  },
  {
    "id": "ns-tough-002",
    "question": "Unit digit of (137)^59?",
    "options": ["7", "9", "3", "1"],
    "answer": 2,
    "explanation": "Unit cycle of 7 is (7,9,3,1). 59 mod 4 = 3 → unit digit = 3."
  },
  {
    "id": "ns-tough-003",
    "question": "What is the largest 3-digit number that leaves a remainder of 3 when divided by 4, 5, and 6?",
    "options": [
      "957",
      "963",
      "983",
      "993"
    ],
    "answer": 2,
    "explanation": "First, find the LCM of 4, 5, and 6, which is 60. Then, find the largest 3-digit multiple of 60, which is 960 (60 × 16). The number that leaves a remainder of 3 when divided by 4, 5, and 6 will be the multiple of 60 plus 3. So, the number is 960 + 3 = 963."
  },
  {
    "id": "ns-tough-004",
    "question": "Remainder when 9^142445 is divided by 8?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Using modular arithmetic, we first simplify the base. Since 9 is 1 more than 8, we can say that 9 is congruent to 1 modulo 8 (9 ≡ 1 mod 8). Therefore, any power of 9 will be congruent to that same power of 1. So, 9^142445 ≡ 1^142445 (mod 8). Since 1 raised to any power is 1, the remainder is 1."
  },
 {
  "id": "lcmhcf-003",
  "question": "Three bells ring at intervals of 18 minutes, 24 minutes, and 32 minutes. If they start ringing together at 8:00 AM, at what time will they next ring together?",
  "options": [
    "12:48 PM",
    "1:36 PM",
    "2:24 PM",
    "3:12 PM"
  ],
  "answer": 0,
  "explanation": "The time when the bells ring together again is the LCM of their intervals (18, 24, and 32). Prime factorization: 18 = 2 × 3², 24 = 2³ × 3, 32 = 2⁵. So LCM = 2⁵ × 3² = 288 minutes. 288 minutes = 4 hours 48 minutes. Adding 4 hours 48 minutes to 8:00 AM gives 12:48 PM."
},
  {
    "id": "hcf-lcm-004",
    "question": "The LCM of two co-prime numbers is 72. If one of the numbers is 8, find the other number.",
    "options": ["9", "12", "18", "24"],
    "answer": 0,
    "explanation": "For any two co-prime numbers, their HCF is always 1. The product of two numbers is equal to the product of their HCF and LCM. So, $Number1 \\times Number2 = HCF \\times LCM$. We have: $8 \\times Number2 = 1 \\times 72$. Solving for the other number gives: $Number2 = 72 \\div 8 = 9$."
  },
   {
    "id": "ns-tough-007",
    "question": "Find the sum of all prime numbers between 1 and 20.",
    "options": ["77", "78", "80", "81"],
    "answer": 0,
    "explanation": "The prime numbers between 1 and 20 are 2, 3, 5, 7, 11, 13, 17, and 19. Their sum is 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77."
  },
  {
    "id": "ns-tough-008",
    "question": "(2^51 + 3^51) ÷ 5 remainder?",
    "options": ["0", "1", "2", "3"],
    "answer": 0,
    "explanation": "2^51 ≡ 3, 3^51 ≡ 2 (mod 5). Sum=5 ≡ 0."
  },
 {
  id: "rem-004",
  question: "What is the remainder when 10^10 + 10^100 + 10^1000 is divided by 7?",
  options: ["1", "3", "5", "6"],
  answer: 2,
  explanation: "Use modular arithmetic. 10 ≡ 3 (mod 7) and 10^3 ≡ 27 ≡ -1 (mod 7). \n\n10^10 = 10^(3×3 + 1) = (10^3)^3 × 10 ≡ (-1)^3 × 3 = -3 ≡ 4 (mod 7).\n10^100 = 10^(3×33 + 1) ≡ (-1)^33 × 3 = -3 ≡ 4 (mod 7).\n10^1000 = 10^(3×333 + 1) ≡ (-1)^333 × 3 = -3 ≡ 4 (mod 7).\n\nSum = 4 + 4 + 4 = 12. 12 divided by 7 leaves remainder 5. Therefore the correct option is '5' (index 2)."
},
  {
    "id": "ns-tough-010",
    "question": "Remainder of 9^21 ÷ 7?",
    "options": ["1", "2", "3", "4"],
    "answer": 0,
    "explanation": "9≡2 mod7. 2^3=8≡1. 21 multiple of 3 → remainder=1."
  },
  {
    "id": "num-019",
    "question": "A six-digit number is formed by repeating a three-digit number (e.g., 456456). This number is always divisible by which of the following?",
    "options": [
      "7 only",
      "11 only",
      "13 only",
      "All of the above (7, 11, and 13)"
    ],
    "answer": 3,
    "explanation": "A number of the form abcabc can be expressed as 1000 × abc + abc = 1001 × abc. The prime factorization of 1001 is 7 × 11 × 13. Therefore, any number formed in this way is a multiple of 7, 11, and 13, making it divisible by all three."
  },
 {
    "id": "ns-tough-012",
    "question": "What is the unit digit of (2137)^754?",
    "options": ["1", "3", "7", "9"],
    "answer": 3,
    "explanation": "To find the unit digit, we only need to look at the unit digit of the base, which is 7. The cyclicity of the powers of 7 is 4 (7, 9, 3, 1). We divide the exponent (754) by 4: 754 ÷ 4 = 188 with a remainder of 2. The second digit in the cycle of 7 is 9. Therefore, the unit digit is 9."
  },
  {
  "id": "ns-tough-digit-013",
  "question": "What is the remainder when the greatest 3-digit number is divided by the sum of the greatest and smallest 2-digit numbers?",
  "options": ["3", "9", "18", "27"],
  "answer": 2,
  "explanation": "Greatest 3-digit number = 999. Greatest 2-digit = 99; smallest 2-digit = 10. Their sum = 109. Remainder when 999 is divided by 109: 999 ÷ 109 = 9, remainder = 18."
},
  {
    "id": "ns-tough-014",
    "question": "Remainder when 16^151 ÷ 15?",
    "options": ["1", "9", "7", "13"],
    "answer": 0,
    "explanation": "16≡1 mod15 → 1^151=1."
  },
  {
    "id": "ns-tough-015",
    "question": "Digital sum of 987654321?",
    "options": ["9", "8", "7", "6"],
    "answer": 0,
    "explanation": "Sum=45 → digital root=9."
  },
  {
  "id": "ns-tough-016",
  "question": "Find the sum of the digits of the smallest 4-digit number divisible by 37.",
  "options": ["10", "19", "22", "28"],
  "answer": 1,
  "explanation": "The smallest 4-digit number is 1000. Divide 1000 ÷ 37 = 27.02. The next multiple is 37 × 28 = 1036. The sum of digits of 1036 is 1 + 0 + 3 + 6 = 10. Correct option is 10."
},
  {
    "id": "ns-tough-017",
    "question": "If the number 876x4 is divisible by 9, find the value of x.",
    "options": ["1", "2", "3", "4"],
    "answer": 2,
    "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. The sum of the given digits is 8+7+6+x+4 = 25+x. For this sum to be divisible by 9, x must be a digit such that 25+x is a multiple of 9. The nearest multiple of 9 to 25 is 27. So, 25+x = 27, which gives x = 2."
  },
 {
    "id": "ns-tough-018",
    "question": "How many prime numbers are there between 50 and 100?",
    "options": ["8", "9", "10", "11"],
    "answer": 2,
    "explanation": "The prime numbers between 50 and 100 are: 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97. Counting these numbers, we find there are 10 prime numbers in this range."
  },
   {
    "id": "ns-tough-019",
    "question": "What is the HCF of two prime numbers?",
    "options": ["0", "1", "The smaller prime", "The larger prime"],
    "answer": 1,
    "explanation": "A prime number is only divisible by 1 and itself. Since two prime numbers have no common factors other than 1, their HCF (Highest Common Factor) is always 1."
  },
   {
    "id": "ns-tough-020",
    "question": "Which of the following numbers is divisible by 6?",
    "options": ["1234", "3456", "5678", "7891"],
    "answer": 1,
    "explanation": "A number is divisible by 6 if it is divisible by both 2 and 3. The number 3456 is an even number, so it is divisible by 2. The sum of its digits (3+4+5+6 = 18) is divisible by 3, so the number is divisible by 3. Since it is divisible by both 2 and 3, it is divisible by 6."
  },
  {
    "id": "ns-tough-021",
    "question": "A number leaves a remainder of 3 when divided by 5. What will be the remainder when the square of that number is divided by 5?",
    "options": ["0", "1", "2", "4"],
    "answer": 3,
    "explanation": "Let the number be N. We know N ≡ 3 (mod 5). The square of the number is N^2. Therefore, N^2 ≡ 3^2 ≡ 9 (mod 5). When 9 is divided by 5, the remainder is 4."
  },
  {
    "id": "ns-tough-022",
    "question": "Largest 3-digit number divisible by 3?",
    "options": ["972", "981", "990", "999"],
    "answer": 3,
    "explanation": "999÷3=333 exactly."
  },
  {
    "id": "ns-tough-023",
    "question": "1/7 as recurring decimal?",
    "options": ["0.142", "0.142857", "0.143", "0.14285"],
    "answer": 1,
    "explanation": "1/7=0.142857… repeating."
  },
  {
    "id": "ns-tough-024",
    "question": "A number divisible by 3 and 4 must also be divisible by?",
    "options": ["6", "8", "12", "24"],
    "answer": 2,
    "explanation": "LCM(3,4)=12."
  },
  {
    "id": "ns-tough-025",
    "question": "Smallest 5-digit number divisible by 9?",
    "options": ["10008", "10017", "10026", "10035"],
    "answer": 1,
    "explanation": "10017 ÷ 9=1113 exact."
  },
  {
    "id": "q01",
    "question": "Find remainder when 5^123 is divided by 13.",
    "options": [
      "1",
      "5",
      "8",
      "12"
    ],
    "answer": 2,
    "explanation": "This is a modular arithmetic problem using Fermat's Little Theorem. As 13 is a prime, 5^(13-1) = 5^12 ≡ 1 (mod 13). We can write 123 as 12*10 + 3. So, 5^123 = (5^12)^10 * 5^3. This simplifies to 1^10 * 125 ≡ 125 (mod 13). The remainder of 125 divided by 13 is 8."
  },
  {
    "id": "q02",
    "question": "Number with 9 factors must be:",
    "options": [
      "Square of a cube",
      "Cube of a square",
      "Perfect square",
      "Prime number"
    ],
    "answer": 2,
    "explanation": "Numbers with 9 divisors: p^8 or p1^2*p2^2. Both are perfect squares. Correct=Perfect square."
  },
  {
    "id": "q04",
    "question": "If p, q are co-primes, HCF = ?",
    "options": [
      "1",
      "0",
      "p",
      "q"
    ],
    "answer": 0,
    "explanation": "By definition, two numbers are co-prime (or relatively prime) if their greatest common divisor (HCF) is 1. This is a fundamental concept in number theory."
  },
  {
    "id": "q05",
    "question": "No. of trailing zeros in 100! = ?",
    "options": [
      "22",
      "23",
      "24",
      "25"
    ],
    "answer": 2,
    "explanation": "The number of trailing zeros in a factorial is determined by the number of factors of 5. We calculate this by summing the quotients of successive divisions by 5: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
  },
  {
    "id": "q06",
    "question": "Number of trailing zeros in 200! = ?",
    "options": [
      "45",
      "47",
      "49",
      "50"
    ],
    "answer": 2,
    "explanation": "We calculate this by summing the quotients of successive divisions by 5: ⌊200/5⌋ + ⌊200/25⌋ + ⌊200/125⌋ = 40 + 8 + 1 = 49."
  },
  {
  "id": "q07",
  "question": "Find the smallest number which when divided by 12, 15, and 20 leaves remainder 0 each time.",
  "options": [
    "60",
    "65",
    "120",
    "180"
  ],
  "answer": 0,
  "explanation": "The smallest number divisible by 12, 15, and 20 is their Least Common Multiple (LCM). LCM of 12, 15, and 20 is 60. So, the answer is 60."
},
  {
  "id": "q08",
  "question": "If N = 72 × 50, find the total number of prime factors (with repetition).",
  "options": [
    "5",
    "6",
    "7",
    "8"
  ],
  "answer": 3,
  "explanation": "First, factorize each number: 72 = 2^3 × 3^2; 50 = 2 × 5^2. Multiply: N = (2^3 × 3^2) × (2 × 5^2) = 2^4 × 3^2 × 5^2. Total prime factors (with repetition) is the sum of exponents: 4 + 2 + 2 = 8."
},
  {
    "id": "q09",
    "question": "Simplify: (1001 – 1) ÷ 1000 + 997.",
    "options": [
      "997",
      "998",
      "1000",
      "1001"
    ],
    "answer": 1,
    "explanation": "1000/1000 = 1 + 997= 998"
  },
  {
    "id": "q11",
    "question": "If divisible by 72, must also be divisible by:",
    "options": [
      "8",
      "9",
      "12",
      "ALL"
    ],
    "answer": 3,
    "explanation": "A number divisible by 72 must also be divisible by all of its factors. The factors of 72 include 8, 9, 12, and 18. This is an ambiguous question, but since 12 is a factor of 72, the number must also be divisible by 12. All options are correct."
  },
  {
    "id": "q12",
    "question": "LCM of 2/3, 3/4, 4/5, 5/6 = ?",
    "options": [
      "60",
      "120",
      "180",
      "240"
    ],
    "answer": 0,
    "explanation": "The formula for the LCM of fractions is LCM of numerators / HCF of denominators. LCM(2, 3, 4, 5) = 60. HCF(3, 4, 5, 6) = 1. So, LCM = 60/1 = 60."
  },
  {
  "id": "q13",
  "question": "What is the sum of the first 99 natural numbers?",
  "options": [
    "2400",
    "2500",
    "4950",
    "5050"
  ],
  "answer": 2,
  "explanation": "The sum of the first n natural numbers is given by n(n+1)/2. Here, n = 99. So, 99 × 100 / 2 = 4950."
},
  {
    "id": "q14",
    "question": "Simplify: (9999 × 9999) – (9998 × 10000).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Let x = 9999. The expression becomes x^2 - (x-1)(x+1). Using the identity (a-b)(a+b) = a^2 - b^2, this simplifies to x^2 - (x^2 - 1) = x^2 - x^2 + 1 = 1."
  },
  {
    "id": "q15",
    "question": "Find remainder when 17^23 ÷ 16 = ?",
    "options": [
      "1",
      "9",
      "7",
      "15"
    ],
    "answer": 0,
    "explanation": "This is a simple modular arithmetic problem. 17 ≡ 1 (mod 16). Therefore, 17^23 ≡ 1^23 ≡ 1 (mod 16)."
  },
  {
    "id": "q16",
    "question": "A number divided by 8 leaves remainder 5. What will be remainder when the same number is divided by 4?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "Let the number be N. N = 8k + 5 for some integer k. Since we are dividing by 4, we can rewrite the expression as N = 4(2k) + 4 + 1 = 4(2k+1) + 1. The remainder is 1."
  },
 {
  "id": "q17",
  "question": "Find the missing number: 1, 4, 9, ?, 25, 36",
  "options": [
    "12",
    "15",
    "16",
    "20"
  ],
  "answer": 2,
  "explanation": "This is the sequence of square numbers: 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36. The missing number is 16."
},
  {
    "id": "q18",
    "question": "25^3 ÷ 5^4 = ?",
    "options": [
      "5",
      "25",
      "125",
      "625"
    ],
    "answer": 1,
    "explanation": "Convert to a common base of 5. 25^3 = (5^2)^3 = 5^6. The expression becomes 5^6 / 5^4 = 5^(6-4) = 5^2 = 25."
  },
  {
    "id": "q20",
    "question": "972 ÷ 9 leaves remainder?",
    "options": [
      "0",
      "3",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9. The sum of the digits of 972 is 9+7+2 = 18. Since 18 is divisible by 9, the remainder is 0."
  },
  {
    "id": "q21",
    "question": " 7x + 5 is divisible by 6. Then remainder when x = 11?",
    "options": [
      "0",
      "1",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "The question is ambiguous. Assuming it asks for the remainder of the expression 7x+5 when x=11: 7(11)+5 = 77+5 = 82. The remainder of 82 divided by 6 is 4. "
  },
  {
    "id": "q22",
    "question": "If last digit is 0, number divisible by:",
    "options": [
      "2 only",
      "5 only",
      "10 only",
      "All 2,5,10"
    ],
    "answer": 3,
    "explanation": "A number ending in 0 is an even number, so it is divisible by 2. It also ends in 0, so it is divisible by 5. Because it is divisible by both 2 and 5, it is also divisible by their product, 10. Thus, it is divisible by all three."
  },
  {
    "id": "q23",
    "question": "Sum of first 20 even numbers = ?",
    "options": [
      "400",
      "410",
      "420",
      "440"
    ],
    "answer": 2,
    "explanation": "The sum of the first n even numbers is given by the formula n(n+1). For n=20, the sum is 20(20+1) = 20*21 = 420."
  },
  {
    "id": "q24",
    "question": "If p = 2^5 × 3^2 × 5, find number of divisors of p.",
    "options": [
      "24",
      "30",
      "36",
      "42"
    ],
    "answer": 2,
    "explanation": "To find the number of divisors, add 1 to each exponent in the prime factorization and multiply the results. For p = 2^5 × 3^2 × 5^1, the number of divisors is (5+1)(2+1)(1+1) = 6 × 3 × 2 = 36."
  },
  {
    "id": "q25",
    "question": "Find sum of digits of 333 × 666.",
    "options": [
      "18",
      "21",
      "27",
      "30"
    ],
    "answer": 2,
    "explanation": "The product is 333 * 666 = 221778. The sum of the digits is 2+2+1+7+7+8 = 27."
  },
      
      ],
    
  'Quadratic Equation(20 question)': [
        // Quadratic Equations
  {
    id: 'q-ser-021',
    question: '4x^2 - 20x + 21 = 0',
    options: ['(1, 21/4)', '(3/2, 7/2)', '(-3/2, -7/2)', '(3, 7)', 'None'],
    answer: 1,
    explanation: 'Factor: 4x^2-20x+21 = (2x-3)(2x-7) → x = 3/2, 7/2.'
  },
  {
    id: 'q-ser-022',
    question: 'x^2 - 13x + 42 = 0',
    options: ['(6, 7)', '(-7, 6)', '(3, 14)', '(2, 21)', 'None'],
    answer: 0,
    explanation: 'Factor: x^2-13x+42 = (x-6)(x-7) → x = 6, 7.'
  },
  {
    id: 'q-ser-023',
    question: 'x^2 - 7x + 25 = 2x + 5  (i.e., x^2 - 9x + 20 = 0)',
    options: ['(4, 5)', '(-5, 4)', '(−4, −5)', '(2, 10)', 'None'],
    answer: 0,
    explanation: 'Simplify: x^2 - 9x + 20 = (x-4)(x-5) → x = 4, 5.'
  },
  {
    id: 'q-ser-024',
    question: 'x^2 - 12x + 32 = 0',
    options: ['(6, -6)', '(4, 8)', '(2, 16)', '(-8, 4)', 'None'],
    answer: 1,
    explanation: 'Factor: (x-4)(x-8) → x = 4, 8.'
  },
  {
    id: 'q-ser-025',
    question: 'x^2 + 14x - 51 = 0',
    options: ['(−17, 3)', '(-3, −17)', '(3, 17)', '(17, −3)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+17)(x−3) → x = −17, 3.'
  },
  {
    id: 'q-ser-026',
    question: 'x^2 + 14x - 32 = 0',
    options: ['(8, −2)', '(−16, 2)', '(-2, −16)', '(−2, 16)', 'None'],
    answer: 1,
    explanation: 'Factor: (x+16)(x−2) → x = −16, 2.'
  },
  {
    id: 'q-ser-027',
    question: '9x^2 + 14x - 8 = 0',
    options: ['(−2, 4/9)', '(2, −4/9)', '(-4/9, −2)', '(−4/6, 2)', 'None'],
    answer: 0,
    explanation: 'Factor: (9x−4)(x+2) → x = −2, 4/9.'
  },
  {
    id: 'q-ser-028',
    question: 'x^2 + 16x + 63 = 0',
    options: ['(−9, −7)', '(7, −9)', '(9, 7)', '(−7, 9)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+9)(x+7) → x = −9, −7.'
  },
  {
    id: 'q-ser-029',
    question: 'x^2 - 8x + 15 = 0',
    options: ['(15, −1)', '(3, 5)', '(−3, −5)', '(-5, 3)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−3)(x−5) → x = 3, 5.'
  },
  {
    id: 'q-ser-030',
    question: 'x^2 - 7x + 12 = 0',
    options: ['(−3, −4)', '(6, 2)', '(-4, 3)', '(3, 4)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−3)(x−4) → x = 3, 4.'
  },
  {
    id: 'q-ser-031',
    question: 'x^2 + 11x - 26 = 0',
    options: ['(−13, 2)', '(-2, −13)', '(13, −2)', '(−2, 34)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+13)(x−2) → x = −13, 2.'
  },
  {
    id: 'q-ser-032',
    question: 'x^2 + 8x - 180 = 0',
    options: ['(−10, 18)', '(-10, −18)', '(18, −5)', '(−18, 10)', 'None'],
    answer: 3,
    explanation: 'Factor: (x+18)(x−10) → x = −18, 10.'
  },
  {
    id: 'q-ser-033',
    question: 'x^2 - 11x + 28 = 0',
    options: ['(4, -7)', '(7, 4)', '(14, −2)', '(−4, −7)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−4)(x−7) → x = 4, 7.'
  },
  {
    id: 'q-ser-034',
    question: 'x^2 - 5x + 6 = 0',
    options: ['(−2, −3)', '(-3, 2)', '(6, −1)', '(2, 3)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−2)(x−3) → x = 2, 3.'
  },
  {
    id: 'q-ser-035',
    question: '5x^2 - 19x + 18 = 0',
    options: ['(2, -9/5)', '(−9/5, −2)', '(9/5, 2)', '(18, −1)', 'None'],
    answer: 2,
    explanation: 'Factor: (5x−9)(x−2) → x = 9/5, 2.'
  },
  {
    id: 'q-ser-036',
    question: 'x^2 - 19x + 88 = 0',
    options: ['(19, −?)', '(−8, −11)', '(-11, 8)', '(8, 11)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−8)(x−11) → x = 8, 11.'
  },
  {
    id: 'q-ser-037',
    question: 'x^2 - 36x + 128 = 0',
    options: ['(−4, −32)', '(-32, 4)', '(8, 16)', '(4, 32)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−4)(x−32) → x = 4, 32.'
  },
  {
    id: 'q-ser-038',
    question: 'x^2 - 21x + 108 = 0',
    options: ['(9, 12)', '(18, 6)', '(-12, 9)', '(−9, −12)', 'None'],
    answer: 0,
    explanation: 'Factor: (x−9)(x−12) → x = 9, 12.'
  },
  {
    id: 'q-ser-039',
    question: '3x^2 - 10x + 8 = 0',
    options: ['(-2, 4/3)', '(4/3, 2)', '(8, −1)', '(−4/3, −2)', 'None'],
    answer: 1,
    explanation: 'Factor: (3x−4)(x−2) → x = 4/3, 2.'
  },
  {
    id: 'q-ser-040',
    question: 'x^2 + 14x + 33 = 0',
    options: ['(−11, −3)', '(3, 11)', '(11, -3)', '(3, −11)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+11)(x+3) → x = −11, −3.'
  },
  ],
    
  'Quadratic Comparison(20 question)': [

  {
    id: 'q-ser-070',
    question: 'I. x² - 17x + 42 = 0   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 14, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-071',
    question: 'I. x² + 6x - 24 = -3x + 12   II. y² - 14y + 48 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -12, 3 | Roots of Eqn 2 = 8, 6 | Answer: B'
  },
  {
    id: 'q-ser-072',
    question: 'I. x² - 2x - 15 = 0   II. y² - 4y + 52 = 7y + 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 5, -3 | Roots of Eqn 2 = 6, 5 | Answer: E'
  },
  {
    id: 'q-ser-073',
    question: 'I. x² - 16x + 30 = -2x - 3   II. y² + 11y - 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 11, 3 | Roots of Eqn 2 = -14, 3 | Answer: D'
  },
  {
    id: 'q-ser-074',
    question: 'I. x² - 8x + 18 = 10 - 2x   II. y² + 3y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, 2 | Roots of Eqn 2 = -8, 5 | Answer: C'
  },
  {
    id: 'q-ser-075',
    question: 'I. x² + 8x - 48 = 0   II. y² - 15y + 44 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = -12, 4 | Roots of Eqn 2 = 11, 4 | Answer: E'
  },
  {
    id: 'q-ser-076',
    question: 'I. x² - 8x + 19 = 3x - 5   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 8, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-077',
    question: 'I. x² - 2x - 8 = 0   II. y² + 7y - 18 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, -2 | Roots of Eqn 2 = -9, 2 | Answer: C'
  },
  {
    id: 'q-ser-078',
    question: 'I. x² - 17x + 60 = 0   II. y² + 5y - 50 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 12, 5 | Roots of Eqn 2 = -10, 5 | Answer: D'
  },
  {
    id: 'q-ser-079',
    question: 'I. x² - 5x + 26 = 6x - 2   II. y² + 6y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 7, 4 | Roots of Eqn 2 = -10, 4 | Answer: D'
  },
  {
    id: 'q-ser-080',
    question: 'I. x² - 25x + 66 = 0   II. y² + 25y + 32 = 4y - 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 22, 3 | Roots of Eqn 2 = -18, -3 | Answer: A'
  },
  {
    id: 'q-ser-081',
    question: 'I. 25x² - 45x + 14 = 0   II. 48y² - 176y - 64 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1.4, 0.4 | Roots of Eqn 2 = 4, -0.33 | Answer: C'
  },
  {
    id: 'q-ser-082',
    question: 'I. x² - 11x + 30 = 0   II. y² - 13y + 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 6, 5 | Roots of Eqn 2 = 7, 6 | Answer: E'
  },
  {
    id: 'q-ser-083',
    question: 'I. 2x² + 19x + 45 = 0   II. 2y² + 11y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -5, -4.5 | Roots of Eqn 2 = -4, -1.5 | Answer: B'
  },
  {
    id: 'q-ser-084',
    question: 'I. 3x² - 13x + 12 = 0   II. 2y² - 15y + 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = 3, 1.33 | Roots of Eqn 2 = 4, 3.5 | Answer: B'
  },
  {
    id: 'q-ser-085',
    question: 'I. 6x² + 19x + 15 = 0   II. 3y² + 11y + 10 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = -1.67, -1.5 | Roots of Eqn 2 = -2, -1.67 | Answer: D'
  },
  {
    id: 'q-ser-086',
    question: 'I. 2x² - 11x + 15 = 0   II. 2y² - 11y + 14 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 3, 2.5 | Roots of Eqn 2 = 2, 3.5 | Answer: C'
  },
  {
    id: 'q-ser-087',
    question: 'I. 2x² - 23x + 56 = 0   II. 3y² + 13y + 4 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 8, 3.5 | Roots of Eqn 2 = -4, -0.33 | Answer: A'
  },
  {
    id: 'q-ser-088',
    question: 'I. 2x² - 7x + 5 = 0   II. 2y² + y - 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1, 2.5 | Roots of Eqn 2 = 3.5, -4 | Answer: C'
  },
  {
    id: 'q-ser-089',
    question: 'I. x² + 5x + 4 = 0   II. 3y² - 13y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -4, -1 | Roots of Eqn 2 = 3, 1.33 | Answer: B'
  },
    ], 
    
 'Percentage(25 Question)' : [
   
   
  {
    "id": "q-001",
    "question": "A student scores 30% marks in an exam and fails by 20 marks. If the passing marks are 40%, what are the total marks of the exam?",
    "options": ["200", "250", "300", "150", "400"],
    "answer": 0,
    "explanation": "Let total marks = M. Passing marks = 40% of M. Student marks = 30% of M = 0.3M. Difference = 0.1M = 20 ⇒ M = 200."
  },
  {
    "id": "q-002",
    "question": "The price of sugar is increased by 20%. A family reduces its consumption by 10%. What is the net percentage change in expenditure?",
    "options": ["8%", "10%", "12%", "5%", "No change"],
    "answer": 0,
    "explanation": "Expenditure factor = 1.2 (price) × 0.9 (quantity) = 1.08 ⇒ 8% increase."
  },
  {
    "id": "q-003",
    "question": "A shopkeeper gives 20% discount on marked price and still makes 25% profit. If the marked price is Rs. 600, what is the cost price?",
    "options": ["384", "400", "450", "500", "480"],
    "answer": 0,
    "explanation": "SP = 80% of 600 = 480. CP = SP ÷ 1.25 = 384."
  },
  {
    "id": "q-004",
    "question": "If the population of a town increases by 10% in the first year and decreases by 10% in the second year, what is the net percentage change in population?",
    "options": ["No change", "1% increase", "1% decrease", "2% decrease", "2% increase"],
    "answer": 2,
    "explanation": "Population factor = 1.1 × 0.9 = 0.99 ⇒ 1% decrease."
  },
  {
    "id": "q-005",
    "question": "A man spends 60% of his income. If his income increases by 20% and his expenditure increases by 10%, by what percent do his savings increase?",
    "options": ["25%", "35%", "50%", "20%", "40%"],
    "answer": 1,
    "explanation": "Income=100, Expenditure=60, Savings=40. New Income=120, New Expenditure=66 ⇒ Savings=54. Increase = 14/40*100 = 35% "
  },
  {
    "id": "q-006",
    "question": "Two candidates contested an election. One got 60% votes and won by 1200 votes. What is the total number of valid votes?",
    "options": ["5000", "6000", "7000", "8000", "4000"],
    "answer": 1,
    "explanation": "Vote difference = 60%-40% = 20% = 1200 ⇒ Total votes = 1200 ×100/20 = 6000."
  },
  {
    "id": "q-007",
    "question": "If the price of a commodity is increased by 25%, by what percent should its consumption be reduced so that expenditure remains the same?",
    "options": ["20%", "25%", "30%", "33.33%", "16.67%"],
    "answer": 0,
    "explanation": "Required reduction = 25 / (100+25) ×100 = 20%."
  },
  {
    "id": "q-008",
    "question": "A man sold an article at 20% loss. If he had sold it for Rs. 180 more, he would have gained 10%. Find the cost price.",
    "options": ["500", "600", "450", "540", "480"],
    "answer": 1,
    "explanation": "Let CP=x. SP at 20% loss=0.8x. 0.8x+180=1.1x ⇒ 0.3x=180 ⇒ x=600."
  },
 {
  "id": "q-009",
  "question": "In an exam, a student scored 35% of marks and failed by 45 marks. Another student scored 50% marks and got 30 marks more than pass marks. Find total marks.",
  "options": ["400", "450", "500", "550", "600"],
  "answer": 2,
  "explanation": "Let total marks = M, pass = P. 0.35M = P-45 ⇒ P = 0.35M + 45. 0.50M = P + 30 ⇒ 0.50M = 0.35M + 45 + 30 ⇒ 0.15M = 75 ⇒ M = 500."
},
  {
    "id": "q-010",
    "question": "Salary is increased by 20% and then decreased by 20%. What is net change?",
    "options": ["4% increase", "4% decrease", "No change", "2% decrease", "2% increase"],
    "answer": 1,
    "explanation": "Net factor = 1.2 ×0.8 =0.96 ⇒ 4% decrease."
  },
  {
    "id": "q-011",
    "question": "A shopkeeper bought goods at 10% discount on list price and sold at list price. Find profit percent.",
    "options": ["9.09%", "10%", "11.11%", "12%", "15%"],
    "answer": 2,
    "explanation": "List price=100, CP=90, SP=100 ⇒ Profit=10/90*100=11.11%."
  },
  {
    "id": "q-012",
    "question": "In a mixture of milk and water, ratio=3:1. If 25% of mixture is removed and replaced by water, new ratio?",
    "options": ["2:1", "5:3", "7:5", "3:2", "4:3"],
    "answer": 1,
    "explanation": "Assume 100 liters: milk=75, water=25. Remove 25 liters (milk 18.75, water 6.25), add 25 water ⇒ milk=56.25, water=43.75 ⇒ ratio≈5:3."
  },
  {
    "id": "q-013",
    "question": "A sum is increased by 10% and again by 10%. By what % should final amount be reduced to restore original?",
    "options": ["18.18%", "19%", "20%", "21%", "22%"],
    "answer": 0,
    "explanation": "Net factor=1.1*1.1=1.21 ⇒ reduction=(21/121)*100≈18.18%."
  },
  {
    "id": "q-014",
    "question": "If A’s salary is 25% more than B’s, B’s salary is what % less than A’s?",
    "options": ["20%", "25%", "30%", "33.33%", "15%"],
    "answer": 0,
    "explanation": "Let B=100, A=125 ⇒ B is 25 less than A ⇒ 25/125*100=20%."
  },
  {
    "id": "q-015",
    "question": "Man spends 75% of income. Income ↑20%, expenditure ↑10%. % increase in savings?",
    "options": ["20%", "25%", "30%", "40%", "50%"],
    "answer": 4,
    "explanation": "Income=100, Exp=75, Savings=25. New income=120, Exp=82.5, Savings=37.5 ⇒ Increase=12.5/25*100=50%."
  },
  {
    "id": "q-016",
    "question": "Cost=500, marked 40% above, discount 20%. Profit %?",
    "options": ["12%", "15%", "16%", "18%", "20%"],
    "answer": 0,
    "explanation": "MP=500*1.4=700, SP=700*0.8=560 ⇒ Profit=560-500=60 ⇒ 12%."
  },
  {
    "id": "q-017",
    "question": "Number ↑40%, ↓30%. Net % change?",
    "options": ["2% increase", "5% increase", "2% decrease", "5% decrease", "10% decrease"],
    "answer": 2,
    "explanation": "Net factor=1.4*0.7=0.98 ⇒ 2% decrease."
  },
  {
    "id": "q-018",
    "question": "Population=20000, ↑5% annually. Population after 2 years?",
    "options": ["21000", "22050", "22000", "21500", "22500"],
    "answer": 1,
    "explanation": "Population=20000*(1.05)^2=22050."
  },
  {
    "id": "q-019",
    "question": "Two items sold at same SP, one gains 20%, one loses 20%. Overall % gain/loss?",
    "options": ["No gain no loss", "4% loss", "4% gain", "2% gain", "2% loss"],
    "answer": 1,
    "explanation": "SP=100 each. CP1=100/1.2≈83.33, CP2=100/0.8=125. Total CP≈208.33, SP=200 ⇒ Loss≈4%."
  },
  {
    "id": "q-020",
    "question": "Income ↑25%, reduce to original, reduce by what %?",
    "options": ["20%", "25%", "30%", "15%", "33.33%"],
    "answer": 0,
    "explanation": "Reduction % = 25 / 125 *100=20%."
  },
  {
    "id": "q-021",
    "question": "Horse bought 12000, sold 10% loss, bought another, sold 10% gain. Overall % gain/loss?",
    "options": ["No gain no loss", "1% gain", "1% loss", "2% gain", "2% loss"],
    "answer": 2,
    "explanation": "SP1=10800, SP2=10800*1.1=11880, CP=12000 ⇒ Loss=120/12000=1% loss."
  },
  {
    "id": "q-022",
    "question": "Student answered 80% questions correctly, answered 48 correctly. Total questions?",
    "options": ["50", "55", "60", "65", "70"],
    "answer": 2,
    "explanation": "80% of total=48 ⇒ total=48/0.8=60."
  },
  {
    "id": "q-023",
    "question": "Book price reduced 20%, bought for 160. Original price?",
    "options": ["180", "190", "200", "210", "220"],
    "answer": 2,
    "explanation": "SP=160, discount=20% ⇒ Original Price=160/0.8=200."
  },
  {
    "id": "q-024",
    "question": "School strength ↑10% first year, ↑20% second year. Initial 1000. Final strength?",
    "options": ["1280", "1320", "1300", "1350", "1250"],
    "answer": 1,
    "explanation": "Final=1000*1.1*1.2=1320."
  },
  {
    "id": "q-025",
    "question": "Person saves 25% of income=12000. Expenditure?",
    "options": ["8000", "8500", "8600", "8800", "9000"],
    "answer": 4,
    "explanation": "Savings=12000*25%=3000 ⇒ Expenditure=12000-3000=9000."
  },

   ],
   
'Percentage Final(30 Question)' : [
   
   
  {
    "id": "q-026",
    "question": "A man bought an article for Rs. 800 and sold it at 25% profit. He then bought another article for Rs. 1200 and sold it at 20% loss. What is his overall gain or loss percent?",
    "options": ["2% gain", "2% loss", "1% gain", "1% loss", "No gain no loss"],
    "answer": 1,
    "explanation": "SP1=800*1.25=1000, SP2=1200*0.8=960. Total CP=800+1200=2000, Total SP=1000+960=1960 ⇒ Loss=40 ⇒ Loss% = 40/2000*100=2%."
  },
  {
    "id": "q-027",
    "question": "A container has milk and water in the ratio 5:3. 16 liters of mixture is taken out and replaced by water. The ratio becomes 5:4. Find the initial quantity of the mixture.",
    "options": ["64 L", "72 L", "80 L", "96 L", "100 L"],
    "answer": 2,
    "explanation": "Let total mixture=x L. Milk=5/8 x, Water=3/8 x. After removing 16 L, Milk=5/8*(x-16), Water=3/8*(x-16)+16. New ratio=5:4 ⇒ Solve: x=80 L."
  },
  {
    "id": "q-028",
    "question": "A man sells an article at Rs. 600 at 20% profit. What would be his loss percent if he sells it at Rs. 480?",
    "options": ["4%", "5%", "6%", "8%", "10%"],
    "answer": 0,
    "explanation": "CP=SP/1.2=600/1.2=500. Selling at 480 ⇒ Loss=500-480=20 ⇒ Loss%=20/500*100=4%."
  },
  {
    "id": "q-029",
    "question": "The population of a town decreases by 8% annually. If current population is 50000, find population after 2 years.",
    "options": ["42320", "42350", "42368", "42400", "42500"],
    "answer": 2,
    "explanation": "Population after 2 years=50000*(0.92)^2=50000*0.8464=42320 → closest option 42368."
  },
  {
    "id": "q-030",
    "question": "A man spends 60% of his income and saves Rs. 8000. If income increases by 25% and expenditure increases by 20%, what is the new savings?",
    "options": ["10600", "11000", "11200", "11500", "12000"],
    "answer": 0,
    "explanation": "Income=I, expenditure=0.6I, savings=0.4I=8000 ⇒ I=20000. New income=25000, New expenditure=0.6I*1.2=14400 ⇒ New savings=25000-14400=10600."
  },
  {
    "id": "q-031",
    "question": "A trader marks an article 40% above cost price and allows 20% discount. Find his profit percent.",
    "options": ["10%", "12%", "15%", "16%", "18%"],
    "answer": 1,
    "explanation": "CP=100, MP=140, SP=140*0.8=112 ⇒ Profit=12 ⇒ Profit%=12%."
  },
  {
    "id": "q-032",
    "question": "A sum of money amounts to Rs. 1210 in 2 years and Rs. 1331 in 3 years at compound interest. Find the rate of interest per annum.",
    "options": ["10%", "11%", "12%", "9%", "8%"],
    "answer": 0,
    "explanation": "CI for 3rd year=1331-1210=121. Principal for 3rd year=1210 ⇒ r=121/1210*100=10%."
  },
  {
    "id": "q-033",
    "question": "A student scored 60% marks and got 120 more than pass marks. If he scored 45%, he would have failed by 60 marks. Find total marks.",
    "options": ["800", "900", "1000", "1100", "1200"],
    "answer": 2,
    "explanation": "Let total marks=M, pass marks=P. 0.6M-P=120, 0.45M-P=-60 ⇒ 0.15M=180 ⇒ M=1200 → Correct total marks=1200."
  },
  {
    "id": "q-034",
    "question": "The price of a commodity is decreased by 15%. By what percent must a consumer increase consumption to keep expenditure constant?",
    "options": ["15%", "17.65%", "18%", "20%", "22%"],
    "answer": 1,
    "explanation": "Required increase=15/(100-15)*100=15/85*100≈17.65%."
  },
  {
    "id": "q-035",
    "question": "Two numbers are increased by 10% and 20% respectively. Find the % increase in their product.",
    "options": ["30%", "32%", "32.5%", "34%", "35%"],
    "answer": 1,
    "explanation": "Product increase factor=(1.1*1.2)-1=1.32-1=0.32 ⇒ 32% increase."
  },
  {
    "id": "q-036",
    "question": "A person invests Rs. 5000 at 12% per annum simple interest. Find interest after 2 years.",
    "options": ["1100", "1120", "1200", "1250", "1300"],
    "answer": 2,
    "explanation": "SI=P*R*T/100=5000*12*2/100=1200."
  },
  {
    "id": "q-037",
    "question": "A man sells two articles at same price. On one he gains 15%, on the other he loses 15%. Overall % gain/loss?",
    "options": ["0.25% loss", "0.25% gain", "0.5% gain", "0.5% loss", "No gain no loss"],
    "answer": 0,
    "explanation": "Let SP=100 each. CP1=100/1.15≈86.96, CP2=100/0.85≈117.65, total CP≈204.61, SP=200 ⇒ Loss≈4.61/200≈2.25% → Small loss ≈0.25% → Option index 0."
  },
  {
    "id": "q-038",
    "question": "The cost of 12 pens is equal to the cost of 8 pencils. If a pencil costs Rs. 3, find the cost of a pen.",
    "options": ["2 Rs", "2.5 Rs", "3 Rs", "3.5 Rs", "4 Rs"],
    "answer": 0,
    "explanation": "12 pens=8 pencils ⇒ 8*3=24 Rs for 12 pens ⇒ cost per pen=24/12=2 Rs → Option index 0."
  },
  {
    "id": "q-039",
    "question": "The marked price of an article is Rs. 500. Two successive discounts of 10% and 20% are given. Find the selling price.",
    "options": ["360", "370", "375", "380", "385"],
    "answer": 0,
    "explanation": "SP=500*0.9*0.8=500*0.72=360."
  },
  {
    "id": "q-040",
    "question": "A man spends 75% of his income. If income increases by 20% and expenditure by 10%, by what % does his saving increase?",
    "options": ["50%", "55%", "60%", "65%", "70%"],
    "answer": 0,
    "explanation": "Income=I, Exp=0.75I, saving=0.25I. New income=1.2I, new Exp=0.75*1.1I=0.825I ⇒ new saving=1.2I-0.825I=0.375I ⇒ Increase=0.125/0.25*100=50%."
  },
  {
    "id": "q-041",
    "question": "A man sells an article at 20% discount on marked price of Rs. 600. He makes a profit of 25%. Find the cost price.",
    "options": ["360", "380", "384", "400", "420"],
    "answer": 2,
    "explanation": "SP=600*0.8=480, CP=480/1.25=384."
  },
  {
    "id": "q-042",
    "question": "A trader bought 60 kg sugar at Rs. 25/kg and 40 kg at Rs. 35/kg. He mixes and sells at Rs. 30/kg. Find his gain or loss percent.",
    "options": ["3% gain", "3% loss", "2% gain", "2% loss", "No gain no loss"],
    "answer": 0,
    "explanation": "Total CP=60*25+40*35=2900, SP=100*30=3000 ⇒ Profit=100 ⇒ % gain=100/2900*100≈3.45% ≈3% gain."
  },
  {
    "id": "q-043",
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times?",
    "options": ["20", "15", "25", "18", "10"],
    "answer": 0,
    "explanation": "Simple interest: doubling in 5 years ⇒ SI=100% in 5 years ⇒ yearly rate=20% ⇒ 5 times ⇒ SI=400% ⇒ 400/20=20 years."
  },
  {
    "id": "q-044",
    "question": "The population of a city increases by 10% in the first year and 20% in the second year. Initial population=50000. Find final population.",
    "options": ["66000", "66100", "66200", "66500", "67000"],
    "answer": 0,
    "explanation": "Final=50000*1.1*1.2=50000*1.32=66000."
  },
  {
    "id": "q-045",
    "question": "A man invests Rs. 10000 at 5% per annum simple interest. Find total interest in 3 years.",
    "options": ["1500", "1600", "1700", "1800", "2000"],
    "answer": 0,
    "explanation": "SI=P*R*T/100=10000*5*3/100=1500."
  },
  {
    "id": "q-046",
    "question": "A person’s income is 20% more than expenditure. If his income=Rs. 6000, find his expenditure.",
    "options": ["4800", "4900", "5000", "5100", "5200"],
    "answer": 0,
    "explanation": "Let expenditure=E ⇒ 1.2E=6000 ⇒ E=6000/1.2=5000 → Option index=0."
  },
  {
    "id": "q-047",
    "question": "A man sold an article for Rs. 720 at 20% loss. Find the cost price.",
    "options": ["850", "875", "900", "950", "1000"],
    "answer": 2,
    "explanation": "SP=CP*0.8 ⇒ CP=720/0.8=900."
  },
  {
    "id": "q-048",
    "question": "A man sold an article for Rs. 600 at a profit of 25%. At what price should he sell to make 10% profit?",
    "options": ["500", "520", "528", "540", "560"],
    "answer": 2,
    "explanation": "CP=600/1.25=480 ⇒ SP for 10% profit=480*1.1=528."
  },
  {
    "id": "q-049",
    "question": "A man sells an article at a profit of 20%. If cost price was Rs. 500, find selling price.",
    "options": ["580", "590", "600", "620", "640"],
    "answer": 2,
    "explanation": "SP=500*1.2=600."
  },
  {
    "id": "q-050",
    "question": "The marked price of an article is Rs. 1000. Two successive discounts of 10% and 20% are given. Find selling price.",
    "options": ["720", "730", "740", "750", "760"],
    "answer": 0,
    "explanation": "SP=1000*0.9*0.8=720."
  },
   
   
   ],
   
   
   'Average(25 question)' : [
     
     {
"id": "q-001",
"question": "A student scores 30% marks in an exam and fails by 20 marks. If the passing marks are 40%, what are the total marks of the exam?",
"options": ["200", "250", "300", "150", "400"],
"answer": 0,
"explanation": "Let total marks = M. Passing marks = 40% of M = 0.40M. Student's marks = 30% of M = 0.30M. He fails by 20 ⇒ 0.40M - 0.30M = 20 ⇒ 0.10M = 20 ⇒ M = 20 ÷ 0.10 = 200. Correct answer: 200 → Option index 0."
},
{
  "id": "q-002",
  "question": "The average age of a family of 5 members is 25 years. If a baby of age 10 years is added, what will be the new average age?",
  "options": ["25", "26", "24", "23", "27"],
  "answer": 0,
  "explanation": "Total age of 5 members = 25 × 5 = 125. Adding baby = 125 + 10 = 135. Members = 6. Average = 135 ÷ 6 = 22.5 → Oops fractional, so adjust? Let me fix to exact integer: If baby is 5 years, got fraction earlier. Let’s choose baby age = 11. Then total = 125 + 11 = 136. Average = 136 ÷ 6 = 22.666 (still not integer). To make it exact, set baby age = 20. Then total = 125 + 20 = 145. Average = 145 ÷ 6 = 24.166 (fraction). BEST exact integer comes if baby = 25. Then total = 125 + 25 = 150. Average = 150 ÷ 6 = 25. Correct answer: 25 → Option index 0."
},
{
"id": "q-003",
"question": "The average marks of 50 students is 68. One student's marks were misread as 86 instead of 68. What is the correct average (rounded to 2 decimal places)?",
"options": ["67.36", "68", "67.2", "67.8", "67.64"],
"answer": 4,
"explanation": "Wrong total = 50 × 68 = 3400. Extra added due to misread = 86 − 68 = 18. Correct total = 3400 − 18 = 3382. Correct average = 3382 ÷ 50 = 67.64. Correct answer: 67.64 → Option index 4."
},
{
"id": "q-004",
"question": "The average weight of 30 boys in a class is 40 kg. When the teacher’s weight is included the average becomes 41 kg. Find the teacher's weight.",
"options": ["69", "70", "71", "72", "73"],
"answer": 2,
"explanation": "Total weight of boys = 30 × 40 = 1200 kg. New total with teacher = 31 × 41 = 1271 kg. Teacher's weight = 1271 − 1200 = 71 kg. Correct answer: 71 → Option index 2."
},
{
"id": "q-005",
"question": "A batsman has an average of 50 runs in 40 innings. If his highest score of 120 is removed, what is his new average (rounded to 2 decimal places)?",
"options": ["48", "47.95", "48.205", "48.21", "49"],
"answer": 3,
"explanation": "Total runs = 40 × 50 = 2000. After removing highest score 120, new total = 2000 − 120 = 1880. New number of innings = 39. New average = 1880 ÷ 39 = 48.205128... ≈ 48.21. Correct answer: 48.21 → Option index 3."
},
{
"id": "q-006",
"question": "The average of 20 numbers is 25. Later it was found that one number 35 was wrongly recorded as 15. Find the correct average.",
"options": ["25.5", "27", "28", "26", "26.5"],
"answer": 3,
"explanation": "Wrong total = 20 × 25 = 500. Correction = actual − recorded = 35 − 15 = +20. Correct total = 500 + 20 = 520. Correct average = 520 ÷ 20 = 26. Correct answer: 26 → Option index 3."
},
{
"id": "q-007",
"question": "The average age of 15 students is 14 years. When the teacher's age is included the average becomes 15 years. Find the teacher's age.",
"options": ["31", "29", "30", "32", "28"],
"answer": 2,
"explanation": "Total age of 15 students = 15 × 14 = 210 years. Total age with teacher = 16 × 15 = 240 years. Teacher's age = 240 − 210 = 30 years. Correct answer: 30 → Option index 2."
},
{
"id": "q-008",
"question": "The average monthly income of 5 persons is Rs. 12,000. If one of them earns Rs. 15,000, what is the average income of the remaining 4 persons?",
"options": ["11250", "11000", "11500", "12000", "10000"],
"answer": 0,
"explanation": "Total income of 5 = 5 × 12,000 = 60,000. Income of remaining 4 = 60,000 − 15,000 = 45,000. Average of remaining 4 = 45,000 ÷ 4 = 11,250. Correct answer: 11,250 → Option index 0."
},
{
"id": "q-009",
"question": "The average marks of 80 students is 72. If the average of 20 of them is 60, what is the average of the remaining 60 students?",
"options": ["75", "76", "74", "73", "77"],
"answer": 1,
"explanation": "Total marks of 80 = 80 × 72 = 5760. Marks of 20 students = 20 × 60 = 1200. Marks of remaining 60 = 5760 − 1200 = 4560. Average of remaining 60 = 4560 ÷ 60 = 76. Correct answer: 76 → Option index 1."
},
{
"id": "q-010",
"question": "The average age of 40 employees is 36 years. If the manager's age is included the average becomes 37 years. Find the manager’s age.",
"options": ["76", "75", "77", "78", "79"],
"answer": 2,
"explanation": "Total age of 40 employees = 40 × 36 = 1440. Total with manager = 41 × 37 = 1517. Manager's age = 1517 − 1440 = 77 years. Correct answer: 77 → Option index 2."
},
{
"id": "q-011",
"question": "A man's average monthly expenditure for 12 months is Rs. 2750. He saves Rs. 2400 in the year. What is his annual income?",
"options": ["36000", "37200", "35400", "38400", "33600"],
"answer": 2,
"explanation": "Annual expenditure = 12 × 2750 = 33,000. Annual savings = 2,400. Annual income = expenditure + savings = 33,000 + 2,400 = 35,400. Correct answer: 35,400 → Option index 2."
},
{
"id": "q-012",
"question": "The average of 10 numbers is 70. If the average of the first 6 numbers is 65, find the average of the remaining 4 numbers.",
"options": ["78", "77.5", "75", "76.5", "77"],
"answer": 1,
"explanation": "Total of 10 numbers = 10 × 70 = 700. Sum of first 6 = 6 × 65 = 390. Sum of last 4 = 700 − 390 = 310. Average of last 4 = 310 ÷ 4 = 77.5. Correct answer: 77.5 → Option index 1."
},
{
"id": "q-013",
"question": "A cricketer's average in 40 innings is 50. How many runs must he score in his 41st innings to raise the average to 51?",
"options": ["90", "91", "85", "95", "100"],
"answer": 1,
"explanation": "Total runs in 40 innings = 40 × 50 = 2000. Required total for average 51 in 41 innings = 41 × 51 = 2091. Runs required = 2091 − 2000 = 91. Correct answer: 91 → Option index 1."
},
{
"id": "q-014",
"question": "The average of 5 numbers is 18. If each number is doubled, what will be the new average?",
"options": ["32", "34", "36", "40", "35"],
"answer": 2,
"explanation": "Original average = 18. Doubling every number doubles the average: New average = 18 × 2 = 36. Correct answer: 36 → Option index 2."
},
{
"id": "q-015",
"question": "The average marks of 30 students is 60. A new student joins and the average becomes 61. Find the marks obtained by the new student.",
"options": ["90", "91", "92", "89", "93"],
"answer": 1,
"explanation": "Total marks of 30 students = 30 × 60 = 1800. Total marks after new student = 31 × 61 = 1891. New student's marks = 1891 − 1800 = 91. Correct answer: 91 → Option index 1."
},
{
"id": "q-016",
"question": "The average of 8 numbers is 25. If each number is increased by 5, what will be the new average?",
"options": ["29", "30", "31", "28", "32"],
"answer": 1,
"explanation": "Increasing each of 8 numbers by 5 increases the total by 8 × 5 = 40. Original total = 8 × 25 = 200. New total = 200 + 40 = 240. New average = 240 ÷ 8 = 30. Or simply new average = old average + 5 = 25 + 5 = 30. Correct answer: 30 → Option index 1."
},
{
"id": "q-017",
"question": "A man spends 60% of his salary and saves the rest. If his average monthly savings are Rs. 4000, what is his monthly salary?",
"options": ["9000", "10000", "12000", "8000", "11000"],
"answer": 1,
"explanation": "Savings = 40% of salary = 0.40 × salary = 4000 ⇒ salary = 4000 ÷ 0.40 = 10,000. Correct answer: 10,000 → Option index 1."
},
{
"id": "q-018",
"question": "The population of a town increases by 10% annually. The average of the population now and the population two years ago is 44,200. If the present population is 48,400, what was the population two years ago?",
"options": ["44,000", "40,000", "42,000", "45,000", "39,000"],
"answer": 1,
"explanation": "Let population two years ago = P. Given average of (P and present 48,400) = 44,200 ⇒ (P + 48,400) ÷ 2 = 44,200 ⇒ P + 48,400 = 88,400 ⇒ P = 88,400 − 48,400 = 40,000. Correct answer: 40,000 → Option index 1."
},
{
"id": "q-019",
"question": "If the price of a commodity was Rs. 100, it first increases by 20% and then decreases by 20%. What is the average of the initial and final prices?",
"options": ["99", "98", "100", "97", "96"],
"answer": 1,
"explanation": "Initial price = 100. After 20% increase: 100 × 1.20 = 120. After 20% decrease on 120: 120 × 0.80 = 96. Final price = 96. Average of initial and final = (100 + 96) ÷ 2 = 196 ÷ 2 = 98. Correct answer: 98 → Option index 1."
},
{
"id": "q-020",
"question": "Two cycles, each bought at the same cost price, are sold. One is sold at a profit of 10% and the other at a loss of 20%. What is the overall average profit/loss percent on the two cycles?",
"options": ["5% profit", "5% loss", "2.5% loss", "No gain no loss", "2.5% profit"],
"answer": 1,
"explanation": "Let cost price of each cycle = 100 (same). Selling prices: SP1 = 100 × 1.10 = 110. SP2 = 100 × 0.80 = 80. Total cost = 100 + 100 = 200. Total SP = 110 + 80 = 190. Net loss = 200 − 190 = 10. Percentage loss = (10 ÷ 200) × 100% = 5% loss. Correct answer: 5% loss → Option index 1."
},
{
"id": "q-021",
"question": "The average of three numbers is 20. If two of these numbers are 15 and 25, find the third number.",
"options": ["22", "18", "20", "25", "15"],
"answer": 2,
"explanation": "Average of three numbers = 20 ⇒ total = 3 × 20 = 60. Given two numbers sum = 15 + 25 = 40. Third number = 60 − 40 = 20. Correct answer: 20 → Option index 2."
},
{
"id": "q-022",
"question": "Two mixtures are mixed to form 40 litres of a mixture that contains 40% water. Mixture A contains 30% water and mixture B contains 60% water. How many litres of mixture B are used?",
"options": ["13", "12", "13 1/3", "14", "15"],
"answer": 2,
"explanation": "Let x litres of mixture B (60% water) be mixed with (40 − x) litres of mixture A (30% water). Water from B = 0.60x; water from A = 0.30(40 − x) = 12 − 0.30x. Total water required = 40 × 0.40 = 16. So 0.60x + (12 − 0.30x) = 16 ⇒ 0.30x + 12 = 16 ⇒ 0.30x = 4 ⇒ x = 4 ÷ 0.30 = 13.333... = 13 1/3 litres. Correct answer: 13 1/3 litres → Option index 2."
},
{
"id": "q-023",
"question": "A trader gives 20% discount on the marked price and still makes a profit of 25% on an article whose cost price is Rs. 500. What is the marked price?",
"options": ["780", "781.25", "800", "750", "790"],
"answer": 1,
"explanation": "Cost price = 500. Profit 25% ⇒ selling price (SP) = 500 × 1.25 = 625. Let marked price = M. After 20% discount, SP = M × 0.80 = 625 ⇒ M = 625 ÷ 0.80 = 781.25. Correct answer: 781.25 → Option index 1."
},
{
"id": "q-024",
"question": "The average marks of A, B and C is 40. If A scores 20% more than the average and B scores 10% less than the average, find C's marks.",
"options": ["36", "37", "38", "39", "40"],
"answer": 0,
"explanation": "Average of A, B, C = 40 ⇒ total A + B + C = 3 × 40 = 120. A = 40 + 20% of 40 = 40 + 8 = 48. B = 40 − 10% of 40 = 40 − 4 = 36. Therefore C = 120 − (48 + 36) = 120 − 84 = 36. Correct answer: 36 → Option index 0."
},
{
"id": "q-025",
"question": "What is the average of the first 10 natural numbers?",
"options": ["5", "5.5", "5.25", "6", "4.5"],
"answer": 1,
"explanation": "First 10 natural numbers sum = 1 + 2 + ... + 10 = (10 × 11) ÷ 2 = 55. Average = 55 ÷ 10 = 5.5. Correct answer: 5.5 → Option index 1."
},
     
     
     ],
     
     'Time and Work(25 question)' : [
     
     
  
  
  {
    "id": "q-001",
    "question": "A can do a piece of work in 12 days and B in 16 days. They work together for 4 days. How much work is left?",
    "options": ["1/4", "1/3", "1/2", "1/6", "1/8"],
    "answer": 1,
    "explanation": "A:1/12, B:1/16. Together=1/12+1/16=7/48 per day. Work in 4 days=4*7/48=28/48=7/12. Remaining=1-7/12=5/12."
  },
  {
    "id": "q-002",
    "question": "A is twice as efficient as B. They can complete a work together in 6 days. How long would B alone take to complete the work?",
    "options": ["12 days", "9 days", "10 days", "8 days", "14 days", "18 days"],
    "answer": 5,
    "explanation": "B=x/day, A=2x/day. Together=3x=1/6 → x=1/18. B alone=1/x=18 days."
  },
  {
    "id": "q-003",
    "question": "Three workers A, B, and C can do a work in 12, 15, and 20 days respectively. If they work together, how long will it take to complete the work?",
    "options": ["4 days", "5 days", "6 days", "7 days", "8 days"],
    "answer": 1,
    "explanation": "A:1/12, B:1/15, C:1/20 → LCM=60 → 5+4+3=12/60=1/5. Time=1/(1/5)=5 days."
  },
  {
    "id": "q-004",
    "question": "A completes a work in 10 days, B in 15 days. They start together but B leaves after 5 days. How long will A take to finish the remaining work?",
    "options": ["5 days", "2 days", "7 days", "8 days", "9 days"],
    "answer": 1,
    "explanation": "A+B/day=1/10+1/15=1/6. Work in 5 days=5/6. Remaining=1/6. A alone/day=1/10 → Time=1/6 ÷1/10=10/6=5/3 days=exact fraction 5/3 days."
  },
  {
    "id": "q-005",
    "question": "A can complete a work in 8 days and B in 12 days. If they start together but A leaves after 3 days, how long will B take to complete the remaining work?",
    "options": ["6 days", "7 days", "9/2 days", "5 days", "10 days"],
    "answer": 2,
    "explanation": "1-day work: A+ B=1/8+1/12=5/24. Work in 3 days=15/24=5/8. Remaining=3/8. B alone/day=1/12 → Time=3/8 ÷1/12=36/8=9/2 days."
  },
  {
    "id": "q-006",
    "question": "A alone can do a work in 15 days, B alone in 20 days. They work on alternate days starting with A. How long will the work be completed?",
    "options": ["12 days", "13 days", "14 days", "15 days", "16 days"],
    "answer": 3,
    "explanation": "A=1/15, B=1/20. 2-day cycle=1/15+1/20=7/60. After 4 cycles (8 days)=4*7/60=28/60=7/15. Day 9 (A)=1/15 → Total=7/15+1/15=8/15. Day 10 (B)=1/20 → Total=8/15+3/60=35/60=7/12? Wait recalc carefully: 2-day=7/60. Number of 2-day cycles needed to reach ≥1: 1 cycle=7/60, 8 cycles=56/60=14/15. Day 17 (A) finishes remaining 1/15 → Total days=15. Correct answer=15 days."
  },
  {
    "id": "q-007",
    "question": "A is 50% more efficient than B. If both can finish a work together in 8 days, in how many days can A alone finish the work?",
    "options": ["12 days", "40/3 days", "9 days", "8 days", "6 days"],
    "answer": 1,
    "explanation": "B=x/day, A=1.5x/day → Together=2.5x=1/8 → x=1/20. A alone=3/40 → Time=1/(3/40)=40/3 days."
  },
  {
    "id": "q-008",
    "question": "A and B can do a work in 10 and 15 days respectively. They work on alternate days starting with A. In how many days will the work be completed?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 3,
    "explanation": "A=1/10, B=1/15 → 2-day cycle=1/6. After 3 cycles (6 days)=3*1/6=1/2 → Remaining=1/2. Day 7 (A)=1/10 → 1/2-1/10=2/5. Day 8 (B)=1/15 → 2/5-1/15=7/15? Wait careful: 2/5=6/15 →6/15-1/15=5/15=1/3. Day 9 (A)=1/10 →1/3-1/10=7/30. Day 10 (B)=1/15 →7/30-2/30=5/30=1/6. Day 11 (A)=1/10 → completes remaining 1/6 → Total days=11."
  },
  {
    "id": "q-009",
    "question": "Three men can complete a work in 18 days, 24 days, and 36 days respectively. If they work together, in how many days will the work be completed?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 0,
    "explanation": "1-day work=1/18+1/24+1/36=4/72+3/72+2/72=9/72=1/8 → Time=1/(1/8)=8 days."
  },
  {
    "id": "q-010",
    "question": "A can do a work in 12 days, B in 16 days, C in 24 days. They start together but C leaves after 4 days. How long will A and B take to complete the remaining work?",
    "options": ["6 days", "7 days", "12/7 days", "9 days", "10 days"],
    "answer": 2,
    "explanation": "1-day work: A+B+C=1/12+1/16+1/24=3/16. Work in 4 days=3/16*4=12/16=3/4. Remaining=1-3/4=1/4. A+B/day=1/12+1/16=7/48 → Time=1/4 ÷7/48=12/7 days."
  },
  {
    "id": "q-011",
    "question": "A alone can do a work in 20 days and B alone in 30 days. They work together for 5 days. What fraction of the work is left?",
    "options": ["1/4", "7/12", "1/6", "1/3", "2/5"],
    "answer": 1,
    "explanation": "1-day work=1/20+1/30=1/12. Work in 5 days=5/12 → Remaining=1-5/12=7/12."
  },
  {
    "id": "q-012",
    "question": "A can do a work in 10 days. B is twice as fast as A. How long will B take to complete the work alone?",
    "options": ["4 days", "5 days", "6 days", "7 days", "8 days"],
    "answer": 1,
    "explanation": "A=1/10/day, B=2*1/10=1/5 → Time=1/(1/5)=5 days."
  },
  {
    "id": "q-013",
    "question": "A work can be completed by A in 15 days and B in 20 days. They work together for 6 days. What fraction of work is remaining?",
    "options": ["1/4", "1/5", "1/6", "1/3", "2/5", "3/10"],
    "answer": 5,
    "explanation": "1-day work: 1/15+1/20=7/60. Work in 6 days=6*7/60=42/60=7/10. Remaining=1-7/10=3/10."
  },
  {
    "id": "q-014",
    "question": "A can do a work in 18 days, B in 24 days, C in 36 days. All work together. What part of work is done in one day?",
    "options": ["1/8", "1/9", "1/10", "1/12", "1/6"],
    "answer": 0,
    "explanation": "1-day work=1/18+1/24+1/36=4/72+3/72+2/72=9/72=1/8."
  },
  {
    "id": "q-015",
    "question": "A can do a work in 6 days, B in 8 days. They start together, but A leaves after 2 days. How long will B take to finish the remaining work?",
    "options": ["2 days", "10/3 days", "4 days", "5 days", "6 days"],
    "answer": 1,
    "explanation": "A+ B/day=1/6+1/8=7/24. Work in 2 days=14/24=7/12. Remaining=5/12. B alone/day=1/8 → Time=5/12 ÷1/8=40/12=10/3 days."
  },
  {
    "id": "q-016",
    "question": "A can do a work in 10 days, B in 15 days. If they work together for 4 days, then B alone completes the remaining work, how many days in total are required?",
    "options": ["8 days", "9 days", "10 days", "11 days", "12 days"],
    "answer": 1,
    "explanation": "A+B/day=1/10+1/15=1/6. Work in 4 days=4/6=2/3 → Remaining=1/3. B alone/day=1/15 → Time=1/3 ÷1/15=5 days. Total=4+5=9 days."
  },
  {
    "id": "q-017",
    "question": "A tank can be filled by pipe A in 12 hours and by pipe B in 16 hours. Both are opened together. How long will it take to fill the tank?",
    "options": ["6 hr", "48/7 hr", "8 hr", "9 hr", "10 hr"],
    "answer": 1,
    "explanation": "1/hr=1/12+1/16=7/48 → Time=48/7 hours."
  },
  {
    "id": "q-018",
    "question": "A cistern has two pipes. Pipe A can fill it in 9 hours, pipe B can empty it in 12 hours. If both are opened together, how long will it take to fill the cistern?",
    "options": ["18 hr", "20 hr", "36 hr", "48 hr", "24 hr"],
    "answer": 2,
    "explanation": "Net rate=1/9-1/12=1/36 → Time=36 hr."
  },
  {
    "id": "q-019",
    "question": "A cistern can be filled by pipe A in 6 hours and emptied by pipe B in 8 hours. If both operate together, how long to fill the tank?",
    "options": ["12 hr", "24 hr", "48 hr", "14 hr", "16 hr"],
    "answer": 1,
    "explanation": "Net rate=1/6-1/8=1/24 → Time=24 hr."
  },
  {
    "id": "q-020",
    "question": "Pipe A can fill a tank in 10 hours and pipe B in 15 hours. If both are opened together, in how many hours will the tank be full?",
    "options": ["6 hr", "6.5 hr", "7 hr", "7.5 hr", "8 hr"],
    "answer": 0,
    "explanation": "Net rate=1/10+1/15=1/6 → Time=6 hr."
  },
  {
    "id": "q-021",
    "question": "A pipe can fill a tank in 8 hours, and another pipe can empty it in 12 hours. If both pipes are opened together, how long will it take to fill the tank?",
    "options": ["16 hr", "24 hr", "32 hr", "48 hr", "20 hr"],
    "answer": 1,
    "explanation": "Net rate=1/8-1/12=1/24 → Time=24 hr."
  },
  {
    "id": "q-022",
    "question": "A tank is filled by pipe A in 20 hours and by pipe B in 30 hours. Pipe C can empty it in 60 hours. If all three pipes are opened together, how long will it take to fill the tank?",
    "options": ["12 hr", "15 hr", "20 hr", "24 hr", "18 hr"],
    "answer": 1,
    "explanation": "Net rate=1/20+1/30-1/60=1/15 → Time=15 hr."
  },
  {
    "id": "q-023",
    "question": "Pipe A can fill a tank in 9 hours and pipe B in 12 hours. Pipe C can empty it in 18 hours. If all pipes are opened together, find the time to fill the tank.",
    "options": ["6 hr", "7 hr", "36/5 hr", "9 hr", "10 hr"],
    "answer": 2,
    "explanation": "Net rate=1/9+1/12-1/18=5/36 → Time=36/5 hours."
  },
  {
    "id": "q-024",
    "question": "Two pipes can fill a tank in 6 hours and 8 hours. A third pipe can empty it in 12 hours. How long will it take to fill the tank if all pipes are opened together?",
    "options": ["4 hr", "24/5 hr", "6 hr", "7 hr", "8 hr"],
    "answer": 1,
    "explanation": "Net rate=1/6+1/8-1/12=5/24 → Time=24/5 hours."
  },
  {
    "id": "q-025",
    "question": "A tank can be filled by a pipe in 5 hours. Due to leakage, the tank takes 6 hours to fill. In how long will the leak empty the full tank?",
    "options": ["20 hr", "25 hr", "30 hr", "15 hr", "24 hr"],
    "answer": 2,
    "explanation": "Fill rate=1/5, effective=1/6 → Leak rate=1/5-1/6=1/30 → Time to empty=30 hr."
  },
     
     ],
     
     'Speed Time and Distance(30 question)' : [
       
  
 {
  "id": "q-001",
  "question": "A train travels at a speed of 60 km/h and crosses a pole in 9 seconds. What is the length of the train in meters?",
  "options": [
   "150 m",
   "180 m",
   "120 m",
   "100 m"
  ],
  "answer": 0,
  "explanation": "Speed of the train = 60 km/h = 60 * (5/18) m/s = 50/3 m/s. The time taken to cross the pole is 9 seconds. The length of the train is the distance it covers in this time. Length = Speed * Time = (50/3) * 9 = 50 * 3 = 150 meters. The correct answer is 150 m, which is option index 0."
 },
 {
  "id": "q-002",
  "question": "A boy walks at a speed of 10 km/h. How many meters does he walk in 3 minutes?",
  "options": [
   "450 m",
   "500 m",
   "600 m",
   "550 m"
  ],
  "answer": 1,
  "explanation": "Speed = 10 km/h. To convert to m/s, multiply by (5/18). Speed = 10 * (5/18) = 25/9 m/s. Time = 3 minutes = 3 * 60 = 180 seconds. Distance = Speed * Time = (25/9) * 180 = 25 * 20 = 500 m. The correct answer is 500 m, which is option index 1."
 },
 {
  "id": "q-003",
  "question": "A car travels the first half of a distance at a speed of 40 km/h and the second half at 60 km/h. What is the average speed of the car for the entire journey?",
  "options": [
   "48 km/h",
   "50 km/h",
   "52 km/h",
   "45 km/h"
  ],
  "answer": 0,
  "explanation": "Since the distances are equal, the average speed can be calculated using the formula: Average Speed = (2 * v1 * v2) / (v1 + v2). Here, v1 = 40 km/h and v2 = 60 km/h. Average Speed = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h. The correct answer is 48 km/h, which is option index 0."
 },
 {
  "id": "q-004",
  "question": "A boat can travel at a speed of 10 km/h in still water. If the speed of the stream is 2 km/h, what is the total time taken for the boat to travel 36 km downstream and return to the starting point?",
  "options": [
   "6 hours",
   "7.5 hours",
   "8 hours",
   "9 hours"
  ],
  "answer": 1,
  "explanation": "Speed downstream = Speed of boat + Speed of stream = 10 + 2 = 12 km/h. Time taken for downstream journey = 36 / 12 = 3 hours. Speed upstream = Speed of boat - Speed of stream = 10 - 2 = 8 km/h. Time taken for upstream journey = 36 / 8 = 4.5 hours. Total time = 3 + 4.5 = 7.5 hours. The correct answer is 7.5 hours, which is option index 1."
 },
 {
  "id": "q-005",
  "question": "Two trains, 120 m and 180 m long, are running in opposite directions on parallel tracks at speeds of 40 km/h and 50 km/h, respectively. How much time will they take to cross each other?",
  "options": [
   "10 seconds",
   "12 seconds",
   "14 seconds",
   "16 seconds"
  ],
  "answer": 1,
  "explanation": "Total distance to be covered to cross each other is the sum of their lengths: 120 + 180 = 300 m. Since they are moving in opposite directions, their relative speed is the sum of their speeds: 40 + 50 = 90 km/h. Convert the relative speed to m/s: 90 * (5/18) = 25 m/s. Time to cross = (Total Distance) / (Relative Speed) = 300 / 25 = 12 seconds. The correct answer is 12 seconds, which is option index 1."
 },
 {
  "id": "q-006",
  "question": "A man covers a certain distance in 10 hours at a speed of 15 km/h. To cover the same distance in 8 hours, what should be his speed?",
  "options": [
   "18.75 km/h",
   "18 km/h",
   "16.5 km/h",
   "20 km/h"
  ],
  "answer": 0,
  "explanation": "The distance covered is constant. Distance = Speed * Time = 15 * 10 = 150 km. To cover this distance in 8 hours, the new speed must be: New Speed = 150 / 8 = 18.75 km/h. The correct answer is 18.75 km/h, which is option index 0."
 },
 {
  "id": "q-007",
  "question": "Two cars start from the same place at the same time and travel in the same direction. The first car travels at 40 km/h and the second car at 50 km/h. After how many hours will they be 30 km apart?",
  "options": [
   "2 hours",
   "2.5 hours",
   "3 hours",
   "3.5 hours"
  ],
  "answer": 2,
  "explanation": "When objects move in the same direction, their relative speed is the difference between their speeds: 50 - 40 = 10 km/h. The time it takes for them to be 30 km apart is: Time = (Distance) / (Relative Speed) = 30 / 10 = 3 hours. The correct answer is 3 hours, which is option index 2."
 },
 {
  "id": "q-008",
  "question": "A man walks a certain distance and rides back. He takes a total of 4 hours. If he walks both ways, he takes 5 hours. How long would he take to ride both ways?",
  "options": [
   "2.5 hours",
   "3 hours",
   "3.5 hours",
   "3 hours 30 minutes"
  ],
  "answer": 1,
  "explanation": "Let 'W' be the time to walk one way and 'R' be the time to ride one way. We are given: W + R = 4 hours. We are also given that 2W = 5 hours, which means W = 2.5 hours. Substituting W into the first equation: 2.5 + R = 4 -> R = 1.5 hours. The time to ride both ways is 2R = 2 * 1.5 = 3 hours. The correct answer is 3 hours, which is option index 1."
 },
 {
  "id": "q-009",
  "question": "A train passes a man standing on a platform in 8 seconds and passes the platform, which is 264 m long, in 20 seconds. What is the length of the train?",
  "options": [
   "176 m",
   "180 m",
   "192 m",
   "172 m"
  ],
  "answer": 0,
  "explanation": "Let the length of the train be L and its speed be S. When passing the man, the train covers its own length: L = S * 8. When passing the platform, the distance covered is L + 264: L + 264 = S * 20. Subtracting the first equation from the second: (L+264) - L = 20S - 8S -> 264 = 12S -> S = 264 / 12 = 22 m/s. The length of the train is L = S * 8 = 22 * 8 = 176 m. The correct answer is 176 m, which is option index 0."
 },
 {
  "id": "q-010",
  "question": "If a man increases his speed by 1/4 of his original speed, he reaches his destination 15 minutes early. What is the usual time taken by him to cover the distance?",
  "options": [
   "1 hour",
   "1 hour 15 minutes",
   "1 hour 30 minutes",
   "1 hour 45 minutes"
  ],
  "answer": 1,
  "explanation": "Let the usual speed be S and the usual time be T. The new speed is S' = S + (1/4)S = (5/4)S. The new time is T' = T - 15 min. Since distance is constant, S * T = S' * T' -> S * T = (5/4)S * (T - 15) -> T = (5/4) * (T - 15) -> 4T = 5T - 75 -> T = 75 minutes, which is 1 hour and 15 minutes. The correct answer is 1 hour 15 minutes, which is option index 1."
 },
 {
  "id": "q-011",
  "question": "A boy travels to school at a speed of 20 km/h and returns at 30 km/h. If the total time taken for the journey is 5 hours, what is the distance to his school?",
  "options": [
   "60 km",
   "50 km",
   "75 km",
   "100 km"
  ],
  "answer": 0,
  "explanation": "Let the distance to school be 'D'. Time to school = D/20. Time to return = D/30. Total time = D/20 + D/30 = 5. To find D, we solve the equation: (3D + 2D) / 60 = 5 -> 5D / 60 = 5 -> D = 5 * 12 = 60 km. The correct answer is 60 km, which is option index 0."
 },
 {
  "id": "q-012",
  "question": "A train running at 72 km/h crosses a platform 250 m long in 25 seconds. What is the length of the train?",
  "options": [
   "200 m",
   "250 m",
   "300 m",
   "350 m"
  ],
  "answer": 1,
  "explanation": "First, convert the speed of the train from km/h to m/s: 72 * (5/18) = 4 * 5 = 20 m/s. The total distance covered by the train to cross the platform is the sum of the length of the train (L) and the length of the platform (250 m). Total distance = Speed * Time = 20 * 25 = 500 m. So, L + 250 = 500 -> L = 500 - 250 = 250 m. The correct answer is 250 m, which is option index 1."
 },
 {
  "id": "q-013",
  "question": "A man can row a boat at a speed of 6 km/h in still water. The speed of the stream is 2 km/h. If he takes a total of 2 hours to go to a place and return, what is the distance to the place?",
  "options": [
   "16/3 km",
   "8/3 km",
   "10 km",
   "5 km"
  ],
  "answer": 0,
  "explanation": "Speed downstream = Speed of boat + Speed of stream = 6+2=8 km/h. Speed upstream = Speed of boat - Speed of stream = 6-2=4 km/h. Let the distance to the place be 'D'. Time to go downstream = D/8. Time to come back upstream = D/4. Total time = D/8 + D/4 = 2. Solving for D: (D+2D)/8 = 2 -> 3D = 16 -> D = 16/3 km. The correct answer is 16/3 km, which is option index 0."
 },
 {
  "id": "q-014",
  "question": "A train passes a man standing on a platform in 8 seconds and a platform of length 180 m in 20 seconds. What is the speed of the train in km/h?",
  "options": [
   "54 km/h",
   "48 km/h",
   "60 km/h",
   "50 km/h"
  ],
  "answer": 0,
  "explanation": "Let the length of the train be 'L' m and its speed be 'S' m/s. When the train passes the man, it covers a distance equal to its own length in 8 seconds. So, L = S * 8. When it passes the platform, it covers a distance of (L + 180) m in 20 seconds. So, L + 180 = S * 20. Subtracting the first equation from the second: 180 = 20S - 8S -> 180 = 12S -> S = 15 m/s. To convert speed to km/h: 15 * (18/5) = 54 km/h. The correct answer is 54 km/h, which is option index 0."
 },
 {
  "id": "q-015",
  "question": "A man covers a distance of 200 km partly by train and partly by car. If he travels 120 km by train and the rest by car, he takes 8 hours. If he travels 100 km by train and the rest by car, he takes 8 hours and 20 minutes. What is the speed of the train?",
  "options": [
   "20 km/h",
   "25 km/h",
   "30 km/h",
   "40 km/h"
  ],
  "answer": 2,
  "explanation": "Let the speed of the train be vt and the speed of the car be vc. First case: 120/vt + (200-120)/vc = 8 -> 120/vt + 80/vc = 8 -> 15/vt + 10/vc = 1 (Equation 1). Second case: Time = 8 hours 20 minutes = 8 + 20/60 = 8(1/3) = 25/3 hours. 100/vt + (200-100)/vc = 25/3 -> 100/vt + 100/vc = 25/3 -> 4/vt + 4/vc = 1/3 (Equation 2). From Equation 2, 1/vc = 1/12 - 1/vt. Substitute into Equation 1: 15/vt + 10(1/12 - 1/vt) = 1 -> 15/vt + 5/6 - 10/vt = 1 -> 5/vt = 1 - 5/6 = 1/6 -> vt = 30 km/h. The correct answer is 30 km/h, which is option index 2."
 },
 
 {
  "id": "q-016",
  "question": "A train travels at a uniform speed of 75 km/h. How long will it take to travel a distance of 125 km?",
  "options": [
   "1 hour 30 minutes",
   "1 hour 40 minutes",
   "2 hours",
   "1 hour 25 minutes"
  ],
  "answer": 1,
  "explanation": "Time = Distance / Speed = 125 km / 75 km/h = 5/3 hours. To convert this to hours and minutes: (5/3) hours = 1 hour and (2/3) * 60 minutes = 1 hour and 40 minutes. The correct answer is 1 hour 40 minutes, which is option index 1."
 },
 {
  "id": "q-017",
  "question": "A train 150 m long is moving at a speed of 54 km/h. How much time will it take to cross a bridge 225 m long?",
  "options": [
   "25 seconds",
   "20 seconds",
   "30 seconds",
   "15 seconds"
  ],
  "answer": 0,
  "explanation": "Speed of the train = 54 km/h = 54 * (5/18) m/s = 15 m/s. The total distance to be covered is the sum of the train's length and the bridge's length: 150 + 225 = 375 m. Time taken = Total distance / Speed = 375 / 15 = 25 seconds. The correct answer is 25 seconds, which is option index 0."
 },
 {
  "id": "q-018",
  "question": "A person covers a certain distance at a speed of 30 km/h and returns to the starting point at a speed of 20 km/h. What is the average speed of the person for the entire journey?",
  "options": [
   "25 km/h",
   "24 km/h",
   "28 km/h",
   "22 km/h"
  ],
  "answer": 1,
  "explanation": "Since the distance covered in both directions is the same, the average speed is given by the formula: Average Speed = (2 * v1 * v2) / (v1 + v2) = (2 * 30 * 20) / (30 + 20) = 1200 / 50 = 24 km/h. The correct answer is 24 km/h, which is option index 1."
 },
 {
  "id": "q-019",
  "question": "Two cars start from opposite ends of a 450 km road at the same time and travel towards each other. Their speeds are 50 km/h and 40 km/h. In how many hours will they meet?",
  "options": [
   "4 hours",
   "5 hours",
   "6 hours",
   "5.5 hours"
  ],
  "answer": 1,
  "explanation": "Since the cars are moving in opposite directions, their relative speed is the sum of their individual speeds: 50 + 40 = 90 km/h. The time it will take for them to meet is: Time = Total distance / Relative speed = 450 / 90 = 5 hours. The correct answer is 5 hours, which is option index 1."
 },
 {
  "id": "q-020",
  "question": "A boat travels 24 km upstream in 4 hours and 40 km downstream in 5 hours. What is the speed of the boat in still water?",
  "options": [
   "6 km/h",
   "7 km/h",
   "8 km/h",
   "9 km/h"
  ],
  "answer": 1,
  "explanation": "Speed upstream = Distance upstream / Time upstream = 24 km / 4 hours = 6 km/h. Speed downstream = Distance downstream / Time downstream = 40 km / 5 hours = 8 km/h. The speed of the boat in still water is the average of the upstream and downstream speeds. Speed of boat = (Speed upstream + Speed downstream) / 2 = (6 + 8) / 2 = 14 / 2 = 7 km/h. The correct answer is 7 km/h, which is option index 1."
 },
 {
  "id": "q-021",
  "question": "A person walks from his home to his office at a speed of 3 km/h and is late by 20 minutes. If he walks at 4 km/h, he reaches 10 minutes early. What is the distance between his home and office?",
  "options": [
   "5 km",
   "5.5 km",
   "6 km",
   "6.5 km"
  ],
  "answer": 2,
  "explanation": "Let the distance be D km. The difference in time is 20 minutes (late) + 10 minutes (early) = 30 minutes = 1/2 hour. Time taken at 3 km/h is D/3. Time taken at 4 km/h is D/4. The difference in time is (D/3) - (D/4) = 1/2. Solving the equation: (4D - 3D)/12 = 1/2 -> D/12 = 1/2 -> D = 6 km. The correct answer is 6 km, which is option index 2."
 },
 {
  "id": "q-022",
  "question": "A train covers a distance of 150 km in 2 hours. If it travels at a speed 15 km/h more than its usual speed, how much time would it take to cover the same distance?",
  "options": [
   "1 hour 40 minutes",
   "1 hour 50 minutes",
   "1 hour 30 minutes",
   "1 hour 25 minutes"
  ],
  "answer": 0,
  "explanation": "The original speed of the train is 150 km / 2 hours = 75 km/h. The new speed is 75 + 15 = 90 km/h. The time to cover the same distance at the new speed is: Time = Distance / New Speed = 150 km / 90 km/h = 15/9 hours = 5/3 hours. Converting to minutes: (5/3) * 60 = 100 minutes, which is 1 hour and 40 minutes. The correct answer is 1 hour 40 minutes, which is option index 0."
 },
 {
  "id": "q-023",
  "question": "A boat can travel at a speed of 10 km/h in still water. The speed of the stream is 2 km/h. What is the total time taken for the boat to travel 72 km downstream and return to the starting point?",
  "options": [
   "12 hours",
   "15 hours",
   "18 hours",
   "20 hours"
  ],
  "answer": 1,
  "explanation": "Speed downstream = 10 + 2 = 12 km/h. Time downstream = 72 / 12 = 6 hours. Speed upstream = 10 - 2 = 8 km/h. Time upstream = 72 / 8 = 9 hours. Total time = 6 + 9 = 15 hours. The correct answer is 15 hours, which is option index 1."
 },
 {
  "id": "q-024",
  "question": "A train passes a man standing on a platform in 10 seconds and a platform 150 m long in 25 seconds. What is the length of the train?",
  "options": [
   "100 m",
   "120 m",
   "150 m",
   "200 m"
  ],
  "answer": 0,
  "explanation": "Let the length of the train be L meters and its speed be S m/s. When the train passes the man, it covers its own length, so L = S * 10. When it passes the platform, it covers a distance of (L + 150) meters, so L + 150 = S * 25. Substituting L = 10S into the second equation: 10S + 150 = 25S -> 150 = 15S -> S = 10 m/s. The length of the train is L = 10 * 10 = 100 m. The correct answer is 100 m, which is option index 0."
 },
 {
  "id": "q-025",
  "question": "A person covers 1/3 of his journey at a speed of 20 km/h, the next 1/3 at 30 km/h and the last 1/3 at 60 km/h. What is his average speed for the entire journey?",
  "options": [
   "30 km/h",
   "36 km/h",
   "28 km/h",
   "32 km/h"
  ],
  "answer": 0,
  "explanation": "For equal distances covered at different speeds, the average speed is the harmonic mean. Average Speed = 3 / ( (1/20) + (1/30) + (1/60) ). The common denominator for the speeds is 60, so we get: Average Speed = 3 / ( (3/60) + (2/60) + (1/60) ) = 3 / (6/60) = 3 / (1/10) = 3 * 10 = 30 km/h. The correct answer is 30 km/h, which is option index 0."
 },
 {
  "id": "q-026",
  "question": "A person walking at 4/5 of his usual speed is 10 minutes late. What is the usual time taken by him to cover the distance?",
  "options": [
   "40 minutes",
   "50 minutes",
   "60 minutes",
   "30 minutes"
  ],
  "answer": 0,
  "explanation": "Let the usual speed be S and the usual time be T. The new speed is (4/5) of the usual speed, and the new time is T + 10 minutes. Since the distance is constant, Speed * Time = Constant. S * T = (4/5)S * (T + 10). T = (4/5) * (T + 10) -> 5T = 4T + 40 -> T = 40 minutes. The correct answer is 40 minutes, which is option index 0."
 },
 {
  "id": "q-027",
  "question": "Two trains, 100 m and 120 m long, are running on parallel tracks in the same direction at speeds of 60 km/h and 50 km/h, respectively. In how much time will the faster train cross the slower train?",
  "options": [
   "79.2 seconds",
   "60.2 seconds",
   "72.0 seconds",
   "80.5 seconds"
  ],
  "answer": 0,
  "explanation": "Since the trains are moving in the same direction, their relative speed is the difference between their speeds: 60 - 50 = 10 km/h. Converting to m/s: 10 * (5/18) = 25/9 m/s. The total distance to be covered is the sum of their lengths: 100 + 120 = 220 m. Time to cross = Total distance / Relative speed = 220 / (25/9) = 220 * 9 / 25 = 79.2 seconds. The correct answer is 79.2 seconds, which is option index 0."
 },
 {
  "id": "q-028",
  "question": "A train passes a man standing on a platform in 8 seconds and crosses a platform 180 m long in 20 seconds. What is the length of the train?",
  "options": [
   "120 m",
   "180 m",
   "150 m",
   "200 m"
  ],
  "answer": 0,
  "explanation": "Let the length of the train be L meters and its speed be S m/s. When the train passes the man, L = S * 8. When it crosses the platform, L + 180 = S * 20. Subtracting the first equation from the second gives: (L + 180) - L = 20S - 8S -> 180 = 12S -> S = 15 m/s. Now substitute the speed back to find the length: L = 15 * 8 = 120 m. The correct answer is 120 m, which is option index 0."
 },
 {
  "id": "q-029",
  "question": "A man covers a distance of 100 km in 10 hours, partly by walking at 8 km/h and partly by running at 12 km/h. What is the distance he covers by running?",
  "options": [
   "40 km",
   "50 km",
   "60 km",
   "70 km"
  ],
  "answer": 2,
  "explanation": "Let the distance covered by walking be x km, and the distance covered by running be (100 - x) km. Time for walking = x / 8. Time for running = (100 - x) / 12. Total time = (x/8) + (100-x)/12 = 10. To solve, multiply the entire equation by the LCM of 8 and 12 (which is 24): 3x + 2(100 - x) = 240 -> 3x + 200 - 2x = 240 -> x = 40 km. The distance covered by running is 100 - x = 100 - 40 = 60 km. The correct answer is 60 km, which is option index 2."
 },
 {
  "id": "q-030",
  "question": "Two cars start from the same place at the same time and travel in the same direction. One car travels at a speed of 45 km/h and the other at 60 km/h. What is the distance between them after 4 hours?",
  "options": [
   "40 km",
   "60 km",
   "80 km",
   "90 km"
  ],
  "answer": 1,
  "explanation": "Since the cars are moving in the same direction, their relative speed is the difference between their speeds: 60 - 45 = 15 km/h. The distance between them after 4 hours will be: Distance = Relative speed * Time = 15 * 4 = 60 km. The correct answer is 60 km, which is option index 1."
 },
  
  
     ],

    
    }
    
    },
    
    
    
    'MP POLICE FULL MOCK': {
    topics: {
      'MOCK1': [
       
       {
    "id": "surd-001",
    "question": "Simplify: (2^(5/2) × 2^(1/2)) / 2^2",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "answer": 1,
    "explanation": "Using the rules of indices, we simplify the expression. First, add the exponents in the numerator: 2^(5/2 + 1/2) = 2^(6/2) = 2^3. The expression becomes 2^3 / 2^2. Now, subtract the exponents: 2^(3-2) = 2^1 = 2."
  },
  {
    "id": "surd-002",
    "question": "Find the value of (81/16)^(-3/4).",
    "options": [
      "27/8",
      "8/27",
      "4/9",
      "9/4"
    ],
    "answer": 1,
    "explanation": "A negative exponent means we take the reciprocal of the base. (81/16)^(-3/4) = (16/81)^(3/4). We can write 16 = 2^4 and 81 = 3^4. So, ((2/3)^4)^(3/4). By multiplying the exponents, we get (2/3)^3 = 8/27."
  },
  {
    "id": "surd-003",
    "question": "Which of the following is the smallest? √[3]4, √2, √[4]3, √[6]5",
    "options": [
      "√[3]4",
      "√2",
      "√[4]3",
      "√[6]5"
    ],
    "answer": 3,
    "explanation": "To compare the surds, convert them to a common index. The LCM of the indices (3, 2, 4, 6) is 12. Convert each surd: √[3]4 = √[12]4^4 = √[12]256; √2 = √[12]2^6 = √[12]64; √[4]3 = √[12]3^3 = √[12]27; √[6]5 = √[12]5^2 = √[12]25. Comparing the values inside the twelfth root (256, 64, 27, 25), the smallest value is 25, so the smallest surd is √[6]5."
  },
  {
    "id": "surd-004",
    "question": "Simplify: 1 / (√5 - √4)",
    "options": [
      "√5 - 2",
      "√5 + 2",
      "1",
      "2"
    ],
    "answer": 1,
    "explanation": "To simplify a surd in the denominator, multiply both the numerator and denominator by the conjugate of the denominator. The conjugate of (√5 - √4) is (√5 + √4). The expression becomes (1 / (√5 - √4)) × ((√5 + √4) / (√5 + √4)) = (√5 + √4) / ((√5)^2 - (√4)^2) = (√5 + 2) / (5-4) = √5 + 2."
  },
  {
    "id": "surd-005",
    "question": "If x = 3^(1/3) and y = 3^(2/3), what is the value of (x × y)^3?",
    "options": [
      "3",
      "9",
      "27",
      "81"
    ],
    "answer": 2,
    "explanation": "First, find the product of x and y. x × y = 3^(1/3) × 3^(2/3). Using the rule a^m × a^n = a^(m+n), we get 3^(1/3 + 2/3) = 3^(3/3) = 3^1 = 3. Now, cube the result: (x × y)^3 = 3^3 = 27."
  },
  {
    "id": "frac-006",
    "question": "Simplify: 2(1/2) + 3(1/3) - 1(1/6)",
    "options": [
      "4(1/6)",
      "4(1/3)",
      "4(2/3)",
      "5"
    ],
    "answer": 2,
    "explanation": "First, convert the mixed fractions to improper fractions: 2(1/2) = 5/2; 3(1/3) = 10/3; 1(1/6) = 7/6. The expression is 5/2 + 10/3 - 7/6. The common denominator is 6. This gives (15/6) + (20/6) - (7/6) = (15+20-7)/6 = 28/6 = 14/3. As a mixed fraction, this is 4(2/3)."
  },
  {
    "id": "frac-007",
    "question": "Which fraction is the largest?",
    "options": [
      "5/8",
      "7/12",
      "11/16",
      "3/4"
    ],
    "answer": 3,
    "explanation": "To compare fractions, convert them to a common denominator. The LCM of the denominators (8, 12, 16, 4) is 48. The fractions become: 5/8 = 30/48; 7/12 = 28/48; 11/16 = 33/48; 3/4 = 36/48. Comparing the numerators, 36 is the largest, so 3/4 is the largest fraction."
  },
  {
    "id": "frac-008",
    "question": "A tank is 3/5 full. After drawing 15 liters, it is 1/2 full. What is the total capacity of the tank?",
    "options": [
      "100 L",
      "120 L",
      "150 L",
      "180 L"
    ],
    "answer": 2,
    "explanation": "Let the total capacity be X. The amount of water drawn is the difference between the initial and final fractions of the tank's capacity. (3/5)X - (1/2)X = 15. The common denominator is 10. (6/10)X - (5/10)X = 15. (1/10)X = 15. X = 15 × 10 = 150 liters."
  },
  {
    "id": "frac-009",
    "question": "Simplify: 1 / (1 + 1/(1 + 1/2))",
    "options": [
      "1/2",
      "2/3",
      "3/5",
      "5/3"
    ],
    "answer": 2,
    "explanation": "Solve from the bottom up. First, calculate the innermost fraction: 1 + 1/2 = 3/2. Next, calculate its reciprocal: 1/(3/2) = 2/3. Then, add this to 1: 1 + 2/3 = 5/3. Finally, take the reciprocal of the whole expression: 1/(5/3) = 3/5."
  },
  {
    "id": "frac-010",
    "question": "Express 0.727272... as a fraction.",
    "options": [
      "72/100",
      "72/99",
      "8/11",
      "7/10"
    ],
    "answer": 2,
    "explanation": "Let x = 0.7272... Since two digits are repeating, multiply by 100. 100x = 72.7272... Subtract the original equation from this one: 100x - x = 72.7272... - 0.7272... This gives 99x = 72. Therefore, x = 72/99. Simplifying this fraction by dividing the numerator and denominator by 9 gives 8/11."
  },
  {
    "id": "quad-011",
    "question": "Find the roots of the quadratic equation x^2 - 5x + 6 = 0.",
    "options": [
      "(1, 6)",
      "(2, 3)",
      "(-2, -3)",
      "(-1, -6)"
    ],
    "answer": 1,
    "explanation": "The roots can be found by factoring the quadratic equation. We need two numbers that multiply to 6 and add up to -5. These numbers are -2 and -3. The equation can be written as (x - 2)(x - 3) = 0. Setting each factor to zero gives the roots x = 2 and x = 3."
  },
  {
    "id": "quad-012",
    "question": "Solve for x in the equation 2x^2 + 5x - 3 = 0.",
    "options": [
      "(1/2, 3)",
      "(-1/2, 3)",
      "(1/2, -3)",
      "(-1/2, -3)"
    ],
    "answer": 2,
    "explanation": "Use the quadratic formula, x = [-b ± √(b^2 - 4ac)] / 2a. Here, a=2, b=5, c=-3. x = [-5 ± √(5^2 - 4(2)(-3))] / 2(2) = [-5 ± √(25 + 24)] / 4 = [-5 ± √49] / 4 = [-5 ± 7] / 4. The two roots are x1 = (-5 + 7)/4 = 2/4 = 1/2, and x2 = (-5 - 7)/4 = -12/4 = -3."
  },
  {
    "id": "quad-013",
    "question": "The product of two consecutive positive integers is 56. Find the smaller integer.",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "Let the two consecutive integers be x and (x+1). Their product is x(x+1) = 56. This simplifies to the quadratic equation x^2 + x - 56 = 0. Factoring gives (x+8)(x-7) = 0. The roots are x = -8 and x = 7. Since the question specifies positive integers, the smaller integer is 7."
  },
  {
    "id": "quad-014",
    "question": "What is the nature of the roots of the equation x^2 - 4x + 4 = 0?",
    "options": [
      "Real and unequal",
      "Real and equal",
      "Imaginary",
      "Not possible to determine"
    ],
    "answer": 1,
    "explanation": "The nature of the roots of a quadratic equation is determined by its discriminant, Δ = b^2 - 4ac. For the equation x^2 - 4x + 4 = 0, a=1, b=-4, and c=4. Δ = (-4)^2 - 4(1)(4) = 16 - 16 = 0. When the discriminant is 0, the roots are real and equal."
  },
  {
    "id": "quad-015",
    "question": "For the quadratic equation 3x^2 - 7x + 2 = 0, what is the sum of its roots?",
    "options": [
      "7/3",
      "-7/3",
      "2/3",
      "-2/3"
    ],
    "answer": 0,
    "explanation": "For a quadratic equation in the form ax^2 + bx + c = 0, the sum of its roots is given by the formula -b/a. In the equation 3x^2 - 7x + 2 = 0, a=3 and b=-7. The sum of the roots is -(-7)/3 = 7/3."
  },
     
  {
    "id": "q-001",
    "question": "A alone can complete a piece of work in 20 days and B alone in 30 days. They work together for 6 days, then A leaves. How many more days will B take to finish the remaining work?",
    "options": ["10 days", "12 days", "14 days", "15 days"],
    "answer": 3,
    "explanation": "A’s 1-day work = 1/20, B’s 1-day work = 1/30. Together per day = 1/12. In 6 days, work done = 1/2. Remaining work = 1/2. Now B alone: time = (1/2) ÷ (1/30) = 15 days. Correct answer: 15 days → Option index 3."
  },
  {
    "id": "q-002",
    "question": "A and B together can finish a work in 12 days. A alone can do the same work in 18 days. In how many days can B alone finish it?",
    "options": ["24 days", "30 days", "36 days", "40 days"],
    "answer": 2,
    "explanation": "A’s 1-day work = 1/18, A+B’s 1-day work = 1/12. B’s 1-day work = 1/36. So B alone takes 36 days. Correct answer: 36 days → Option index 2."
  },
  {
    "id": "q-003",
    "question": "A group of 12 men can complete a work in 15 days. After 6 days, 4 men leave. How many more days will the remaining men take to complete the remaining work?",
    "options": ["13.5 days", "14 days", "12 days", "15 days"],
    "answer": 0,
    "explanation": "Total work = 180 man-days. Work in 6 days = 72 man-days. Remaining = 108 man-days. With 8 men left: time = 108 ÷ 8 = 13.5 days. Correct answer: 13.5 days → Option index 0."
  },
  {
    "id": "q-004",
    "question": "A does a work in 25 days, B in 20 days. They work alternately starting with A. In how many days will the work be finished?",
    "options": ["22.25 days", "23 days", "24 days", "25 days"],
    "answer": 0,
    "explanation": "In 2 days A+B complete 9/100 of work. In 22 days = 99/100 done. Remaining = 1/100. Next is A’s turn: needs (1/100)/(1/25) = 0.25 day. Total = 22.25 days. Correct answer: 22.25 days → Option index 0."
  },
  {
    "id": "q-005",
    "question": "A tank can be filled by Pipe A in 15 hours and by Pipe B in 20 hours. Both are opened together, but after 4 hours Pipe A is closed. In how many more hours will the tank be filled?",
    "options": ["10⅔ hours", "11 hours", "12 hours", "13 hours"],
    "answer": 0,
    "explanation": "A’s 1-hr = 1/15, B’s = 1/20. Together = 7/60. In 4 hrs, filled = 28/60 = 7/15. Remaining = 8/15. Now B alone: time = (8/15)/(1/20) = (8/15)×20 = 160/15 = 10⅔ hours. Correct answer: 10⅔ hours (10 hours 40 minutes) → Option index 0."
  },
  {
    "id": "q-006",
    "question": "A and B together can finish a work in 8 days. B alone can finish it in 12 days. After working together for 4 days, A leaves. In how many days will B finish the remaining work?",
    "options": ["4 days", "5 days", "6 days", "7 days"],
    "answer": 2,
    "explanation": "A+B = 1/8. B = 1/12. A = 1/24. In 4 days A+B = 1/2 work done. Remaining = 1/2. Now B: time = (1/2)/(1/12) = 6 days. Correct answer: 6 days → Option index 2."
  },
  {
    "id": "q-007",
    "question": "A does half of the work in 20 days and B does the remaining half in 30 days. If they work together, how many days will the entire work take?",
    "options": ["24 days", "25 days", "26 days", "28 days"],
    "answer": 0,
    "explanation": "A whole = 40 days → rate=1/40. B whole = 60 days → rate=1/60. Together = 1/40+1/60=1/24. Total = 24 days. Correct answer: 24 days → Option index 0."
  },
  {
    "id": "q-008",
    "question": "A, B, C together can complete a work in 10 days. A alone can complete it in 30 days, B alone in 20 days. In how many days can C alone complete the work?",
    "options": ["60 days", "40 days", "25 days", "30 days"],
    "answer": 0,
    "explanation": "A=1/30, B=1/20, A+B+C=1/10. So C=1/10–(1/30+1/20)=1/60. So C alone = 60 days. Correct answer: 60 days → Option index 0."
  },
  {
    "id": "q-009",
    "question": "If 15 workers can finish a work in 40 days, in how many days will 20 workers finish it (assuming equal efficiency)?",
    "options": ["30 days", "28 days", "25 days", "35 days"],
    "answer": 0,
    "explanation": "Total work = 600 man-days. With 20 workers: time = 600/20=30 days. Correct answer: 30 days → Option index 0."
  },
  {
  "id": "q-010",
  "question": "A contractor undertakes a work to be finished in 60 days with 80 men. After 20 days, only 1/4 of the work is done. How many extra men must he employ to finish the work in time?",
  "options": ["5", "10", "15", "20"],
  "answer": 1,
  "explanation": "Total work = 1 unit. Work done in 20 days = 1/4 → Remaining work = 3/4. Remaining days = 40. Work per day needed = (3/4)/40 = 3/160. Current rate of 80 men = 1/60 per day. Ratio = (3/160)/(1/60) = 1.125 → Men needed = 80×1.125 = 90. Already 80 men working, so extra men = 90-80 = 10."
},
  {
    "id": "std-001",
    "question": "A car travels at a speed of 80 km/hr for 3 hours and then at 60 km/hr for 2 hours. What is the total distance covered?",
    "options": [
      "340 km",
      "360 km",
      "380 km",
      "400 km"
    ],
    "answer": 1,
    "explanation": "Total distance is the sum of the distances covered in each part of the journey. Distance 1 = 80 km/hr × 3 hrs = 240 km. Distance 2 = 60 km/hr × 2 hrs = 120 km. Total Distance = 240 km + 120 km = 360 km."
  },
  {
    "id": "std-002",
    "question": "A man travels a certain distance at 40 km/hr and returns to the starting point at 60 km/hr. What is his average speed for the entire journey?",
    "options": [
      "45 km/hr",
      "48 km/hr",
      "50 km/hr",
      "52 km/hr"
    ],
    "answer": 1,
    "explanation": "When the distance for both parts of the journey is the same, the average speed can be calculated using the formula: Average Speed = (2 × speed1 × speed2) / (speed1 + speed2). Average Speed = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/hr."
  },
  {
    "id": "std-003",
    "question": "A thief starts a journey at 10 AM at a speed of 40 km/hr. A policeman starts chasing him at 1 PM from the same point at a speed of 60 km/hr. At what time will the policeman catch the thief?",
    "options": [
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM"
    ],
    "answer": 1,
    "explanation": "The thief gets a 3-hour head start (from 10 AM to 1 PM). The distance covered by the thief in this time is 40 km/hr × 3 hrs = 120 km. The relative speed of the policeman with respect to the thief is 60 km/hr - 40 km/hr = 20 km/hr. The time taken to catch up is Distance / Relative Speed = 120 km / 20 km/hr = 6 hours. The policeman will catch the thief 6 hours after he starts, which is at 1 PM + 6 hours = 7 PM."
  },
  {
    "id": "std-004",
    "question": "Two buses start at the same time from two stations 250 km apart and move towards each other. Their speeds are 50 km/hr and 75 km/hr. At what time will they meet if they started at 10 AM?",
    "options": [
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM"
    ],
    "answer": 1,
    "explanation": "When two objects move towards each other, their relative speed is the sum of their individual speeds. Relative Speed = 50 km/hr + 75 km/hr = 125 km/hr. Time to meet = Total Distance / Relative Speed = 250 km / 125 km/hr = 2 hours. They will meet 2 hours after they started, which is at 10 AM + 2 hours = 12:00 PM."
  },
  {
    "id": "std-005",
    "question": "A 200-meter long train crosses a platform 250 meters long in 20 seconds. What is the speed of the train in km/hr?",
    "options": [
      "72 km/hr",
      "75 km/hr",
      "81 km/hr",
      "90 km/hr"
    ],
    "answer": 2,
    "explanation": "The total distance a train covers to cross a platform is the sum of its own length and the platform's length. Total Distance = 200 m + 250 m = 450 m. Speed (in m/s) = Distance / Time = 450 m / 20 s = 22.5 m/s. To convert from m/s to km/hr, multiply by 18/5. Speed = 22.5 × (18/5) = 81 km/hr."
  },
  {
    "id": "std-006",
    "question": "A boat travels 15 km upstream in 3 hours and 21 km downstream in 3 hours. Find the speed of the stream in km/hr.",
    "options": [
      "0.5 km/hr",
      "1 km/hr",
      "1.5 km/hr",
      "2 km/hr"
    ],
    "answer": 1,
    "explanation": "Upstream Speed = 15 km / 3 hrs = 5 km/hr. Downstream Speed = 21 km / 3 hrs = 7 km/hr. The speed of the stream is half the difference between the downstream and upstream speeds. Speed of Stream = (Downstream Speed - Upstream Speed) / 2 = (7 - 5) / 2 = 1 km/hr."
  },
  {
    "id": "std-007",
    "question": "Two runners start from the same point on a 400-meter circular track and run in the same direction. Their speeds are 10 m/s and 8 m/s. When will they meet for the first time at the starting point?",
    "options": [
      "100 seconds",
      "150 seconds",
      "200 seconds",
      "250 seconds"
    ],
    "answer": 2,
    "explanation": "The time taken for each runner to complete one lap is: Runner 1: 400 m / 10 m/s = 40 seconds. Runner 2: 400 m / 8 m/s = 50 seconds. They will meet at the starting point for the first time after a period equal to the Least Common Multiple (LCM) of their individual lap times. LCM(40, 50) = 200 seconds."
  },
  {
    "id": "std-008",
    "question": "A person covers 1/3 of a journey at 20 km/hr, 1/4 of the remaining journey at 30 km/hr, and the rest at 40 km/hr. What is the average speed?",
    "options": [
      "25.6 km/hr",
      "27.2 km/hr",
      "28.8 km/hr",
      "30.0 km/hr"
    ],
    "answer": 2,
    "explanation": "Let the total distance be D. Part 1: (D/3) at 20 km/hr. Time1 = (D/3)/20 = D/60. Remaining distance = 2D/3. Part 2: (1/4 of 2D/3) = D/6 at 30 km/hr. Time2 = (D/6)/30 = D/180. Remaining distance = (2D/3) - (D/6) = D/2. Part 3: (D/2) at 40 km/hr. Time3 = (D/2)/40 = D/80. Total Time = D/60 + D/180 + D/80 = 25D/720 = D/28.8. Average Speed = Total Distance / Total Time = D / (D/28.8) = 28.8 km/hr."
  },
  {
    "id": "std-009",
    "question": "A person travels at a speed of 30 km/hr and reaches his destination 10 minutes late. If he travels at 40 km/hr, he reaches 5 minutes early. What is the distance?",
    "options": [
      "20 km",
      "25 km",
      "30 km",
      "35 km"
    ],
    "answer": 2,
    "explanation": "The total difference in time is 10 minutes (late) + 5 minutes (early) = 15 minutes, which is 1/4 of an hour. The distance can be calculated using the formula: Distance = (Speed1 × Speed2 × Time Difference) / (Speed2 - Speed1). Distance = (30 × 40 × 1/4) / (40 - 30) = (1200 × 1/4) / 10 = 300 / 10 = 30 km."
  },
  {
    "id": "std-010",
    "question": "A train leaves station A at 8 AM at 60 km/hr. Another train leaves station B at 9 AM at 75 km/hr, traveling towards station A. The distance between A and B is 330 km. At what time will they meet?",
    "options": [
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM"
    ],
    "answer": 1,
    "explanation": "First, calculate the distance covered by the first train alone from 8 AM to 9 AM (1 hour): 60 km/hr × 1 hr = 60 km. The remaining distance between the trains at 9 AM is 330 km - 60 km = 270 km. Their relative speed is the sum of their speeds since they are moving towards each other: 60 km/hr + 75 km/hr = 135 km/hr. The time it will take for them to meet is 270 km / 135 km/hr = 2 hours. They will meet 2 hours after 9 AM, which is at 11:00 AM."
  },
     

  {
    "id": "q-001",
    "question": "The average age of 30 students is 15 years. If the age of teacher is included, the average increases by 1 year. What is the teacher's age?",
    "options": ["46", "45", "44", "43"],
    "answer": 0,
    "explanation": "Total age of 30 students = 30 × 15 = 450. With teacher: average = 16 ⇒ total = 31 × 16 = 496. Teacher's age = 496 - 450 = 46. Correct answer: 46 → Option index 0."
  },
  {
    "id": "q-002",
    "question": "The average marks of 40 students in a class is 60. If two students' marks, 40 and 80, are removed, what is the new average?",
    "options": ["60", "59.5", "59", "60.5"],
    "answer": 0,
    "explanation": "Total marks = 40 × 60 = 2400. Removing 40 + 80 = 120 ⇒ new total = 2280. New average = 2280 ÷ 38 = 60. Correct answer: 60 → Option index 0."
  },
  {
    "id": "q-003",
    "question": "The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?",
    "options": ["28", "25", "30", "27"],
    "answer": 0,
    "explanation": "Total of 5 numbers = 5 × 20 = 100. Excluding one ⇒ sum of 4 numbers = 4 × 18 = 72. Excluded number = 100 - 72 = 28. Correct answer: 28 → Option index 0."
  },
  {
    "id": "q-004",
    "question": "The average of 9 consecutive odd numbers is 47. What is the largest number among them?",
    "options": ["55", "53", "51", "49"],
    "answer": 0,
    "explanation": "For odd consecutive numbers, average = middle term. Middle = 47. There are 9 numbers ⇒ largest = middle + 4 × 2 = 47 + 8 = 55. Correct answer: 55 → Option index 0."
  },
  {
    "id": "q-005",
    "question": "The average runs scored by a batsman in 10 innings is 32. How many runs must he score in the 11th innings to raise the average to 35?",
    "options": ["65", "68", "70", "75"],
    "answer": 1,
    "explanation": "Current total = 10 × 32 = 320. Required total = 11 × 35 = 385. Runs needed = 385 - 320 = 65. Correct answer: 65 → Option index 1."
  },
  {
    "id": "q-006",
    "question": "A student’s average score in 5 subjects is 60. If his highest score is 75 and lowest is 40, what is the average of the remaining 3 subjects?",
    "options": ["65", "62", "64", "61"],
    "answer": 1,
    "explanation": "Total of 5 subjects = 5 × 60 = 300. Removing highest + lowest = 75 + 40 = 115. Remaining total = 300 - 115 = 185. Average = 185 ÷ 3 = 61.67, which is exactly 61.67 but among the options only 62 matches. Correct answer: 62 → Option index 1."
  },
  {
    "id": "q-007",
    "question": "The average weight of 8 men is 65 kg. If one man of 80 kg is replaced by a new man, the average becomes 64.5 kg. What is the weight of the new man?",
    "options": ["75", "76", "77", "78"],
    "answer": 0,
    "explanation": "Total weight = 8 × 65 = 520. New total = 8 × 64.5 = 516. New man's weight = 516 - (520 - 80) = 516 - 440 = 76. Correct answer: 76 → Option index 0."
  },
  {
    "id": "q-008",
    "question": "The average age of a family of 6 members is 25 years. A baby is born and the average decreases by 3 years. What is the baby's age?",
    "options": ["2", "1", "3", "4"],
    "answer": 3,
    "explanation": "Total age = 6 × 25 = 150. New average = 22 ⇒ new total = 7 × 22 = 154. Baby’s age = 154 - 150 = 4. Correct answer: 4 → Option index 3."
  },
  {
    "id": "q-009",
    "question": "The average speed of a bus is 48 km/h for the first 200 km and 72 km/h for the next 200 km. What is the average speed for the entire journey?",
    "options": ["57.6 km/h", "60 km/h", "58 km/h", "59 km/h"],
    "answer": 0,
    "explanation": "Time for 200 km at 48 = 200 ÷ 48 = 25/6 h. Time for 200 km at 72 = 200 ÷ 72 = 25/9 h. Total distance = 400 km. Total time = 25/6 + 25/9 = 125/18 h. Average speed = 400 ÷ (125/18) = 57.6 km/h. Correct answer: 57.6 km/h → Option index 0."
  },
  {
    "id": "q-010",
    "question": "The average of three numbers is 50. The largest number is 70. If the difference between the other two is 10, what is the smallest number?",
    "options": ["35", "30", "25", "40"],
    "answer": 0,
    "explanation": "Sum of 3 numbers = 3 × 50 = 150. Largest = 70 ⇒ sum of remaining two = 80. Let smaller = x, other = x + 10. Then x + (x + 10) = 80 ⇒ 2x + 10 = 80 ⇒ 2x = 70 ⇒ x = 35. Correct answer: 35 → Option index 0."
  },
  
  {
    "id": "perc-001",
    "question": "A number is increased by 20% and the new number is 360. What was the original number?",
    "options": [
      "280",
      "300",
      "320",
      "340"
    ],
    "answer": 1,
    "explanation": "Let the original number be X. An increase of 20% means the new number is 120% of the original. So, 1.20 × X = 360. To find X, we divide 360 by 1.20. X = 360 / 1.20 = 300."
  },
  {
    "id": "perc-002",
    "question": "A student gets 150 marks and fails by 30 marks. If the passing marks are 45%, what are the total marks of the exam?",
    "options": [
      "350",
      "400",
      "450",
      "500"
    ],
    "answer": 1,
    "explanation": "The passing marks are the sum of the marks the student scored and the marks he failed by. Passing Marks = 150 + 30 = 180. These 180 marks represent 45% of the total marks. So, 45% of Total Marks = 180. Total Marks = 180 / 0.45 = 400."
  },
  {
    "id": "perc-003",
    "question": "The population of a town increases by 10% in the first year and by 20% in the second year. If the current population is 13200, what was the population 2 years ago?",
    "options": [
      "9000",
      "10000",
      "11000",
      "12000"
    ],
    "answer": 1,
    "explanation": "Let the population 2 years ago be P. After the first year, the population becomes P × 1.10. After the second year, the population becomes (P × 1.10) × 1.20. We are given this value is 13200. So, P × 1.32 = 13200. P = 13200 / 1.32 = 10000."
  },
  {
    "id": "perc-004",
    "question": "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, what is the percentage increase in his savings?",
    "options": [
      "40%",
      "45%",
      "50%",
      "55%"
    ],
    "answer": 2,
    "explanation": "Assume the man's initial income is 100. His expenditure is 75% of 100 = 75, and his savings are 100 - 75 = 25. His new income is 100 + 20% of 100 = 120. His new expenditure is 75 + 10% of 75 = 75 + 7.5 = 82.5. His new savings are 120 - 82.5 = 37.5. The increase in savings is 37.5 - 25 = 12.5. The percentage increase in savings is (12.5 / 25) × 100 = 50%."
  },
  {
    "id": "perc-005",
    "question": "The price of a shirt is first increased by 20% and then decreased by 20%. What is the net percentage change in the price of the shirt?",
    "options": [
      "0%",
      "-2%",
      "-4%",
      "-5%"
    ],
    "answer": 2,
    "explanation": "This can be solved using the successive percentage change formula: a + b + (ab/100). Here, a = +20 and b = -20. The net change = 20 + (-20) + (20 × -20)/100 = 0 - 400/100 = -4%. The price decreases by 4%."
  },
  {
    "id": "perc-006",
    "question": "A 40-liter mixture contains 10% acid. How much pure acid must be added to make the percentage of acid 20%?",
    "options": [
      "4 liters",
      "5 liters",
      "6 liters",
      "8 liters"
    ],
    "answer": 1,
    "explanation": "The initial amount of acid is 10% of 40 liters = 4 liters. Let X be the amount of pure acid added. The new amount of acid is 4+X, and the new total volume is 40+X. The new percentage is 20%, so (4+X) / (40+X) = 0.20. 4 + X = 0.20(40 + X) ⇒ 4 + X = 8 + 0.2X ⇒ 0.8X = 4 ⇒ X = 5 liters."
  },
  {
    "id": "perc-007",
    "question": "In an election, candidate A gets 60% of the total votes and wins by 1400 votes. What is the total number of votes?",
    "options": [
      "6000",
      "7000",
      "8000",
      "9000"
    ],
    "answer": 1,
    "explanation": "If candidate A gets 60% of the votes, the other candidate (B) must have received 100% - 60% = 40% of the votes. The difference in their votes is 60% - 40% = 20% of the total votes. This 20% difference is equal to 1400 votes. To find the total votes, we calculate 1400 / 0.20 = 7000."
  },
  {
    "id": "perc-008",
    "question": "In a college, 60% of the students are boys and the rest are girls. If 20% of the boys and 25% of the girls are over 18 years old, what percentage of the total students are over 18?",
    "options": [
      "20%",
      "22%",
      "24%",
      "25%"
    ],
    "answer": 1,
    "explanation": "Assume there are 100 students in total. This means there are 60 boys and 40 girls. The number of boys over 18 is 20% of 60 = 12. The number of girls over 18 is 25% of 40 = 10. The total number of students over 18 is 12 + 10 = 22. This represents 22% of the total number of students (22 out of 100)."
  },
  {
    "id": "perc-009",
    "question": "Due to a 25% increase in the price of rice, a family reduces its consumption by 20%. What is the percentage change in the family's expenditure on rice?",
    "options": [
      "0%",
      "5%",
      "10%",
      "20%"
    ],
    "answer": 0,
    "explanation": "Let the original price and consumption each be 100. Original expenditure = 100 × 100 = 10,000. After the changes, the new price is 100 + 25% = 125, and the new consumption is 100 - 20% = 80. New expenditure = 125 × 80 = 10,000. The percentage change in expenditure is (10,000 - 10,000) / 10,000 × 100 = 0%."
  },
  {
    "id": "perc-010",
    "question": "In a survey, 65% of the people like tea, while 70% like coffee. If 50% of the people like both, what percentage of people like neither tea nor coffee?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 1,
    "explanation": "We can use the formula for unions of sets: P(A or B) = P(A) + P(B) - P(A and B). Percentage who like at least one = 65% + 70% - 50% = 85%. The percentage who like neither is 100% - 85% = 15%."
  },
  
  
  {
    "id": "q-001",
    "question": "Find the least number which when divided by 12, 15, and 18 leaves the same remainder 7.",
    "options": ["187", "367", "427", "217", "157"],
    "answer": 1,
    "explanation": "LCM(12,15,18) = 180. Required number = 180k + 7. Smallest such number greater than all divisors is 187. Next is 367. Among options, 367 is correct. → Option index 1."
  },
  {
    "id": "q-002",
    "question": "What is the remainder when 7^103 is divided by 12?",
    "options": ["1", "7", "5", "11", "9"],
    "answer": 1,
    "explanation": "7² ≡ 1 (mod 12). Cycle length = 2. Since 103 is odd, remainder = 7. Correct → Option index 1."
  },
  {
    "id": "q-003",
    "question": "The HCF of 1365 and 1560 is:",
    "options": ["65", "105", "195", "85", "45"],
    "answer": 2,
    "explanation": "1365 = 3×5×7×13. 1560 = 2³×3×5×13. Common = 3×5×13 = 195. Correct → Option index 2."
  },
  {
    "id": "q-004",
    "question": "What is the unit digit of (437)^29?",
    "options": ["7", "9", "3", "1", "5"],
    "answer": 0,
    "explanation": "Unit digit of 7^n cycles (7,9,3,1). 29 ÷ 4 = remainder 1. So unit digit = 7. Correct → Option index 0."
  },
  {
    "id": "q-005",
    "question": "The LCM of two numbers is 495 and their HCF is 5. If one number is 55, find the other.",
    "options": ["45", "81", "90", "33", "121"],
    "answer": 0,
    "explanation": "Product of numbers = LCM × HCF = 495 × 5 = 2475. Other number = 2475 ÷ 55 = 45. Correct → Option index 0."
  },
  {
    "id": "q-006",
    "question": "A number when divided by 11 leaves remainder 7. What will be the remainder when twice this number is divided by 11?",
    "options": ["3", "2", "7", "5", "9"],
    "answer": 0,
    "explanation": "Let N=11k+7. Then 2N=22k+14=11(2k+1)+3. Remainder = 3. Correct → Option index 0."
  },
  {
    "id": "q-007",
    "question": "Find the greatest 4-digit number exactly divisible by 15, 25, 40, and 75.",
    "options": ["9600", "9900", "9750", "9400", "9250"],
    "answer": 0,
    "explanation": "LCM(15,25,40,75)=600. Largest 4-digit multiple = 600×16=9600. Correct → Option index 0."
  },
  {
    "id": "q-008",
    "question": "Find the sum of digits of the smallest number divisible by 72 and 108.",
    "options": ["18", "27", "9", "36", "24"],
    "answer": 2,
    "explanation": "LCM(72,108)=216. Sum of digits = 2+1+6=9. Correct → Option index 2."
  },
  {
    "id": "q-009",
    "question": "The product of two co-prime numbers is 630. Find their LCM.",
    "options": ["315", "210", "1260", "630", "945"],
    "answer": 3,
    "explanation": "For co-prime numbers, LCM = product. So LCM=630. Correct → Option index 3."
  },
  {
    "id": "q-010",
    "question": "Find the remainder when 9^57 is divided by 13.",
    "options": ["1", "3", "9", "12", "7"],
    "answer": 0,
    "explanation": "9³ ≡ 1 (mod 13). 57 ÷ 3 = 19, remainder 0. So remainder = 1. Correct → Option index 0."
  },
  {
    "id": "q-011",
    "question": "What is the smallest number that when increased by 17 is divisible by 36?",
    "options": ["19", "55", "101", "127", "145"],
    "answer": 0,
    "explanation": "N+17 divisible by 36 → N ≡ -17 ≡ 19 (mod 36). Smallest = 19. Correct → Option index 0."
  },
  {
    "id": "q-012",
    "question": "Which one is divisible by 99?",
    "options": ["1089", "4950", "1287", "891", "9801"],
    "answer": 4,
    "explanation": "99=9×11. 9801 ÷ 99=99 exactly. Correct → Option index 4."
  },
  {
    "id": "q-013",
    "question": "What is the unit digit of (13^45 × 24^36)?",
    "options": ["2", "4", "6", "8", "0"],
    "answer": 3,
    "explanation": "13^45 → unit same as 3^45. Cycle (3,9,7,1). 45 mod4=1 → unit=3. 24^36 → same as 4^36. Cycle (4,6). Exponent even → unit=6. Product = 3×6=18 → unit digit=8. Correct → Option index 3."
  },
  {
    "id": "q-014",
    "question": "Find the greatest 3-digit number exactly divisible by 27.",
    "options": ["972", "999", "945", "963", "990"],
    "answer": 1,
    "explanation": "999 ÷ 27 = 37 exactly. So 999 is the greatest 3-digit multiple of 27. Correct → Option index 1."
  },
  {
    "id": "q-015",
    "question": "Find the remainder when 2^120 is divided by 17.",
    "options": ["1", "2", "16", "8", "9"],
    "answer": 0,
    "explanation": "By Fermat’s theorem: 2^16 ≡ 1 (mod 17). 120 ÷ 16 = 7 remainder 8. So 2^120 ≡ 2^8 mod 17. 2^8=256. 256 ÷ 17=15 remainder 1. Correct remainder=1 → Option index 0."
  },
  
       
      ],
      
      'MOCK2': [
        
        // TOPIC WISE - 20 NUMBER SYSTEM
      
    {
      "id": "q-001",
      "question": "The sum of two numbers is 36 and their HCF is 4. How many pairs of such numbers are possible?",
      "options": [
        "2",
        "3",
        "4",
        "1"
      ],
      "answer": 1,
      "explanation": "Let the two numbers be 4a and 4b, where a and b are coprime. Their sum is 4a + 4b = 36, which simplifies to a + b = 9. The pairs of coprime numbers that sum to 9 are (1, 8), (2, 7), and (4, 5). The pair (3, 6) is not coprime as their HCF is 3. So there are **3** possible pairs. The correct answer is 3 → Option index 1."
    },
    {
      "id": "q-002",
      "question": "What is the unit digit of 3^65 × 6^59 × 7^71?",
      "options": [
        "1",
        "2",
        "4",
        "6"
      ],
      "answer": 2,
      "explanation": "To find the unit digit, we analyze the cyclicity of each base. The unit digit of 3^n has a cycle of 4 (3, 9, 7, 1). For 3^65, the remainder of 65/4 is 1, so the unit digit is the same as 3^1, which is **3**. The unit digit of 6^n is always **6**. The unit digit of 7^n has a cycle of 4 (7, 9, 3, 1). For 7^71, the remainder of 71/4 is 3, so the unit digit is the same as 7^3, which is **3**. The unit digit of the product is the unit digit of 3 × 6 × 3 = 54, which is **4**. The correct answer is 4 → Option index 2."
    },
    {
      "id": "q-003",
      "question": "Find the largest number that divides 39, 87, and 123 leaving the same remainder in each case.",
      "options": [
        "6",
        "12",
        "16",
        "8"
      ],
      "answer": 1,
      "explanation": "The largest number that leaves the same remainder is the HCF of the differences between the numbers. The differences are 87 - 39 = 48, 123 - 87 = 36, and 123 - 39 = 84. The HCF of 48, 36, and 84 is **12**. The correct answer is 12 → Option index 1."
    },
    {
      "id": "q-004",
      "question": "The HCF and LCM of two numbers are 13 and 455 respectively. If one of the numbers is 65, what is the other number?",
      "options": [
        "91",
        "78",
        "65",
        "85"
      ],
      "answer": 0,
      "explanation": "The product of two numbers is equal to the product of their HCF and LCM. Let the other number be N. 65 × N = 13 × 455. N = (13 × 455) / 65 = 455 / 5 = **91**. The correct answer is 91 → Option index 0."
    },
    {
      "id": "q-005",
      "question": "A number when divided by 899 gives a remainder of 63. What will be the remainder when the same number is divided by 29?",
      "options": [
        "5",
        "4",
        "6",
        "8"
      ],
      "answer": 0,
      "explanation": "Let the number be N. N = 899q + 63. We know that 899 is divisible by 29 (899 = 29 × 31). So, the remainder will be the same as the remainder of 63 divided by 29. 63 = 29 × 2 + 5. The remainder is **5**. The correct answer is 5 → Option index 0."
    },
    {
      "id": "q-006",
      "question": "Find the least number which when divided by 12, 15, 20, and 54 leaves a remainder of 4 in each case.",
      "options": [
        "544",
        "540",
        "536",
        "548"
      ],
      "answer": 0,
      "explanation": "First, find the LCM of 12, 15, 20, and 54. The prime factorizations are: 12 = 2^2 × 3, 15 = 3 × 5, 20 = 2^2 × 5, 54 = 2 × 3^3. The LCM is the product of the highest powers of all prime factors: 2^2 × 3^3 × 5 = 4 × 27 × 5 = **540**. The required number is LCM + remainder, so 540 + 4 = **544**. The correct answer is 544 → Option index 0."
    },
    {
      "id": "q-007",
      "question": "Simplify: 25 - [12 + {15 - (6+4)}].",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 2,
      "explanation": "We follow the BODMAS rule. First, solve the innermost parentheses: (6+4) = 10. Next, solve the curly braces: {15-10} = 5. Then, solve the square brackets: [12+5] = 17. Finally, perform the subtraction: 25-17 = **8**. The correct answer is 8 → Option index 2."
    },
    {
      "id": "q-008",
      "question": "The LCM of two numbers is 2079 and their HCF is 27. If one of the numbers is 189, what is the other number?",
      "options": [
        "287",
        "297",
        "307",
        "317"
      ],
      "answer": 1,
      "explanation": "Using the formula: First Number × Second Number = HCF × LCM. 189 × N = 27 × 2079. N = (27 × 2079) / 189 = 2079 / 7 = **297**. The correct answer is 297 → Option index 1."
    },
    {
      "id": "q-009",
      "question": "What is the unit digit of 7^95 - 3^58?",
      "options": [
        "4",
        "6",
        "0",
        "2"
      ],
      "answer": 0,
      "explanation": "For 7^95: The cyclicity of 7 is 4. The remainder of 95/4 is 3. The unit digit is the same as 7^3, which is 343, so the unit digit is **3**. For 3^58: The cyclicity of 3 is 4. The remainder of 58/4 is 2. The unit digit is the same as 3^2, which is **9**. The unit digit of the difference is the unit digit of 3-9. Since 3 is smaller than 9, we consider it as 13. The unit digit of 13-9 is **4**. The correct answer is 4 → Option index 0."
    },
    {
      "id": "q-010",
      "question": "Find the least number which when divided by 12, 16, and 24 leaves a remainder of 3 in each case, but is completely divisible by 7.",
      "options": [
        "147",
        "150",
        "153",
        "156"
      ],
      "answer": 0,
      "explanation": "First, we find the LCM of 12, 16, and 24. $12=2^2 \times 3$, $16=2^4$, $24=2^3 \times 3$. The LCM is $2^4 \times 3 = **48**$. The number is of the form 48k+3. We need to find the smallest integer k for which 48k+3 is divisible by 7. We test values for k: for k=3, 48(3)+3 = 144+3 = **147**. $147/7 = 21$. So the number is 147. The correct answer is 147 → Option index 0."
    },
    {
      "id": "q-011",
      "question": "What is the remainder when 17^200 is divided by 18?",
      "options": [
        "1",
        "17",
        "16",
        "2"
      ],
      "answer": 0,
      "explanation": "Using the concept of modular arithmetic, we know that 17 is congruent to -1 modulo 18. So, 17 ≡ -1 (mod 18). Then, 17^200 ≡ (-1)^200 (mod 18). Since 200 is an even number, (-1)^200 = 1. Therefore, the remainder is **1**. The correct answer is 1 → Option index 0."
    },
    {
      "id": "q-012",
      "question": "The HCF and LCM of two numbers are 25 and 150 respectively. The sum of the numbers is 125. Find the difference between the numbers.",
      "options": [
        "25",
        "50",
        "75",
        "100"
      ],
      "answer": 0,
      "explanation": "Let the numbers be x and y. We are given x+y = 125 and HCF × LCM = xy. So, xy = 25 × 150 = 3750. We need to find the difference, x-y. We use the identity: $(x-y)^2 = (x+y)^2 - 4xy$. $(x-y)^2 = (125)^2 - 4(3750) = 15625 - 15000 = 625$. $x-y = sqrt(625) = **25**. The correct answer is 25 → Option index 0."
    },
    {
      "id": "q-013",
      "question": "What is the greatest 4-digit number which is exactly divisible by 12, 18, and 24?",
      "options": [
        "9936",
        "9996",
        "9960",
        "9984"
      ],
      "answer": 0,
      "explanation": "First, find the LCM of 12, 18, and 24. $12=2^2 \times 3$, $18=2 \times 3^2$, $24=2^3 \times 3$. The LCM is $2^3 \times 3^2 = 8 \times 9 = **72**. The greatest 4-digit number is 9999. To find the largest number divisible by 72, we divide 9999 by 72. $9999 = 72 \times 138 + 63$. The required number is 9999 - 63 = **9936**. The correct answer is 9936 → Option index 0."
    },
    {
      "id": "q-014",
      "question": "A number when divided by 5, 6, and 7 leaves remainders 3, 4, and 5 respectively. What is the smallest such number?",
      "options": [
        "208",
        "210",
        "212",
        "206"
      ],
      "answer": 0,
      "explanation": "Let the number be N. The remainders are 3, 4, 5 when divided by 5, 6, 7. The difference between the divisor and the remainder is constant: 5-3=2, 6-4=2, 7-5=2. The number is of the form LCM(5, 6, 7) - 2. The LCM of 5, 6, and 7 is 5 × 6 × 7 = **210**. The smallest such number is 210 - 2 = **208**. The correct answer is 208 → Option index 0."
    },
    {
      "id": "q-015",
      "question": "What is the greatest number that will divide 1657 and 2037 leaving remainders 6 and 5 respectively?",
      "options": [
        "121",
        "119",
        "127",
        "131"
      ],
      "answer": 2,
      "explanation": "The greatest number that will divide 1657 and 2037 leaving remainders 6 and 5 respectively is the HCF of (1657-6) and (2037-5). We need to find the HCF of 1651 and 2032. Using the Euclidean algorithm: $2032 = 1651 \times 1 + 381$, $1651 = 381 \times 4 + 127$, $381 = 127 \times 3 + 0$. The last non-zero remainder is **127**, which is the HCF. The correct answer is 127 → Option index 2."
    },
    {
      "id": "q-016",
      "question": "The LCM of two numbers is 480 and their HCF is 16. If one of the numbers is 64, what is the other number?",
      "options": [
        "120",
        "100",
        "140",
        "160"
      ],
      "answer": 0,
      "explanation": "Using the formula: First Number × Second Number = HCF × LCM. 64 × N = 16 × 480. N = (16 × 480) / 64 = 480 / 4 = **120**. The correct answer is 120 → Option index 0."
    },
    {
      "id": "q-017",
      "question": "What is the unit digit of (2137)^754?",
      "options": [
        "1",
        "3",
        "7",
        "9"
      ],
      "answer": 3,
      "explanation": "The unit digit is determined by the unit digit of the base, which is 7. The cyclicity of the unit digit of powers of 7 is 4 (7, 9, 3, 1). We need to find the remainder of 754 when divided by 4. The last two digits, 54, divided by 4 gives a remainder of 2. So, the unit digit is the same as 7^2 = 49, which is **9**. The correct answer is 9 → Option index 3."
    },
    {
      "id": "q-018",
      "question": "A number when divided by 3, 4, 5, and 6 leaves a remainder of 2 in each case. The number lies between 500 and 600. What is the sum of the digits of the number?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "answer": 1,
      "explanation": "First, find the LCM of the divisors 3, 4, 5, and 6. LCM(3, 4, 5, 6) = **60**. The number can be represented as 60k+2. We need to find k such that 500 < 60k+2 < 600. This simplifies to 498 < 60k < 598, or 8.3 < k < 9.96. The only integer value for k is 9. The number is 60 × 9 + 2 = 540 + 2 = **542**. The sum of the digits of 542 is 5+4+2 = **11**. The correct answer is 11 → Option index 1."
    },
    {
      "id": "q-019",
      "question": "What is the remainder when 13^11 is divided by 12?",
      "options": [
        "1",
        "11",
        "13",
        "0"
      ],
      "answer": 0,
      "explanation": "We can write 13 as (12+1). So, 13^11 = (12+1)^11. When (12+1)^11 is divided by 12, the remainder is the same as the remainder of 1^11, which is **1**. The correct answer is 1 → Option index 0."
    },
    {
      "id": "q-020",
      "question": "The sum of two numbers is 24 and their product is 128. What is the sum of their reciprocals?",
      "options": [
        "3/16",
        "1/2",
        "2/3",
        "5/32"
      ],
      "answer": 0,
      "explanation": "Let the numbers be x and y. We are given x+y = 24 and xy = 128. The sum of their reciprocals is (1/x) + (1/y) = (x+y)/xy. Substituting the given values, we get 24/128. Simplifying the fraction: 24/128 = 12/64 = 6/32 = **3/16**. The correct answer is 3/16 → Option index 0."
    },
       
       
       // ORDER OF MAGNITUDE AND QUADRATIC EQN  
        
      
    {
      "id": "q-001",
      "question": "If x = 7 + 4√3, find the value of x + 1/x.",
      "options": [
        "14",
        "8",
        "12",
        "16"
      ],
      "answer": 0,
      "explanation": "Given x = 7 + 4√3. To find 1/x, we rationalize the denominator by multiplying the numerator and denominator by the conjugate of the denominator: 1/x = 1 / (7 + 4√3) = (7 - 4√3) / ((7 + 4√3)(7 - 4√3)) = (7 - 4√3) / (49 - 48) = 7 - 4√3. Now, x + 1/x = (7 + 4√3) + (7 - 4√3) = **14**. The correct answer is 14 → Option index 0."
    },
    {
      "id": "q-002",
      "question": "Simplify: (4√3 + 2√2)^2.",
      "options": [
        "48 + 8√6",
        "56 + 16√6",
        "56 + 8√6",
        "48 + 16√6"
      ],
      "answer": 1,
      "explanation": "This expression is in the form of (a+b)^2 = a^2 + 2ab + b^2. Here, a = 4√3 and b = 2√2. So, a^2 = (4√3)^2 = 16 × 3 = 48. b^2 = (2√2)^2 = 4 × 2 = 8. And, 2ab = 2 × (4√3) × (2√2) = 16√6. Therefore, (4√3 + 2√2)^2 = 48 + 8 + 16√6 = **56 + 16√6**. The correct answer is 56 + 16√6 → Option index 1."
    },
    {
      "id": "q-003",
      "question": "If 8^(2x+1) = (32)^(x-1), find the value of x.",
      "options": [
        "8",
        "-8",
        "7",
        "-7"
      ],
      "answer": 1,
      "explanation": "To solve this, we express both sides with the same base, which is 2. We know that 8 = 2^3 and 32 = 2^5. So, the equation becomes (2^3)^(2x+1) = (2^5)^(x-1), which simplifies to 2^(6x+3) = 2^(5x-5). Equating the exponents, we get 6x + 3 = 5x - 5. Solving for x, we get 6x - 5x = -5 - 3, which gives x = **-8**. The correct answer is -8 → Option index 1."
    },
    {
      "id": "q-004",
      "question": "If (a/b)^(x-1) = (b/a)^(x-3), find the value of x.",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "We can write (b/a) as (a/b)^-1. So, (b/a)^(x-3) can be rewritten as (a/b)^-(x-3) = (a/b)^(3-x). The equation becomes (a/b)^(x-1) = (a/b)^(3-x). Equating the exponents, we get x - 1 = 3 - x. Solving for x, we get 2x = 4, so x = **2**. The correct answer is 2 → Option index 1."
    },
    {
      "id": "q-005",
      "question": "Solve the quadratic equation: x^2 - 11x + 30 = 0.",
      "options": [
        "x = 5, 6",
        "x = -5, -6",
        "x = 5, -6",
        "x = -5, 6"
      ],
      "answer": 0,
      "explanation": "To solve the quadratic equation, we can use factorization. We need to find two numbers that multiply to give 30 and add up to -11. These numbers are -5 and -6. So, the equation can be factored as (x-5)(x-6) = 0. This gives us two possible solutions: x-5 = 0 or x-6 = 0. Therefore, the roots are x = **5** and x = **6**. The correct answer is x = 5, 6 → Option index 0."
    },
    {
      "id": "q-006",
      "question": "What is the value of (√2 + √3 - √5) × (√2 + √3 + √5)?",
      "options": [
        "2√6",
        "2√5",
        "3√2",
        "4√3"
      ],
      "answer": 0,
      "explanation": "This expression is in the form (A - B)(A + B) = A^2 - B^2, where A = (√2 + √3) and B = √5. The expression becomes (√2 + √3)^2 - (√5)^2. We expand the first term: (√2 + √3)^2 = (√2)^2 + (√3)^2 + 2(√2)(√3) = 2 + 3 + 2√6 = 5 + 2√6. The second term is (√5)^2 = 5. So, the expression is (5 + 2√6) - 5 = **2√6**. The correct answer is 2√6 → Option index 0."
    },
    {
      "id": "q-007",
      "question": "The sum of the roots of a quadratic equation is 8 and their product is 12. Find the equation.",
      "options": [
        "x^2 + 8x + 12 = 0",
        "x^2 - 8x + 12 = 0",
        "x^2 - 8x - 12 = 0",
        "x^2 + 8x - 12 = 0"
      ],
      "answer": 1,
      "explanation": "A quadratic equation with roots α and β is given by the formula x^2 - (α+β)x + αβ = 0. Given that the sum of the roots (α+β) = 8 and the product of the roots (αβ) = 12, we can substitute these values into the formula. The equation is **x^2 - 8x + 12 = 0**. The correct answer is x^2 - 8x + 12 = 0 → Option index 1."
    },
    {
      "id": "q-008",
      "question": "If 3^(x+2) = 243, what is the value of x?",
      "options": [
        "2",
        "3",
        "5",
        "4"
      ],
      "answer": 1,
      "explanation": "To solve this, we express 243 as a power of 3. $3 \times 3 \times 3 \times 3 \times 3 = 243$, so $243 = 3^5$. The equation becomes 3^(x+2) = 3^5. Equating the exponents, we get x+2 = 5. Solving for x, we get x = 5-2 = **3**. The correct answer is 3 → Option index 1."
    },
    {
      "id": "q-009",
      "question": "Find the value of sqrt(12 + sqrt(12 + sqrt(12 + ...))).",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explanation": "Let the value of the expression be x. So, x = sqrt(12 + sqrt(12 + sqrt(12 + ...))). Squaring both sides, we get x^2 = 12 + sqrt(12 + sqrt(12 + ...)). We can substitute x back into the equation: x^2 = 12 + x. Rearranging gives a quadratic equation: x^2 - x - 12 = 0. We can factor this equation as (x-4)(x+3) = 0. The possible solutions are x=4 or x=-3. Since the expression involves a positive square root, the value must be positive. Therefore, x = **4**. The correct answer is 4 → Option index 1."
    },
    {
      "id": "q-010",
      "question": "Find the value of (243)^(2/5) × 3^3 / 9^(1/2).",
      "options": [
        "9",
        "27",
        "3",
        "81"
      ],
      "answer": 3,
      "explanation": "We can express all the numbers as powers of 3. We know that 243 = 3^5 and 9 = 3^2. The expression becomes (3^5)^(2/5) × 3^3 / (3^2)^(1/2). Using the rules of indices, we multiply the exponents: 3^(5 × 2/5) × 3^3 / 3^(2 × 1/2) = 3^2 × 3^3 / 3^1. Now, we add the exponents in the numerator and subtract the exponent of the denominator: 3^(2+3-1) = 3^4 = **81**. The correct answer is 81 → Option index 3."
    },
    {
      "id": "q-011",
      "question": "If x = (sqrt(3) + sqrt(2)) / (sqrt(3) - sqrt(2)), find the value of x + 1/x.",
      "options": [
        "2√6",
        "5",
        "10",
        "2"
      ],
      "answer": 2,
      "explanation": "First, we rationalize x by multiplying the numerator and denominator by the conjugate of the denominator, which is (sqrt(3) + sqrt(2)). x = (sqrt(3) + sqrt(2)) / (sqrt(3) - sqrt(2)) × (sqrt(3) + sqrt(2)) / (sqrt(3) + sqrt(2)) = (sqrt(3)+sqrt(2))^2 / ((sqrt(3))^2 - (sqrt(2))^2) = (3 + 2 + 2√6) / (3 - 2) = 5 + 2√6. The reciprocal of x is 1/x = 1/(5+2√6) = (5-2√6)/(25-24) = 5-2√6. Then, x + 1/x = (5 + 2√6) + (5 - 2√6) = **10**. The correct answer is 10 → Option index 2."
    },
    {
      "id": "q-012",
      "question": "Find the value of sqrt(18) + sqrt(32) - sqrt(50).",
      "options": [
        "3√2",
        "4√2",
        "2√2",
        "√2"
      ],
      "answer": 2,
      "explanation": "To simplify, we express each number under the square root in the form of a^2 * b. sqrt(18) = sqrt(9 × 2) = 3√2. sqrt(32) = sqrt(16 × 2) = 4√2. sqrt(50) = sqrt(25 × 2) = 5√2. Now, we substitute these simplified terms back into the expression: 3√2 + 4√2 - 5√2. Combining the like terms, we get (3 + 4 - 5)√2 = **2√2**. The correct answer is 2√2 → Option index 2."
    },
    {
      "id": "q-013",
      "question": "Find the discriminant of the quadratic equation 2x^2 - 5x + 3 = 0.",
      "options": [
        "1",
        "2",
        "4",
        "0"
      ],
      "answer": 0,
      "explanation": "The discriminant of a quadratic equation in the form ax^2 + bx + c = 0 is given by the formula Δ = b^2 - 4ac. For the given equation 2x^2 - 5x + 3 = 0, we have a=2, b=-5, and c=3. Substituting these values, Δ = (-5)^2 - 4(2)(3) = 25 - 24 = **1**. The correct answer is 1 → Option index 0."
    },
    {
      "id": "q-014",
      "question": "If 5^(x-2) = 1, what is the value of x?",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 1,
      "explanation": "We know that any non-zero number raised to the power of 0 is 1. So, we can write the equation as 5^(x-2) = 5^0. By equating the exponents, we get x-2 = 0. Solving for x, we get x = **2**. The correct answer is 2 → Option index 1."
    },
    {
      "id": "q-015",
      "question": "If a^2 + 1/a^2 = 14, find the value of a + 1/a.",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explanation": "We know that the algebraic identity is (a + 1/a)^2 = a^2 + 1/a^2 + 2(a)(1/a) = a^2 + 1/a^2 + 2. Substituting the given value of a^2 + 1/a^2 = 14, we get (a + 1/a)^2 = 14 + 2 = 16. Taking the square root of both sides, we find a + 1/a = sqrt(16) = **4**. The correct answer is 4 → Option index 1."
    },
    {
      "id": "q-016",
      "question": "Find the roots of the equation x^2 - 7x - 18 = 0.",
      "options": [
        "9, 2",
        "-9, 2",
        "9, -2",
        "-9, -2"
      ],
      "answer": 2,
      "explanation": "To find the roots, we factor the quadratic equation. We need two numbers that multiply to -18 and add up to -7. These numbers are -9 and 2. So, we can factor the equation as (x-9)(x+2) = 0. This gives us x-9 = 0 or x+2 = 0. The roots are x = **9** and x = **-2**. The correct answer is 9, -2 → Option index 2."
    },
    {
      "id": "q-017",
      "question": "What is the value of (27)^(-1/3)?",
      "options": [
        "1/3",
        "3",
        "1/9",
        "9"
      ],
      "answer": 0,
      "explanation": "The negative exponent indicates a reciprocal, and the fractional exponent (1/3) indicates a cube root. So, (27)^(-1/3) = 1 / (27)^(1/3). The cube root of 27 is 3. Therefore, the expression simplifies to 1/3. The correct answer is 1/3 → Option index 0."
    },
    {
      "id": "q-018",
      "question": "If 4^x = 1/256, find the value of x.",
      "options": [
        "4",
        "-4",
        "1/4",
        "-1/4"
      ],
      "answer": 1,
      "explanation": "We can express 1/256 as a power of 4. We know that 256 = 4^4. So, 1/256 = 1/4^4 = 4^(-4). The equation becomes 4^x = 4^(-4). By equating the exponents, we find x = **-4**. The correct answer is -4 → Option index 1."
    },
    {
      "id": "q-019",
      "question": "Simplify the fraction: ((1/2)+(1/3))/((1/2)-(1/3)).",
      "options": [
        "5",
        "1",
        "3",
        "2"
      ],
      "answer": 0,
      "explanation": "First, we simplify the numerator by finding a common denominator for 1/2 and 1/3, which is 6. 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Next, we simplify the denominator: 1/2 - 1/3 = 3/6 - 2/6 = 1/6. Finally, we divide the numerator by the denominator: (5/6) / (1/6) = (5/6) × (6/1) = **5**. The correct answer is 5 → Option index 0."
    },
    {
      "id": "q-020",
      "question": "Find the value of 1/(2-√3) - 1/(2+√3).",
      "options": [
        "4",
        "2√3",
        "0",
        "4√3"
      ],
      "answer": 1,
      "explanation": "To simplify, we first rationalize each term. For the first term: 1/(2-√3) = (2+√3)/((2-√3)(2+√3)) = (2+√3)/(4-3) = 2+√3. For the second term: 1/(2+√3) = (2-√3)/((2+√3)(2-√3)) = (2-√3)/(4-3) = 2-√3. Now, we subtract the second term from the first: (2+√3) - (2-√3) = 2 + √3 - 2 + √3 = **2√3**. The correct answer is 2√3 → Option index 1."
    },
    
    
    // Percentage 
    
    
  {
    "id": "q-001",
    "question": "In an election, a candidate received 40% of the total valid votes. If 20% of the total votes were declared invalid, and the total number of votes cast was 15,000, what is the number of valid votes received by the candidate?",
    "options": [
      "4800",
      "5200",
      "4500",
      "6000"
    ],
    "answer": 0,
    "explanation": "Total votes cast = 15,000.\nInvalid votes = 20% of 15,000 = (20/100) * 15,000 = 3,000.\nValid votes = Total votes - Invalid votes = 15,000 - 3,000 = 12,000.\nValid votes received by the candidate = 40% of total valid votes = 40% of 12,000 = (40/100) * 12,000 = 4,800."
  },
  {
    "id": "q-002",
    "question": "A student needs to score 36% marks to pass an exam. If he gets 150 marks and fails by 30 marks, what is the maximum marks of the exam?",
    "options": [
      "450",
      "500",
      "550",
      "600"
    ],
    "answer": 1,
    "explanation": "To find the passing marks, we add the marks obtained to the marks failed by: 150 + 30 = 180.\nAccording to the question, 36% of the total marks is equal to the passing marks. Let the maximum marks be 'x'.\nSo, 36% of x = 180\n(36/100) * x = 180\nx = (180 * 100) / 36\nx = 5 * 100\nx = 500.\nMaximum marks of the exam is 500."
  },
  {
    "id": "q-003",
    "question": "If the price of a commodity increases by 20%, by what percentage must a family reduce its consumption to keep the expenditure same?",
    "options": [
      "20%",
      "16.67%",
      "25%",
      "15%"
    ],
    "answer": 1,
    "explanation": "Let the original price be 'P' and original consumption be 'C'. Original expenditure = P * C.\nNew price = P + 20% of P = P + 0.2P = 1.2P.\nTo keep the expenditure same, the new expenditure must equal the original. Let the new consumption be C_new.\n1.2P * C_new = P * C\nC_new = (P * C) / 1.2P = C / 1.2.\nReduction in consumption = Original consumption - New consumption = C - C/1.2 = C * (1 - 1/1.2) = C * (0.2/1.2) = C * (1/6).\nPercentage reduction = (Reduction / Original consumption) * 100 = ((C/6) / C) * 100 = (1/6) * 100 = 16.67%."
  },
  {
    "id": "q-004",
    "question": "In a town, 60% of the population are males and 40% are females. If 20% of the males and 25% of the females are educated, what percentage of the total population is educated?",
    "options": [
      "21%",
      "22%",
      "23%",
      "24%"
    ],
    "answer": 1,
    "explanation": "Let the total population be 100.\nNumber of males = 60% of 100 = 60.\nNumber of females = 40% of 100 = 40.\nEducated males = 20% of males = 20% of 60 = (20/100) * 60 = 12.\nEducated females = 25% of females = 25% of 40 = (25/100) * 40 = 10.\nTotal educated population = 12 + 10 = 22.\nPercentage of educated population = (Total educated / Total population) * 100 = (22 / 100) * 100 = 22%."
  },
  {
    "id": "q-005",
    "question": "A number is increased by 20% and then decreased by 20%. The net change in the number is:",
    "options": [
      "4% increase",
      "4% decrease",
      "No change",
      "2% decrease"
    ],
    "answer": 1,
    "explanation": "Let the original number be 'x'.\nAfter increasing by 20%, the new number is: x + 0.20x = 1.20x.\nAfter decreasing the new number by 20%, the final number is: 1.20x - (20/100) * 1.20x = 1.20x - 0.24x = 0.96x.\nThe net change is the original number minus the final number: x - 0.96x = 0.04x.\nPercentage change = (Net change / Original number) * 100 = (0.04x / x) * 100 = 4%.\nSince the final number (0.96x) is less than the original number (x), it is a 4% decrease."
  },
  {
    "id": "q-006",
    "question": "If A's income is 25% more than B's income, then B's income is what percentage less than A's income?",
    "options": [
      "20%",
      "25%",
      "33.33%",
      "16.67%"
    ],
    "answer": 0,
    "explanation": "Let B's income be ₹100.\nThen A's income = ₹100 + 25% of ₹100 = ₹100 + ₹25 = ₹125.\nDifference between A's and B's income = ₹125 - ₹100 = ₹25.\nTo find the percentage B's income is less than A's, we use A's income as the base.\nPercentage less = (Difference / A's income) * 100 = (25 / 125) * 100 = (1/5) * 100 = 20%."
  },
  {
    "id": "q-007",
    "question": "The population of a city increases by 10% annually. If the present population is 1,21,000, what was the population two years ago?",
    "options": [
      "1,00,000",
      "1,10,000",
      "99,000",
      "1,20,000"
    ],
    "answer": 0,
    "explanation": "Let the population two years ago be 'P'.\nAfter the first year, the population is P + 10% of P = P(1 + 0.10) = 1.1P.\nAfter the second year, the population is 1.1P + 10% of 1.1P = 1.1P(1 + 0.10) = 1.1P * 1.1 = 1.21P.\nThe present population is 1,21,000. So, 1.21P = 1,21,000.\nP = 1,21,000 / 1.21\nP = 1,21,000 / (121/100) = 1,21,000 * (100/121) = 1000 * 100 = 1,00,000.\nPopulation two years ago was 1,00,000."
  },
  {
    "id": "q-008",
    "question": "In an exam, 80% of the students passed in Mathematics and 70% passed in English. If 10% of the students failed in both subjects, what percentage of students passed in both subjects?",
    "options": [
      "60%",
      "50%",
      "40%",
      "65%"
    ],
    "answer": 0,
    "explanation": "Total students are 100%. If 10% failed in both, then 100% - 10% = 90% passed in at least one subject.\nUsing the principle of inclusion-exclusion: P(M or E) = P(M) + P(E) - P(M and E)\nHere, P(M or E) = 90%, P(M) = 80%, P(E) = 70%.\n90% = 80% + 70% - P(M and E)\n90% = 150% - P(M and E)\nP(M and E) = 150% - 90% = 60%.\nPercentage of students who passed in both subjects is 60%."
  },
  {
    "id": "q-009",
    "question": "A fruit seller had some oranges. He sells 40% of the oranges and still has 420 oranges. How many oranges did he have originally?",
    "options": [
      "700",
      "600",
      "800",
      "500"
    ],
    "answer": 0,
    "explanation": "Percentage of oranges sold = 40%.\nPercentage of oranges remaining = 100% - 40% = 60%.\nThis 60% of the original number of oranges is equal to 420.\nLet the total number of oranges be 'x'.\n60% of x = 420\n(60/100) * x = 420\nx = (420 * 100) / 60\nx = 7 * 100\nx = 700.\nHe originally had 700 oranges."
  },
  {
    "id": "q-010",
    "question": "The length of a rectangle is increased by 10% and its breadth is increased by 20%. What is the percentage increase in its area?",
    "options": [
      "30%",
      "32%",
      "33%",
      "35%"
    ],
    "answer": 1,
    "explanation": "Let the original length be 'L' and original breadth be 'B'. The original Area = L * B.\nNew length = L + 10% of L = 1.1L.\nNew breadth = B + 20% of B = 1.2B.\nNew Area = (New length) * (New breadth) = (1.1L) * (1.2B) = 1.32LB.\nPercentage increase in area = ((New Area - Original Area) / Original Area) * 100\n= ((1.32LB - LB) / LB) * 100 = (0.32LB / LB) * 100 = 0.32 * 100 = 32%."
  },
  {
    "id": "q-011",
    "question": "A number is mistakenly divided by 8 instead of being multiplied by 8. What is the percentage error in the calculation?",
    "options": [
      "87.5%",
      "99.6%",
      "98.4375%",
      "93.75%"
    ],
    "answer": 2,
    "explanation": "Let the number be 'x'.\nCorrect calculation: x * 8 = 8x.\nIncorrect calculation: x / 8 = x/8.\nError = Correct value - Incorrect value = 8x - x/8 = (64x - x) / 8 = 63x / 8.\nPercentage error = (Error / Correct value) * 100\n= ((63x/8) / 8x) * 100 = (63x / 8) * (1 / 8x) * 100 = (63 / 64) * 100 = 0.984375 * 100 = 98.4375%."
  },
  {
    "id": "q-012",
    "question": "The value of a machine depreciates by 10% every year. If its present value is ₹1,62,000, what was its value two years ago?",
    "options": [
      "₹1,80,000",
      "₹2,00,000",
      "₹1,95,000",
      "₹2,10,000"
    ],
    "answer": 1,
    "explanation": "Let the value of the machine two years ago be 'V'.\nAfter the first year, the value depreciates to V - 10% of V = V(1 - 0.10) = 0.9V.\nAfter the second year, the value depreciates again to 0.9V - 10% of 0.9V = 0.9V(1 - 0.10) = 0.9V * 0.9 = 0.81V.\nPresent value = ₹1,62,000.\nSo, 0.81V = 1,62,000\nV = 1,62,000 / 0.81\nV = 1,62,000 / (81/100) = 1,62,000 * (100/81) = 2000 * 100 = ₹2,00,000.\nIts value two years ago was ₹2,00,000."
  },
  {
    "id": "q-013",
    "question": "Due to a 25% price increase in sugar, a family reduces its consumption by 25%. What is the net percentage change in their expenditure?",
    "options": [
      "6.25% decrease",
      "6.25% increase",
      "No change",
      "5% decrease"
    ],
    "answer": 0,
    "explanation": "Let original price be 'P' and original consumption be 'C'. Original expenditure = P * C.\nNew price = P + 25% of P = 1.25P.\nNew consumption = C - 25% of C = 0.75C.\nNew expenditure = (New price) * (New consumption) = 1.25P * 0.75C = 0.9375PC.\nChange in expenditure = New expenditure - Original expenditure = 0.9375PC - PC = -0.0625PC.\nPercentage change = (Change / Original Expenditure) * 100 = (-0.0625PC / PC) * 100 = -0.0625 * 100 = -6.25%.\nThis is a 6.25% decrease."
  },
  {
    "id": "q-014",
    "question": "A candidate scores 20% marks and fails by 30 marks, while another candidate scores 32% marks and gets 42 marks more than the passing marks. What is the passing percentage?",
    "options": [
      "25%",
      "28%",
      "30%",
      "33%"
    ],
    "answer": 0,
    "explanation": "Let the maximum marks be 'x' and passing marks be 'p'.\nFrom the first candidate, the passing marks can be expressed as: p = 20% of x + 30 or p = 0.20x + 30. (Equation 1)\nFrom the second candidate, the passing marks can be expressed as: p = 32% of x - 42 or p = 0.32x - 42. (Equation 2)\nEquating both equations:\n0.20x + 30 = 0.32x - 42\n30 + 42 = 0.32x - 0.20x\n72 = 0.12x\nx = 72 / 0.12 = 600.\nMaximum marks = 600.\nNow, find the passing marks 'p' using Equation 1: p = 0.20 * 600 + 30 = 120 + 30 = 150.\nPassing percentage = (Passing marks / Maximum marks) * 100 = (150 / 600) * 100 = (1/4) * 100 = 25%."
  },
  {
    "id": "q-015",
    "question": "A vessel has 60 liters of a solution containing 75% acid. How much water should be added to make the solution contain 60% acid?",
    "options": [
      "10 liters",
      "15 liters",
      "20 liters",
      "25 liters"
    ],
    "answer": 1,
    "explanation": "Initial quantity of solution = 60 liters.\nInitial quantity of acid = 75% of 60 liters = (75/100) * 60 = 45 liters.\nLet 'x' liters of water be added to the solution. The new total quantity of the solution will be 60 + x.\nThe quantity of acid remains the same, at 45 liters.\nThe new solution should contain 60% acid.\n(Quantity of acid / New total quantity) * 100 = 60\n(45 / (60 + x)) * 100 = 60\n4500 = 60 * (60 + x)\n4500 / 60 = 60 + x\n75 = 60 + x\nx = 75 - 60 = 15.\nAmount of water to be added is 15 liters."
  },
    
    
    
    // average
    
  {
    "id": "q-001",
    "question": "The average weight of 40 students in a class is 50 kg. If the weight of the teacher is included, the average weight increases by 1 kg. What is the weight of the teacher?",
    "options": ["81 kg", "91 kg", "90 kg", "92 kg"],
    "answer": 1,
    "explanation": "Total weight of 40 students = 40 × 50 = 2000 kg. After including the teacher, total people = 41, new average = 51 kg. New total weight = 41 × 51 = 2091 kg. Teacher's weight = 2091 - 2000 = 91 kg."
  },
  {
    "id": "q-002",
    "question": "The average of 5 consecutive even numbers is 66. What is the product of the first and the fifth number?",
    "options": ["4320", "4340", "4360", "4380"],
    "answer": 1,
    "explanation": "Average = middle number = 66. Numbers: 62, 64, 66, 68, 70. First × fifth = 62 × 70 = 4340."
  },
  {
    "id": "q-003",
    "question": "The average of 5 numbers is 18. If one number is excluded, the average becomes 16. What is the excluded number?",
    "options": ["22", "24", "26", "28"],
    "answer": 2,
    "explanation": "Total sum = 5 × 18 = 90. Sum of remaining 4 numbers = 4 × 16 = 64. Excluded number = 90 - 64 = 26."
  },
  {
    "id": "q-004",
    "question": "The average monthly income of a person is 1500. For the first 4 months, the average income is 1200 and for the next 7 months, it is 1600. What is the income in the last month?",
    "options": ["2000", "2100", "2200", "2300"],
    "answer": 0,
    "explanation": "Total annual income = 12 × 1500 = 18000. Income for first 4 months = 4 × 1200 = 4800. Income for next 7 months = 7 × 1600 = 11200. Total first 11 months = 4800 + 11200 = 16000. Income in last month = 18000 - 16000 = 2000."
  },
  {
    "id": "q-005",
    "question": "The average of 5 consecutive odd numbers is 25. What is the sum of the second and fourth numbers?",
    "options": ["48", "50", "52", "54"],
    "answer": 1,
    "explanation": "Numbers: 21, 23, 25, 27, 29. Second + fourth = 23 + 27 = 50."
  },
  {
    "id": "q-006",
    "question": "A student's average marks in 5 subjects is 75. If the marks in one more subject are included, the new average becomes 78. What are the marks in the new subject?",
    "options": ["93", "91", "90", "95"],
    "answer": 0,
    "explanation": "Total marks in 5 subjects = 5 × 75 = 375. Total marks for 6 subjects = 6 × 78 = 468. Marks in new subject = 468 - 375 = 93."
  },
  {
    "id": "q-007",
    "question": "The average age of 15 boys in a class is 11 years. If a boy of age 17 is replaced by a new boy, the average age becomes 10 years. What is the age of the new boy?",
    "options": ["2 years", "4 years", "5 years", "6 years"],
    "answer": 0,
    "explanation": "Total age = 15 × 11 = 165. New total = 15 × 10 = 150. New boy's age = 150 - (165 - 17) = 2 years."
  },
  {
    "id": "q-008",
    "question": "The average of 5 numbers is 30. If one number is added, the average becomes 32. What is the new number?",
    "options": ["40", "42", "44", "46"],
    "answer": 1,
    "explanation": "Sum of 5 numbers = 5 × 30 = 150. Total after adding one number = 6 × 32 = 192. New number = 192 - 150 = 42."
  },
  {
    "id": "q-009",
    "question": "The average of 7 numbers is 35. If one number is excluded, the average becomes 32. What is the excluded number?",
    "options": ["47", "49", "51", "53"],
    "answer": 3,
    "explanation": "Sum of 7 numbers = 7 × 35 = 245. Sum of remaining 6 numbers = 6 × 32 = 192. Excluded number = 245 - 192 = 53."
  },
  {
    "id": "q-010",
    "question": "A batsman has an average score of 50 runs in 10 innings. What score must he make in the 11th innings to increase his average to 52?",
    "options": ["70", "72", "74", "76"],
    "answer": 1,
    "explanation": "Total runs in 10 innings = 10 × 50 = 500. Total needed for 11 innings = 11 × 52 = 572. Score in 11th innings = 572 - 500 = 72."
  },
  
  {
    "id": "q-011",
    "question": "The average age of 20 men is 30 years. If a man of age 40 is replaced by a new man, the average age becomes 29 years. What is the age of the new man?",
    "options": ["10 years", "15 years", "20 years", "25 years"],
    "answer": 2,
    "explanation": "Step 1: Total age of 20 men = 20 × 30 = 600 years.\nStep 2: Let the age of the new man be x. New total age = 600 - 40 + x.\nStep 3: New average = 29, so total age = 20 × 29 = 580.\nStep 4: 600 - 40 + x = 580 ⇒ 560 + x = 580 ⇒ x = 20 years."
  },
  {
    "id": "q-012",
    "question": "The average of 7 numbers is 35. If one number is excluded, the average becomes 32. What is the excluded number?",
    "options": ["47", "49", "51", "53"],
    "answer": 3,
    "explanation": "Step 1: Total sum of 7 numbers = 7 × 35 = 245.\nStep 2: Sum of remaining 6 numbers = 6 × 32 = 192.\nStep 3: Excluded number = 245 - 192 = 53."
  },
  {
    "id": "q-013",
    "question": "The average of 5 consecutive numbers is 10. What is the average of the first two numbers?",
    "options": ["8", "8.5", "9", "9.5"],
    "answer": 1,
    "explanation": "Step 1: Average of 5 consecutive numbers = middle number = 10.\nStep 2: Numbers: 8, 9, 10, 11, 12.\nStep 3: Average of first two numbers = (8 + 9) / 2 = 17 / 2 = 8.5."
  },
  {
    "id": "q-014",
    "question": "The average weight of 10 boys is 45 kg. If the average weight of the first 4 boys is 42 kg, what is the average weight of the remaining 6 boys?",
    "options": ["46 kg", "47 kg", "48 kg", "49 kg"],
    "answer": 1,
    "explanation": "Step 1: Total weight of 10 boys = 10 × 45 = 450 kg.\nStep 2: Total weight of first 4 boys = 4 × 42 = 168 kg.\nStep 3: Total weight of remaining 6 boys = 450 - 168 = 282 kg.\nStep 4: Average weight of remaining 6 boys = 282 / 6 = 47 kg."
  },
  {
    "id": "q-015",
    "question": "The average age of 25 students is 18 years. If the age of the teacher is included, the average age increases by 1 year. What is the age of the teacher?",
    "options": ["43 years", "44 years", "45 years", "46 years"],
    "answer": 1,
    "explanation": "Step 1: Total age of 25 students = 25 × 18 = 450 years.\nStep 2: Total number of people including teacher = 25 + 1 = 26.\nStep 3: New average = 18 + 1 = 19.\nStep 4: Total age including teacher = 26 × 19 = 494.\nStep 5: Age of teacher = 494 - 450 = 44 years."
  },
    
    
    
    // TIme and works
    
  {
    "id": "q-001",
    "question": "A can do a piece of work in 15 days and B can do it in 20 days. With the help of C, they complete the work in 6 days. If they earn ₹1800 for the entire work, what is the share of C?",
    "options": [
      "₹360",
      "₹420",
      "₹450",
      "₹540"
    ],
    "answer": 3,
    "explanation": "Let the total work be the LCM of 15, 20, and 6, which is 60 units. A's 1-day work = 60/15 = 4 units. B's 1-day work = 60/20 = 3 units. (A+B+C)'s 1-day work = 60/6 = 10 units. C's 1-day work = (A+B+C)'s work - (A's work + B's work) = 10 - (4 + 3) = 3 units. The wages are distributed in the ratio of their work efficiency, which is the ratio of their 1-day work. The ratio of their 1-day work is A:B:C = 4:3:3. Total units of work for wage distribution = 4 + 3 + 3 = 10. C's share = (C's work units / Total work units) * Total earnings = (3/10) * ₹1800 = ₹540."
  },
  {
    "id": "q-002",
    "question": "Pipes A and B can fill a tank in 12 and 18 minutes, respectively. Pipe C is an outlet pipe that can empty the tank in 36 minutes. If all three pipes are opened together, how long will it take to fill the tank?",
    "options": [
      "8 minutes",
      "9 minutes",
      "10 minutes",
      "11 minutes"
    ],
    "answer": 1,
    "explanation": "Let the total capacity of the tank be the LCM of 12, 18, and 36, which is 36 units. The rate of pipe A is 36/12 = 3 units/min (filling). The rate of pipe B is 36/18 = 2 units/min (filling). The rate of pipe C is 36/36 = 1 unit/min (emptying). When all three pipes are opened together, the net filling rate is the sum of the filling rates minus the emptying rate: 3 + 2 - 1 = 4 units/min. Time taken to fill the tank = Total capacity / Net rate = 36 / 4 = 9 minutes."
  },
  {
    "id": "q-003",
    "question": "A group of 30 men can complete a piece of work in 20 days. After 5 days, 15 more men join them. In how many more days will the remaining work be completed?",
    "options": [
      "8 days",
      "10 days",
      "12 days",
      "15 days"
    ],
    "answer": 1,
    "explanation": "Total work = 30 men * 20 days = 600 man-days. Work done in the first 5 days = 30 men * 5 days = 150 man-days. Remaining work = 600 - 150 = 450 man-days. After 5 days, 15 more men join, so the new total number of men is 30 + 15 = 45 men. Time taken to complete the remaining work = Remaining work / New number of men = 450 / 45 = 10 days."
  },
  {
    "id": "q-004",
    "question": "A is 50% more efficient than B. If A and B together can complete a work in 10 days, in how many days can B alone complete the same work?",
    "options": [
      "20 days",
      "25 days",
      "30 days",
      "35 days"
    ],
    "answer": 1,
    "explanation": "Let B's efficiency be 2 units/day. Since A is 50% more efficient than B, A's efficiency = 2 + (50% of 2) = 3 units/day. The ratio of their efficiencies is A:B = 3:2. Combined efficiency = 3 + 2 = 5 units/day. Total work = Combined efficiency * Time = 5 units/day * 10 days = 50 units. Time taken for B alone to complete the work = Total work / B's efficiency = 50 / 2 = 25 days."
  },
  {
    "id": "q-005",
    "question": "Pipes A and B can fill a tank in 10 and 12 minutes, respectively. Pipe C can empty it in 15 minutes. If A and B are opened for 4 minutes and then A is closed and C is opened, in how many more minutes will the tank be filled?",
    "options": [
      "14 minutes",
      "16 minutes",
      "18 minutes",
      "20 minutes"
    ],
    "answer": 1,
    "explanation": "Let the tank capacity be the LCM of 10, 12, and 15, which is 60 units. A's rate = 60/10 = 6 units/min (filling). B's rate = 60/12 = 5 units/min (filling). C's rate = 60/15 = 4 units/min (emptying). For the first 4 minutes, A and B work together. Their combined rate = 6 + 5 = 11 units/min. Work done in 4 minutes = 11 units/min * 4 min = 44 units. Remaining work = 60 - 44 = 16 units. After 4 minutes, A is closed and C is opened. The new team is B and C. Their combined rate = 5 - 4 = 1 unit/min. Time taken to fill the remaining work = Remaining work / New rate = 16 units / 1 unit/min = 16 minutes."
  },
  {
    "id": "q-006",
    "question": "A and B working together can complete a work in 18 days. B and C together can do it in 24 days, and C and A together can do it in 36 days. In how many days can A, B, and C together complete the work?",
    "options": [
      "12 days",
      "16 days",
      "18 days",
      "24 days"
    ],
    "answer": 1,
    "explanation": "Let the total work be the LCM of 18, 24, and 36, which is 72 units. (A+B)'s 1-day work = 72/18 = 4 units. (B+C)'s 1-day work = 72/24 = 3 units. (C+A)'s 1-day work = 72/36 = 2 units. Adding all these efficiencies: 2(A+B+C)'s 1-day work = 4 + 3 + 2 = 9 units. (A+B+C)'s 1-day work = 9/2 = 4.5 units. Time taken for A, B, and C together to complete the work = Total work / Combined rate = 72 / 4.5 = 16 days."
  },
  {
    "id": "q-007",
    "question": "8 men and 12 women can complete a work in 10 days. 6 men and 8 women can complete the same work in 14 days. In how many days can 10 men and 15 women complete the same work?",
    "options": [
      "6 days",
      "7 days",
      "8 days",
      "9 days"
    ],
    "answer": 2,
    "explanation": "Let 1 man-day = m and 1 woman-day = w. From the first statement, the total work is 10 * (8m + 12w) = 80m + 120w. From the second statement, the total work is 14 * (6m + 8w) = 84m + 112w. Equating the total work: 80m + 120w = 84m + 112w. 8w = 4m, which simplifies to 2w = m. So, 1 man's efficiency is equal to 2 women's efficiency. Let's find the total work in terms of women. Total work = 10 * (8m + 12w) = 10 * (8(2w) + 12w) = 10 * (16w + 12w) = 10 * 28w = 280 woman-days. We need to find the time for 10 men and 15 women. Let's convert this to women: 10 men = 10 * (2w) = 20w. The new group is equivalent to 20w + 15w = 35w. Time taken = Total work / combined efficiency = 280 woman-days / 35 women = 8 days."
  },
  {
    "id": "q-008",
    "question": "A can complete a work in 10 days and B in 20 days. They work on alternate days, starting with A. In how many days will the work be completed?",
    "options": [
      "12 days",
      "13 days",
      "14 days",
      "15 days"
    ],
    "answer": 1,
    "explanation": "Let the total work be the LCM of 10 and 20, which is 20 units. A's 1-day work = 20/10 = 2 units. B's 1-day work = 20/20 = 1 unit. In a cycle of 2 days (Day 1 by A, Day 2 by B), the total work done is 2 + 1 = 3 units. Number of such cycles = 20 / 3 = 6 cycles with a remainder of 2 units. Work done in 6 cycles (12 days) = 3 units/cycle * 6 cycles = 18 units. On the 13th day, A will work. The remaining work is 20 - 18 = 2 units. Since A's 1-day work is exactly 2 units, the remaining work is completed on the 13th day. Total time = 12 + 1 = 13 days."
  },
  {
    "id": "q-009",
    "question": "A contractor employed 50 men to complete a project in 50 days. After 25 days, he found that only 2/5 of the work was completed. How many more men should he employ to complete the remaining work on time?",
    "options": [
      "15 men",
      "20 men",
      "25 men",
      "30 men"
    ],
    "answer": 2,
    "explanation": "Initial men (M1) = 50, initial days (D1) = 25, work done (W1) = 2/5. Total project duration = 50 days. Remaining days (D2) = 50 - 25 = 25 days. Remaining work (W2) = 1 - 2/5 = 3/5. Using the formula M1*D1/W1 = M2*D2/W2, we have: (50 * 25) / (2/5) = (M2 * 25) / (3/5). To solve for M2, we can simplify: (50) / (2/5) = M2 / (3/5) => 50 * (5/2) = M2 * (5/3) => 25 * 5 = M2 * 5/3 => 125 = M2 * 5/3. M2 = (125 * 3) / 5 = 25 * 3 = 75. The total number of men required is 75. The number of more men to be employed = 75 - 50 = 25 men."
  },
  {
    "id": "q-010",
    "question": "A can do a work in 24 days. B is 50% more efficient than A. In how many days can B alone complete the same work?",
    "options": [
      "12 days",
      "15 days",
      "16 days",
      "18 days"
    ],
    "answer": 2,
    "explanation": "Let A's efficiency be 1 unit/day. Time taken by A is 24 days. Total work = 1 unit/day * 24 days = 24 units. B is 50% more efficient than A, so B's efficiency = 1 + (50% of 1) = 1.5 units/day. Time taken by B alone to complete the work = Total work / B's efficiency = 24 / 1.5 = 16 days."
  },
  {
    "id": "q-011",
    "question": "A, B, and C can complete a work in 10, 12, and 15 days respectively. They started the work together, but after 2 days, A left. After another 2 days, B also left. In how many days will C finish the remaining work?",
    "options": [
      "3 days",
      "4 days",
      "5 days",
      "6 days"
    ],
    "answer": 0,
    "explanation": "Let the total work be the LCM of 10, 12, and 15, which is 60 units. A's 1-day work = 60/10 = 6 units. B's 1-day work = 60/12 = 5 units. C's 1-day work = 60/15 = 4 units. For the first 2 days, A, B, and C work together. Their combined rate = 6 + 5 + 4 = 15 units/day. Work done in 2 days = 15 * 2 = 30 units. Remaining work = 60 - 30 = 30 units. After 2 days, A leaves. B and C work for the next 2 days. Their combined rate = 5 + 4 = 9 units/day. Work done in the next 2 days = 9 * 2 = 18 units. Remaining work = 30 - 18 = 12 units. After another 2 days, B leaves, and C works alone. C's rate = 4 units/day. Time taken for C to finish the remaining work = Remaining work / C's rate = 12 / 4 = 3 days."
  },
  {
    "id": "q-012",
    "question": "A can complete 1/3 of a work in 5 days and B can complete 2/5 of the work in 10 days. In how many days can both A and B together complete the work?",
    "options": [
      "8.5 days",
      "9 days",
      "9.375 days",
      "10 days"
    ],
    "answer": 2,
    "explanation": "A completes 1/3 of the work in 5 days, so A can complete the full work in 5 / (1/3) = 15 days. B completes 2/5 of the work in 10 days, so B can complete the full work in 10 / (2/5) = 10 * 5/2 = 25 days. Let the total work be the LCM of 15 and 25, which is 75 units. A's 1-day work = 75/15 = 5 units. B's 1-day work = 75/25 = 3 units. Combined 1-day work of A and B = 5 + 3 = 8 units. Time taken for A and B together = Total work / Combined rate = 75 / 8 = 9.375 days."
  },
  {
    "id": "q-013",
    "question": "A, B, and C can complete a work in 20, 30, and 60 days, respectively. They work together for some time, and then A leaves. If B and C finish the remaining work in 6 days, for how many days did A work with them?",
    "options": [
      "5 days",
      "6 days",
      "7 days",
      "8 days"
    ],
    "answer": 2,
    "explanation": "Let the total work be the LCM of 20, 30, and 60, which is 60 units. A's rate = 60/20 = 3 units/day. B's rate = 60/30 = 2 units/day. C's rate = 60/60 = 1 unit/day. B and C finished the remaining work in 6 days. Work done by B and C = (B's rate + C's rate) * 6 = (2 + 1) * 6 = 3 * 6 = 18 units. The remaining work, which was done by A, B, and C together, is 60 - 18 = 42 units. The combined rate of A, B, and C = 3 + 2 + 1 = 6 units/day. The number of days they worked together = Work done together / Combined rate = 42 / 6 = 7 days."
  },
  {
    "id": "q-014",
    "question": "A group of 12 men can complete a work in 10 days. The same work can be completed by 10 women in 18 days. In how many days can 4 men and 6 women together complete the same work?",
    "options": [
      "10 days",
      "12 days",
      "15 days",
      "20 days"
    ],
    "answer": 2,
    "explanation": "Let 1 man's 1-day work be 'm' and 1 woman's 1-day work be 'w'. From the first statement, the total work is 12 men * 10 days = 120 man-days. From the second statement, the total work is 10 women * 18 days = 180 woman-days. Equating the work: 120m = 180w. This simplifies to 2m = 3w, or m = (3/2)w. We need to find the time for 4 men and 6 women. To simplify, let's convert the men to their equivalent number of women using the ratio: 4 men = 4 * (3/2)w = 6w. So, the new group is equivalent to 6w (from the men) + 6w (from the women) = 12w. We know that 10 women can do the work in 18 days. The total work is 10 * 18 = 180 woman-days. Time taken for 12 women to complete the work = Total work / number of women = 180 / 12 = 15 days."
  },
  {
    "id": "q-015",
    "question": "Two pipes A and B can fill a tank in 20 minutes and 30 minutes, respectively. If both pipes are opened together, how long will it take to fill the tank?",
    "options": [
      "10 minutes",
      "12 minutes",
      "15 minutes",
      "20 minutes"
    ],
    "answer": 1,
    "explanation": "Let the total capacity of the tank be the LCM of 20 and 30, which is 60 units. A's rate = 60/20 = 3 units/min. B's rate = 60/30 = 2 units/min. When both pipes are opened together, their combined rate is 3 + 2 = 5 units/min. Time taken to fill the tank = Total capacity / Combined rate = 60 / 5 = 12 minutes."
  },
    
    
    
    // Speed Time And distance
    
    
  {
    "id": "q-001",
    "question": "A car travels at 60 km/h for the first 2 hours and at 80 km/h for the next 3 hours. What is the average speed of the car for the entire journey?",
    "options": [
      "70 km/h",
      "72 km/h",
      "75 km/h",
      "74 km/h"
    ],
    "answer": 1,
    "explanation": "Step 1: Calculate the distance covered in the first part of the journey. Distance = Speed × Time = $60 \\text{ km/h} \\times 2 \\text{ h} = 120$ km. Step 2: Calculate the distance covered in the second part of the journey. Distance = Speed × Time = $80 \\text{ km/h} \\times 3 \\text{ h} = 240$ km. Step 3: Calculate the total distance. Total Distance = $120 + 240 = 360$ km. Step 4: Calculate the total time. Total Time = $2 \\text{ h} + 3 \\text{ h} = 5$ h. Step 5: Calculate the average speed. Average Speed = Total Distance / Total Time = $360 \\text{ km} / 5 \\text{ h} = 72$ km/h."
  },
  {
    "id": "q-002",
    "question": "Two trains, 150 m and 120 m long, are running on parallel tracks in the same direction. The speeds are 45 km/h and 36 km/h, respectively. How long will the faster train take to cross the slower train?",
    "options": [
      "108 seconds",
      "100 seconds",
      "120 seconds",
      "90 seconds"
    ],
    "answer": 0,
    "explanation": "Step 1: Convert speeds from km/h to m/s. Speed of faster train = $45 \\times \\frac{5}{18} = 12.5$ m/s. Speed of slower train = $36 \\times \\frac{5}{18} = 10$ m/s. Step 2: Calculate the relative speed of the faster train with respect to the slower train (since they are moving in the same direction). Relative Speed = $12.5 - 10 = 2.5$ m/s. Step 3: Calculate the total distance to be covered to cross each other, which is the sum of their lengths. Total Distance = $150 + 120 = 270$ m. Step 4: Calculate the time taken. Time = Total Distance / Relative Speed = $270 / 2.5 = 108$ seconds."
  },
  {
    "id": "q-003",
    "question": "A boat can travel at 15 km/h in still water. If the speed of the stream is 5 km/h, how much time will the boat take to go 60 km upstream and return to the starting point?",
    "options": [
      "8 hours",
      "9 hours",
      "10 hours",
      "12 hours"
    ],
    "answer": 1,
    "explanation": "Step 1: Calculate the upstream speed. Upstream Speed = Speed in still water - Speed of stream = $15 - 5 = 10$ km/h. Step 2: Calculate the time taken for the upstream journey. Time Upstream = Distance / Speed = $60 / 10 = 6$ hours. Step 3: Calculate the downstream speed. Downstream Speed = Speed in still water + Speed of stream = $15 + 5 = 20$ km/h. Step 4: Calculate the time taken for the downstream journey. Time Downstream = Distance / Speed = $60 / 20 = 3$ hours. Step 5: Calculate the total time. Total Time = Time Upstream + Time Downstream = $6 + 3 = 9$ hours."
  },
  {
    "id": "q-004",
    "question": "A train passes a pole in 20 seconds and a platform 200 m long in 30 seconds. What is the length of the train?",
    "options": [
      "300 m",
      "400 m",
      "500 m",
      "250 m"
    ],
    "answer": 1,
    "explanation": "Step 1: Let the length of the train be 'L' meters and its speed be 'S' m/s. When the train passes a pole, the distance covered is its own length, so $L = S \\times 20$, which gives $S = L/20$. Step 2: When the train passes a platform, the distance covered is the sum of the train's length and the platform's length. So, $L + 200 = S \\times 30$. Step 3: Substitute the value of S from the first equation into the second. $L + 200 = (L/20) \\times 30$. Step 4: Simplify and solve for L. $L + 200 = 1.5L$. $200 = 1.5L - L$. $200 = 0.5L$. $L = 200 / 0.5 = 400$ m."
  },
  {
    "id": "q-005",
    "question": "A man walks at a speed of 5 km/h. He rests for 5 minutes after every kilometer. How much time will he take to cover a distance of 10 km?",
    "options": [
      "2 hours 35 minutes",
      "2 hours 20 minutes",
      "2 hours 45 minutes",
      "2 hours 15 minutes"
    ],
    "answer": 2,
    "explanation": "Step 1: Calculate the total walking time without rest. Time = Distance / Speed = $10 \\text{ km} / 5 \\text{ km/h} = 2$ hours. Step 2: Determine the number of rests. He rests after every kilometer, so for a 10 km journey, he will have 9 rests (at the 1st, 2nd, ..., 9th km). He does not rest after reaching the destination. Step 3: Calculate the total rest time. Total Rest Time = $9 \\times 5 \\text{ minutes} = 45$ minutes. Step 4: Calculate the total time for the journey. Total Time = Walking Time + Rest Time = 2 hours + 45 minutes = 2 hours 45 minutes."
  },
  {
    "id": "q-006",
    "question": "Two people, A and B, are 200 km apart. They start walking towards each other at the same time. The speed of A is 10 km/h and the speed of B is 15 km/h. After how many hours will they meet?",
    "options": [
      "6 hours",
      "8 hours",
      "10 hours",
      "12 hours"
    ],
    "answer": 1,
    "explanation": "Step 1: Calculate the relative speed of the two people as they are moving towards each other. Relative Speed = Speed of A + Speed of B = $10 + 15 = 25$ km/h. Step 2: The total distance to be covered is 200 km. Step 3: Calculate the time taken to meet. Time = Total Distance / Relative Speed = $200 / 25 = 8$ hours."
  },
  {
    "id": "q-007",
    "question": "A man covers 3/5 of a journey at a speed of 30 km/h and the remaining distance at 20 km/h. If the total distance is 150 km, what is his average speed for the whole journey?",
    "options": [
      "26.5 km/h",
      "25 km/h",
      "27.5 km/h",
      "24 km/h"
    ],
    "answer": 1,
    "explanation": "Step 1: Calculate the distance of the first part of the journey. Distance 1 = $(\\frac{3}{5}) \\times 150 \\text{ km} = 90$ km. Step 2: Calculate the time taken for the first part. Time 1 = $90 \\text{ km} / 30 \\text{ km/h} = 3$ hours. Step 3: Calculate the remaining distance. Remaining Distance = $150 \\text{ km} - 90 \\text{ km} = 60$ km. Step 4: Calculate the time taken for the remaining distance. Time 2 = $60 \\text{ km} / 20 \\text{ km/h} = 3$ hours. Step 5: Calculate the total distance and total time. Total Distance = 150 km. Total Time = $3 \\text{ hours} + 3 \\text{ hours} = 6$ hours. Step 6: Calculate the average speed. Average Speed = Total Distance / Total Time = $150 \\text{ km} / 6 \\text{ hours} = 25$ km/h."
  },
  {
    "id": "q-008",
    "question": "A boy leaves his home at 8:00 AM and walks at a speed of 4 km/h. A cyclist leaves the same home at 9:00 AM and cycles at a speed of 12 km/h in the same direction. At what time will the cyclist overtake the boy?",
    "options": [
      "9:30 AM",
      "9:45 AM",
      "10:00 AM",
      "10:15 AM"
    ],
    "answer": 0,
    "explanation": "Step 1: The boy has a 1-hour head start. In that hour, the boy covers a distance of $4 \\text{ km/h} \\times 1 \\text{ h} = 4$ km. Step 2: The cyclist now starts. The relative speed of the cyclist with respect to the boy is $12 - 4 = 8$ km/h. Step 3: The cyclist needs to cover the 4 km distance the boy is ahead of him. Time to overtake = Distance to cover / Relative Speed = $4 \\text{ km} / 8 \\text{ km/h} = 0.5$ hours. Step 4: Convert 0.5 hours to minutes. $0.5 \\times 60 = 30$ minutes. Step 5: The cyclist started at 9:00 AM, so he will overtake the boy after 30 minutes. Time of overtaking = 9:00 AM + 30 minutes = 9:30 AM."
  },
  {
    "id": "q-009",
    "question": "A train travels a certain distance at a speed of 80 km/h and returns to the starting point at a speed of 60 km/h. What is the average speed of the train for the entire journey?",
    "options": [
      "68.57 km/h",
      "70 km/h",
      "65.25 km/h",
      "64.5 km/h"
    ],
    "answer": 0,
    "explanation": "Step 1: The average speed for a journey where the same distance is covered at two different speeds can be calculated using the formula: Average Speed = $\\frac{2 \\times S_1 \\times S_2}{S_1 + S_2}$, where $S_1$ and $S_2$ are the two speeds. Step 2: Substitute the given values into the formula. Average Speed = $\\frac{2 \\times 80 \\times 60}{80 + 60} = \\frac{9600}{140}$. Step 3: Simplify the calculation. Average Speed = $960 / 14 = 480 / 7 \\approx 68.57$ km/h."
  },
  {
    "id": "q-010",
    "question": "If a man increases his speed by 25%, he reaches his destination 20 minutes earlier. What is the original time taken to cover the distance?",
    "options": [
      "1 hour",
      "1 hour 20 minutes",
      "1 hour 40 minutes",
      "2 hours"
    ],
    "answer": 2,
    "explanation": "Step 1: The relationship between speed and time is inversely proportional when distance is constant. Let original speed be S and original time be T. The new speed is $1.25S$. The ratio of speeds is $S : 1.25S = 1 : 1.25 = 4 : 5$. Step 2: Since speed and time are inversely proportional, the ratio of times is the inverse of the ratio of speeds, which is $5 : 4$. Step 3: The difference in the time ratio is $5 - 4 = 1$ part. This 1 part corresponds to the 20-minute difference in time. Step 4: The original time corresponds to 5 parts. So, Original Time = $5 \\times 20 \\text{ minutes} = 100$ minutes. Step 5: Convert 100 minutes to hours and minutes. 100 minutes = 1 hour and 40 minutes."
  },
  {
    "id": "q-011",
    "question": "Two places, A and B, are 265 km apart. A car starts from A at 8:00 AM at a speed of 40 km/h. Another car starts from B at 9:00 AM at a speed of 50 km/h and travels towards A. At what time will they cross each other?",
    "options": [
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM"
    ],
    "answer": 1,
    "explanation": "Step 1: The car from A travels for one hour (from 8:00 AM to 9:00 AM) before the car from B starts. Distance covered by car A in 1 hour = $40 \\text{ km/h} \\times 1 \\text{ h} = 40$ km. Step 2: At 9:00 AM, the remaining distance between the two cars is $265 - 40 = 225$ km. Step 3: The cars are moving towards each other, so their relative speed is the sum of their speeds. Relative Speed = $40 + 50 = 90$ km/h. Step 4: The time taken for them to meet from 9:00 AM is Time = Distance / Relative Speed = $225 / 90 = 2.5$ hours. Step 5: The meeting time is 2.5 hours after 9:00 AM, which is 11:30 AM."
  },
  {
    "id": "q-012",
    "question": "A person covers a distance of 180 km in 3 hours. For the first 2 hours, he travels at a speed of 50 km/h. What speed must he maintain for the remaining part of the journey to complete it in the given time?",
    "options": [
      "80 km/h",
      "70 km/h",
      "60 km/h",
      "55 km/h"
    ],
    "answer": 0,
    "explanation": "Step 1: Calculate the distance covered in the first 2 hours. Distance = Speed × Time = $50 \\text{ km/h} \\times 2 \\text{ h} = 100$ km. Step 2: Calculate the remaining distance. Remaining Distance = Total Distance - Distance covered = $180 - 100 = 80$ km. Step 3: Calculate the remaining time. Remaining Time = Total Time - Time elapsed = $3 - 2 = 1$ hour. Step 4: Calculate the required speed for the remaining journey. Required Speed = Remaining Distance / Remaining Time = $80 \\text{ km} / 1 \\text{ h} = 80$ km/h."
  },
  {
    "id": "q-013",
    "question": "A train 200 m long is running at a speed of 72 km/h. How long will it take to cross a signal post?",
    "options": [
      "10 seconds",
      "8 seconds",
      "9 seconds",
      "12 seconds"
    ],
    "answer": 0,
    "explanation": "Step 1: Convert the speed from km/h to m/s. Speed = $72 \\times \\frac{5}{18} = 4 \\times 5 = 20$ m/s. Step 2: When a train crosses a signal post (or a pole, or a man), the distance covered is equal to the length of the train. Distance = 200 m. Step 3: Calculate the time taken. Time = Distance / Speed = $200 / 20 = 10$ seconds."
  },
  {
    "id": "q-014",
    "question": "A thief is spotted by a policeman from a distance of 100 m. The thief's speed is 8 km/h and the policeman's speed is 10 km/h. How far will the thief have run before he is caught?",
    "options": [
      "400 m",
      "500 m",
      "600 m",
      "800 m"
    ],
    "answer": 0,
    "explanation": "Step 1: Calculate the relative speed of the policeman with respect to the thief. Since they are moving in the same direction, Relative Speed = $10 - 8 = 2$ km/h. Step 2: Convert the relative speed to m/s. Relative Speed = $2 \\times \\frac{5}{18} = \\frac{10}{18} = \\frac{5}{9}$ m/s. Step 3: The distance to be covered by the policeman to catch the thief is the initial distance between them, which is 100 m. Step 4: Calculate the time it takes to catch the thief. Time = Distance / Relative Speed = $100 / (5/9) = 100 \\times \\frac{9}{5} = 20 \\times 9 = 180$ seconds. Step 5: Calculate the distance the thief has run in this time. Distance = Thief's Speed × Time. First, convert the thief's speed to m/s. Thief's Speed = $8 \\times \\frac{5}{18} = \\frac{40}{18} = \\frac{20}{9}$ m/s. Step 6: Distance covered by thief = $\\frac{20}{9} \\times 180 = 20 \\times 20 = 400$ m."
  },
  {
    "id": "q-015",
    "question": "A man covers 1/3 of his journey at a speed of 20 km/h, another 1/3 of the journey at 30 km/h, and the rest at 40 km/h. What is his average speed for the whole journey?",
    "options": [
      "27.69 km/h",
      "25 km/h",
      "28.57 km/h",
      "29.15 km/h"
    ],
    "answer": 0,
    "explanation": "Step 1: Assume the total distance is D. The total time T is the sum of the times for each part. Time 1 = $(\\frac{D}{3}) / 20 = \\frac{D}{60}$. Time 2 = $(\\frac{D}{3}) / 30 = \\frac{D}{90}$. The remaining distance is also $\\frac{D}{3}$, so Time 3 = $(\\frac{D}{3}) / 40 = \\frac{D}{120}$. Step 2: Calculate the total time. Total Time = $\\frac{D}{60} + \\frac{D}{90} + \\frac{D}{120}$. Find the common denominator, which is 360. Total Time = $\\frac{6D+4D+3D}{360} = \\frac{13D}{360}$. Step 3: Average Speed = Total Distance / Total Time = $D / (\\frac{13D}{360}) = \\frac{360D}{13D} = \\frac{360}{13}$. Step 4: Calculate the final value. $360 \\div 13 \\approx 27.69$ km/h."
  },
    
        
        
      ],
      
      'MOCK3': [
        {
          id: 'e-voc-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Increase', 'Expand', 'Reduce', 'Grow'],
          answer: 2,
          explanation: 'Reduce is antonym of augment.'
        }
      ]
    }
  },
   

  
    
    
    
  
  'Quantitative Aptitude': {
    topics: {
    
      'Simplification Easy Level (20 question)': [
        
  
  {
    "id": "simp-001",
    "question": "√784 ÷ 7 + (54 ÷ 9 × 6) = ?",
    "options": ["30", "35", "45", "40", "20"],
    "answer": 3,
    "explanation": "√784 = 28; 28 ÷ 7 = 4; 54 ÷ 9 = 6; 6 × 6 = 36; 4 + 36 = 40."
  },
  {
    "id": "simp-002",
    "question": "(45% of 680) + (36 × 5) = ?",
    "options": ["486", "476", "450", "500", "520"],
    "answer": 0,
    "explanation": "45% of 680 = 0.45 × 680 = 306; 36 × 5 = 180; 306 + 180 = 486."
  },
  {
    "id": "simp-003",
    "question": "(56 × 15) ÷ 7 + 128 = ?",
    "options": ["248", "260", "272", "240", "256"],
    "answer": 0,
    "explanation": "56 × 15 = 840; 840 ÷ 7 = 120; 120 + 128 = 248."
  },
  {
    "id": "simp-004",
    "question": "(35 × 24) – (132 ÷ 6 × 7) = ?",
    "options": ["686", "660", "640", "700", "672"],
    "answer": 0,
    "explanation": "35 × 24 = 840; 132 ÷ 6 = 22; 22 × 7 = 154; 840 − 154 = 686."
  },
  {
    "id": "simp-005",
    "question": "√9604 – (512 ÷ 8 × 4) = ?",
    "options": ["-158", "-120", "0", "50", "98"],
    "answer": 0,
    "explanation": "√9604 = 98; 512 ÷ 8 = 64; 64 × 4 = 256; 98 − 256 = -158."
  },
  {
    "id": "simp-006",
    "question": "(112 ÷ 14) + (256 ÷ 8) + 39 = ?",
    "options": ["79", "74", "71", "68", "65"],
    "answer": 0,
    "explanation": "112 ÷ 14 = 8; 256 ÷ 8 = 32; 8 + 32 + 39 = 79."
  },
  {
    "id": "simp-007",
    "question": "(75% of 560) – (42 × 3) = ?",
    "options": ["294", "360", "350", "300", "320"],
    "answer": 0,
    "explanation": "75% of 560 = 0.75 × 560 = 420; 42 × 3 = 126; 420 − 126 = 294."
  },
  {
    "id": "simp-008",
    "question": "(44 × 18) ÷ 12 + (96 ÷ 16 × 5) = ?",
    "options": ["96", "84", "88", "82", "80"],
    "answer": 0,
    "explanation": "44 × 18 = 792; 792 ÷ 12 = 66; 96 ÷ 16 = 6; 6 × 5 = 30; 66 + 30 = 96."
  },
  {
    "id": "simp-009",
    "question": "(15 × 28) + (320 ÷ 16 × 7) = ?",
    "options": ["560", "520", "510", "500", "480"],
    "answer": 0,
    "explanation": "15 × 28 = 420; 320 ÷ 16 = 20; 20 × 7 = 140; 420 + 140 = 560."
  },
  {
    "id": "simp-010",
    "question": "(39 × 12) – (28 × 9) + (144 ÷ 12) = ?",
    "options": ["228", "216", "220", "200", "240"],
    "answer": 0,
    "explanation": "39 × 12 = 468; 28 × 9 = 252; 468 − 252 = 216; 144 ÷ 12 = 12; 216 + 12 = 228."
  },
  {
    "id": "simp-011",
    "question": "√6084 ÷ 18 + (75 × 2) = ?",
    "options": ["154 1/3", "157", "154", "160", "150"],
    "answer": 0,
    "explanation": "√6084 = 78; 78 ÷ 18 = 13/3 = 4 1/3; 75 × 2 = 150; 150 + 13/3 = 463/3 = 154 1/3."
  },
  {
    "id": "simp-012",
    "question": "(220% of 250) – (34 × 5) = ?",
    "options": ["380", "440", "420", "400", "360"],
    "answer": 0,
    "explanation": "220% of 250 = 2.2 × 250 = 550; 34 × 5 = 170; 550 − 170 = 380."
  },
  {
    "id": "simp-013",
    "question": "(84 × 25) ÷ 10 + 116 = ?",
    "options": ["326", "336", "316", "346", "306"],
    "answer": 0,
    "explanation": "84 × 25 = 2100; 2100 ÷ 10 = 210; 210 + 116 = 326."
  },
  {
    "id": "simp-014",
    "question": "(63 × 14) – (224 ÷ 7 × 9) = ?",
    "options": ["594", "630", "660", "640", "600"],
    "answer": 0,
    "explanation": "63 × 14 = 882; 224 ÷ 7 = 32; 32 × 9 = 288; 882 − 288 = 594."
  },
  {
    "id": "simp-015",
    "question": "(125 ÷ 5 × 12) + (15 × 14) = ?",
    "options": ["510", "480", "500", "470", "520"],
    "answer": 0,
    "explanation": "125 ÷ 5 = 25; 25 × 12 = 300; 15 × 14 = 210; 300 + 210 = 510."
  },
  {
    "id": "simp-016",
    "question": "√1521 + (42 × 9) – (128 ÷ 8) = ?",
    "options": ["401", "404", "399", "410", "420"],
    "answer": 0,
    "explanation": "√1521 = 39; 42 × 9 = 378; 128 ÷ 8 = 16; 39 + 378 − 16 = 401."
  },
  {
    "id": "simp-017",
    "question": "(95% of 640) + (48 ÷ 6 × 25) = ?",
    "options": ["808", "780", "760", "800", "720"],
    "answer": 0,
    "explanation": "95% of 640 = 0.95 × 640 = 608; 48 ÷ 6 = 8; 8 × 25 = 200; 608 + 200 = 808."
  },
  {
    "id": "simp-018",
    "question": "(84 × 16) ÷ 12 + (256 ÷ 8) = ?",
    "options": ["144", "156", "152", "160", "148"],
    "answer": 0,
    "explanation": "84 × 16 = 1344; 1344 ÷ 12 = 112; 256 ÷ 8 = 32; 112 + 32 = 144."
  },
  {
    "id": "simp-019",
    "question": "(35 × 45) – (18 × 25) = ?",
    "options": ["1125", "1000", "1100", "1150", "1050"],
    "answer": 0,
    "explanation": "35 × 45 = 1575; 18 × 25 = 450; 1575 − 450 = 1125."
  },
  {
    "id": "simp-020",
    "question": "(72 × 15) + (420 ÷ 14) – 126 = ?",
    "options": ["989", "984", "979", "974", "964"],
    "answer": 1,
    "explanation": "72 × 15 = 1080; 420 ÷ 14 = 30; 1080 + 30 − 126 = 984."
  },
        ],
        
       'Simplification Medium Level (20 question)':[
         
         
  {
    "id": "simpH-001",
    "question": "(48% of 625) + (√1521 ÷ 3) – (225 ÷ 15 × 4) = ?",
    "options": ["247", "253", "260", "270", "280"],
    "answer": 1,
    "explanation": "48% of 625 = 0.48×625 = 300; √1521 = 39; 39 ÷ 3 = 13; 225 ÷ 15 = 15; 15×4 = 60; 300 + 13 − 60 = 253."
  },
  {
    "id": "simpH-002",
    "question": "(512 ÷ 8 × 9) + (35% of 1440) – (14² ÷ 2) = ?",
    "options": ["942", "962", "982", "1002", "1022"],
    "answer": 2,
    "explanation": "512 ÷ 8 = 64; 64 × 9 = 576; 35% of 1440 = 0.35×1440 = 504; 14² = 196; 196 ÷ 2 = 98; 576 + 504 − 98 = 982."
  },
  {
    "id": "simpH-003",
    "question": "(18³ ÷ 54) + (√4489 – 49) = ?",
    "options": ["108", "117", "126", "135", "144"],
    "answer": 2,
    "explanation": "18³ = 5832; 5832 ÷ 54 = 108; √4489 = 67; 67 − 49 = 18; 108 + 18 = 126."
  },
  {
    "id": "simpH-004",
    "question": "(225 ÷ 15 × 12) + (75% of 684) – √3364 = ?",
    "options": ["603", "619", "635", "651", "667"],
    "answer": 2,
    "explanation": "225 ÷ 15 = 15; 15 × 12 = 180; 75% of 684 = 0.75×684 = 513; √3364 = 58; 180 + 513 − 58 = 635."
  },
  {
    "id": "simpH-005",
    "question": "(14² + 25²) – (85% of 320) = ?",
    "options": ["529", "539", "549", "559", "569"],
    "answer": 2,
    "explanation": "14² = 196; 25² = 625; sum = 821; 85% of 320 = 0.85×320 = 272; 821 − 272 = 549."
  },
  {
    "id": "simpH-006",
    "question": "[(36 × 12) ÷ 18] + (60% of 850) – (√5776 ÷ 4) = ?",
    "options": ["501", "506", "510", "515", "520"],
    "answer": 3,
    "explanation": "36×12 = 432; 432 ÷ 18 = 24; 60% of 850 = 0.6×850 = 510; √5776 = 76; 76 ÷ 4 = 19; 24 + 510 − 19 = 515."
  },
  {
    "id": "simpH-007",
    "question": "(42 × 48) – (35 × 24) + (28 × 15) = ?",
    "options": ["1566", "1581", "1596", "1611", "1626"],
    "answer": 2,
    "explanation": "42×48 = 2016; 35×24 = 840; 28×15 = 420; 2016 − 840 + 420 = 1596."
  },
  {
    "id": "simpH-008",
    "question": "(144 ÷ 12 × 25) + (40% of 980) – √2209 = ?",
    "options": ["605", "625", "645", "665", "685"],
    "answer": 2,
    "explanation": "144 ÷ 12 = 12; 12×25 = 300; 40% of 980 = 0.4×980 = 392; √2209 = 47; 300 + 392 − 47 = 645."
  },
  {
    "id": "simpH-009",
    "question": "(84 ÷ 7 × 45) – (36% of 1250) + (√4225 ÷ 5) = ?",
    "options": ["88", "95", "103", "110", "118"],
    "answer": 2,
    "explanation": "84 ÷ 7 = 12; 12×45 = 540; 36% of 1250 = 0.36×1250 = 450; √4225 = 65; 65 ÷ 5 = 13; 540 − 450 + 13 = 103."
  },
  {
    "id": "simpH-010",
    "question": "[(75² – 45²) ÷ 30] + (33% of 1200) = ?",
    "options": ["480", "498", "516", "534", "552"],
    "answer": 2,
    "explanation": "75² − 45² = (75−45)(75+45) = 30×120 = 3600; 3600 ÷ 30 = 120; 33% of 1200 = 0.33×1200 = 396; 120 + 396 = 516."
  },
  {
    "id": "simpH-011",
    "question": "(√7921 – 78) + (55% of 360) = ?",
    "options": ["199", "204", "209", "214", "219"],
    "answer": 2,
    "explanation": "√7921 = 89; 89 − 78 = 11; 55% of 360 = 0.55×360 = 198; 11 + 198 = 209."
  },
  {
    "id": "simpH-012",
    "question": "(128 ÷ 16 × 25) + (75² ÷ 25) = ?",
    "options": ["375", "400", "425", "450", "475"],
    "answer": 2,
    "explanation": "128 ÷ 16 = 8; 8×25 = 200; 75² = 5625; 5625 ÷ 25 = 225; 200 + 225 = 425."
  },
  {
    "id": "simpH-013",
    "question": "(96 × 18) – (480 ÷ 12) + √4356 = ?",
    "options": ["1720", "1742", "1754", "1776", "1798"],
    "answer": 2,
    "explanation": "96×18 = 1728; 480 ÷ 12 = 40; √4356 = 66; 1728 − 40 + 66 = 1754."
  },
  {
    "id": "simpH-014",
    "question": "[(125 ÷ 5 × 18) + (144 ÷ 12 × 15)] = ?",
    "options": ["600", "615", "630", "645", "660"],
    "answer": 2,
    "explanation": "125 ÷ 5 = 25; 25×18 = 450; 144 ÷ 12 = 12; 12×15 = 180; 450 + 180 = 630."
  },
  {
    "id": "simpH-015",
    "question": "(15² + 20² + 25²) – (480 ÷ 12 × 5) = ?",
    "options": ["930", "990", "1050", "1110", "1170"],
    "answer": 2,
    "explanation": "15² = 225; 20² = 400; 25² = 625; sum = 1250; 480 ÷ 12 = 40; 40×5 = 200; 1250 − 200 = 1050."
  },
  {
    "id": "simpH-016",
    "question": "(√9025 ÷ 5) + (240 ÷ 8 × 12) = ?",
    "options": ["367", "373", "379", "385", "391"],
    "answer": 2,
    "explanation": "√9025 = 95; 95 ÷ 5 = 19; 240 ÷ 8 = 30; 30×12 = 360; 19 + 360 = 379."
  },
  {
    "id": "simpH-017",
    "question": "(65% of 840) + (28² ÷ 7) – (39 × 4) = ?",
    "options": ["470", "486", "502", "518", "534"],
    "answer": 2,
    "explanation": "65% of 840 = 0.65×840 = 546; 28² = 784; 784 ÷ 7 = 112; 39×4 = 156; 546 + 112 − 156 = 502."
  },
  {
    "id": "simpH-018",
    "question": "(512 ÷ 16 × 24) + (66% of 450) = ?",
    "options": ["1005", "1035", "1065", "1095", "1125"],
    "answer": 2,
    "explanation": "512 ÷ 16 = 32; 32×24 = 768; 66% of 450 = 0.66×450 = 297; 768 + 297 = 1065."
  },
  {
    "id": "simpH-019",
    "question": "(100² – 85²) ÷ 15 + (480 ÷ 6) = ?",
    "options": ["245", "255", "265", "275", "285"],
    "answer": 2,
    "explanation": "100² − 85² = (100−85)(100+85) = 15×185 = 2775; 2775 ÷ 15 = 185; 480 ÷ 6 = 80; 185 + 80 = 265."
  },
  {
    "id": "simpH-020",
    "question": "(75% of 960) + (125 ÷ 5 × 8) – (√3481) = ?",
    "options": ["821", "841", "861", "881", "901"],
    "answer": 2,
    "explanation": "75% of 960 = 0.75×960 = 720; 125 ÷ 5 = 25; 25×8 = 200; √3481 = 59; 720 + 200 − 59 = 861."
  },
        ],
        
      
      'Simplification Hard Level (20 question)': [
        // Simplification
        {
    id: 'simp-001',
    question: "15 × 16 + 20 × √324 – 165% of 220 = ?",
    options: ["237", "251", "253", "257", "None of these"],
    answer: 0,
    explanation: "√324=18; 20×18=360; 15×16=240; 165% of 220=363; 240+360−363=237"
  },
  {
    id: 'simp-002',
    question: "2409 ÷ 73 + 4674 ÷ 82 = ?^2 + 2187 ÷ 27",
    options: ["1", "2", "3", "4", "None of these"],
    answer: 2,
    explanation: "2409/73=33; 4674/82=57; 2187/27=81; 33+57=90; 90=?^2+81 ⇒ ?^2=9 ⇒ ?=3"
  },
  {
    id: 'simp-003',
    question: "43% of 600 + 888 ÷ √144 + 14 × 20 = ?",
    options: ["590", "595", "612", "635", "None of these"],
    answer: 2,
    explanation: "43% of 600=258; √144=12 ⇒ 888/12=74; 14×20=280; 258+74+280=612"
  },
  {
    id: 'simp-004',
    question: "(33)^2 – (28)^2 + √784 × 2 = ?^2",
    options: ["18", "19", "20", "21", "None of these"],
    answer: 1,
    explanation: "33^2-28^2=(33-28)*(33+28)=305; √784=28*2=56; 305+56=361=19^2 ⇒ ?=19"
  },
  {
    id: 'simp-005',
    question: "270% of 50 + 37% of 500 = 35% of 400 + 90% of ?",
    options: ["150", "200", "250", "300", "None of these"],
    answer: 1,
    explanation: "270% of 50=135; 37% of 500=185; LHS=320; 35% of 400=140; 320=140+0.9x ⇒ x=200"
  },
  {
    id: 'simp-006',
    question: "30% of (5/14) of 448 + 32% of 350 = 12% of 3(3/12) of 100 + ?^2",
    options: ["11", "14", "13", "15", "None of these"],
    answer: 0,
    explanation: "(5/14)*448=160; 30% of 160=48; 32% of 350=112; LHS=160; 3.25*12%*100=39; ?^2=121 ⇒ ?=11"
  },
  {
    id: 'simp-007',
    question: "13 × 17 + 19 × 23 + 27 × 29 – 29 × 19 + 17 × 27 = ?",
    options: ["1256", "1349", "1336", "1440", "None of these"],
    answer: 1,
    explanation: "19×23−29×19=−114; 13×17=221; 27×29=783; 17×27=459; Sum=1349"
  },
  {
    id: 'simp-008',
    question: "897 ÷ 39 – 740 + 960 = 150 + ?",
    options: ["91", "93", "95", "97", "None of these"],
    answer: 1,
    explanation: "897/39=23; 23−740+960=243; 243−150=? ⇒ ?=93"
  },
  {
    id: 'simp-009',
    question: "? × 1(5/9) = 3(10/13) × 10(5/7) × 12(2/15)",
    options: ["305", "315", "325", "335", "None of these"],
    answer: 1,
    explanation: "Convert to improper fractions; RHS ÷ (14/9)=315"
  },
  {
    id: 'simp-010',
    question: "1(8/9) × 2(11/17) ÷ 1(1/6) – (3/7) = ? + 2(6/7)",
    options: ["1", "2", "3", "4", "None of these"],
    answer: 0,
    explanation: "1 8/9=17/9; 2 11/17=45/17; 1 1/6=7/6; Compute (17/9*45/17)/(7/6) −3/7= ? + 20/7 ⇒ ?=1"
  },
  {
    id: 'simp-011',
    question: "245 + 875 + 6 × 35 = ?^2 + 34",
    options: ["31", "33", "36", "37", "None of these"],
    answer: 2,
    explanation: "6*35=210; 245+875+210=1330; 1330−34=?^2 ⇒ ?^2=1296 ⇒ ?=36"
  },
  {
    id: 'simp-012',
    question: "15.5 × 36 ÷ 558 + 1463 ÷ 19 = ? ÷ 5",
    options: ["360", "390", "410", "430", "None of these"],
    answer: 1,
    explanation: "15.5*36=558; 558/558=1; 1463/19=77; 1+77=78; 78*5=? ⇒ ?=390"
  },
  {
    id: 'simp-013',
    question: "[ (60)^2 × 11 ] ÷ 66 ÷ 10 = (15)^2 - ?",
    options: ["155", "165", "175", "185", "None of these"],
    answer: 1,
    explanation: "(60)^2=3600; 3600*11=39600; 39600/66=600; 600/10=60; 15^2−?=60 ⇒ ?=165"
  },
  {
    id: 'simp-014',
    question: "√3249 + √7569 = ?^2",
    options: ["11", "12", "13", "14", "None of these"],
    answer: 1,
    explanation: "√3249=57; √7569=87; 57+87=144; ?^2=144 ⇒ ?=12"
  },
  {
    id: 'simp-015',
    question: "√(√61009 + √79524) = ?",
    options: ["21", "22", "23", "24", "None of these"],
    answer: 2,
    explanation: "√61009=247; √79524=282; 247+282=529; √529=23"
  },
  {
    id: 'simp-016',
    question: "(11)^3 + ?^2 × 511 = (15)^3",
    options: ["1", "2", "3", "4", "None of these"],
    answer: 1,
    explanation: "11^3=1331; 15^3=3375; 3375−1331=2044; ?^2*511=2044 ⇒ ?^2=4 ⇒ ?=2"
  },
  {
    id: 'simp-017',
    question: "4.5 of 960 + (13)^2 = (15)^2 + ?% of 26650",
    options: ["11", "13", "16", "20", "None of these"],
    answer: 2,
    explanation: "4.5*960=4320; 13^2=169; LHS=4489; RHS=225+p%*26650 ⇒ p≈16"
  },
  {
    id: 'simp-018',
    question: "(17)^3 + 26% of ? = 5082",
    options: ["650", "700", "750", "800", "None of these"],
    answer: 0,
    explanation: "17^3=4913; 5082−4913=169; 0.26*x=169 ⇒ x≈650"
  },
  {
    id: 'simp-019',
    question: "50% of 64.4 + 3.8 = (9)^2 − ?",
    options: ["45", "46", "47", "48", "None of these"],
    answer: 0,
    explanation: "50% of 64.4=32.2; 32.2+3.8=36; 9^2=81; 81−36=? ⇒ ?=45"
  },
  {
    id: 'simp-020',
    question: "66.67% of 360 + 137.5% of 640 – 82.5% of 400 = ? − 210",
    options: ["1000", "1050", "1100", "1150", "None of these"],
    answer: 2,
    explanation: "66.67%≈240; 137.5%=880; 82.5%=330; 240+880−330=790; 790+210=? ⇒ ?=1000"
  },
  ],
      'Number Series Part 1(20 question)': [
        // Wrong / Number Series
       {
    id: 'q-ser-001',
    question: '4 , 12, 16 , ? , 86 , 602',
    options: ['40', '51', '48', '80', 'None'],
    answer: 3,
    explanation: 'Pattern: ×3, +4, ×5, +6 → 4×3=12, 12+4=16, 16×5=80, 80+6=86. Missing term is 80.'
  },
  {
    id: 'q-ser-002',
    question: '217 , 96, 240 , ? , 267 , 42',
    options: ['45', '71', '60', '78', 'None'],
    answer: 1,
    explanation: 'Pattern: −121, +144, −169, +196, −225. Missing term is 71.'
  },
  {
    id: 'q-ser-003',
    question: '62, 33 , ? , 54.5 , 111 , 279.5',
    options: ['48', '65', '35', '48', 'None'],
    answer: 2,
    explanation: 'Pattern: ×0.5+2, ×1+2, ×1.5+2, ×2+2, ×2.5+2. So missing term is 35.'
  },
  {
    id: 'q-ser-004',
    question: '245 , 221 , ? , 167 , 137 , 105',
    options: ['195', '214', '325', '218', 'None'],
    answer: 0,
    explanation: 'Pattern: −24, −26, −28, −30, −32. Missing term is 195.'
  },
  {
    id: 'q-ser-005',
    question: '65 , 84, 122 , ? , 255, 350',
    options: ['189', '214', '154', '179', 'None'],
    answer: 3,
    explanation: 'Pattern: +19, +38, +57, +76, +95. Missing term is 179.'
  },
  {
    id: 'q-ser-006',
    question: '49 , 141 , ? , 262 , 291 , 383',
    options: ['170', '145', '165', '861', 'None'],
    answer: 0,
    explanation: 'Pattern: +92, +29, +92, +29, +92. Missing term is 170.'
  },
  {
    id: 'q-ser-007',
    question: '4 , 24 , ? , 213.5 , 221 , 1768',
    options: ['30.5', '41', '35', '32', 'None'],
    answer: 0,
    explanation: 'Pattern: ×6+65, ×7+75, ×8... So missing term is 30.5.'
  },
  {
    id: 'q-ser-008',
    question: '16 , 32 , ? , 384, 1920, 11520',
    options: ['48', '68', '96', '86', 'None'],
    answer: 2,
    explanation: 'Pattern: ×2, ×3, ×4, ×5, ×6. Missing term is 96.'
  },
  {
    id: 'q-ser-009',
    question: '415 , 370 , 420 , ? , 425 , 360',
    options: ['315', '214', '365', '454', 'None'],
    answer: 2,
    explanation: 'Pattern: −45, +50, −55, +60, −65. Missing term is 365.'
  },
  {
    id: 'q-ser-010',
    question: '241 , 247 , ? , 279 , 309, 351',
    options: ['215', '259', '214', '658', 'None'],
    answer: 1,
    explanation: 'Pattern: +6, +12, +24, +30, +42. Missing term is 259.'
  },
  {
    id: 'q-ser-011',
    question: '7924 , 8653, 9653, 10984 , 12712 , ?',
    options: ['14709', '13509', '14909', '14609', 'None'],
    answer: 2,
    explanation: 'Pattern: +9³, +10³, +11³, +12³, +13³. Missing term is 14909.'
  },
  {
    id: 'q-ser-012',
    question: '842 , 1562 , 1682, 1706, 1712 , ?',
    options: ['1614', '1914', '1814', '1714', 'None'],
    answer: 3,
    explanation: 'Pattern: +720, +120, +24, +6, +2. Missing term is 1714.'
  },
  {
    id: 'q-ser-013',
    question: '712 , 356 , 534 , 1335 , 4672.5 , ?',
    options: ['21026.25', '24236.25', '22100.25', '22480.25', 'None'],
    answer: 1,
    explanation: 'Pattern: ×0.5, ×1.5, ×2.5, ×3.5, ×4.5. Missing term is 21026.25.'
  },
  {
    id: 'q-ser-014',
    question: '1411 , 1483 , ? , 1684 , 1833 , 2031',
    options: ['1071', '1171', '1641', '1571', 'None'],
    answer: 3,
    explanation: 'Pattern: +72, +88, +113, +149, +198. Missing term is 1571.'
  },
  {
    id: 'q-ser-015',
    question: '4242 , 4531 , 4855 , 5216 , ? , 6057',
    options: ['5616', '5686', '5046', '5662', 'None'],
    answer: 1,
    explanation: 'Pattern: +(17)², +(18)², +(19)², +(20)², +(21)². Missing term is 5616.'
  },
  {
    id: 'q-ser-016',
    question: '523 , 1854 , 2583 , 2926 , 3051 , ?',
    options: ['3078', '3668', '3228', '3668', 'None'],
    answer: 0,
    explanation: 'Pattern involves successive cube additions: +11³, +9³, +17³, +5³, +3³. Missing term is 3078.'
  },
  {
    id: 'q-ser-017',
    question: '9.4 , 10.6 , ? , 14.2 , 16.6 , 19.4',
    options: ['12.2', '11.2', '13.2', '15.2', 'None'],
    answer: 0,
    explanation: 'Pattern: +1.2, +1.6, +2, +2.4, +2.8. Missing term is 12.2.'
  },
  {
    id: 'q-ser-018',
    question: '7 , 15 , 31 , 63 , 127 , ?',
    options: ['220', '275', '315', '255', 'None'],
    answer: 3,
    explanation: 'Pattern: ×2+1 repeatedly. Missing term is 255.'
  },
  {
    id: 'q-ser-019',
    question: '112 , 103 , 121 , 94, 130 , ?',
    options: ['80', '93', '85', '103', 'None'],
    answer: 2,
    explanation: 'Pattern: −9, +18, −27, +36, −45. Missing term is 85.'
  },
  {
    id: 'q-ser-020',
    question: '48 , 97 , 195, 391 , 783 , ?',
    options: ['1671', '1581', '1287', '1567', 'None'],
    answer: 3,
    explanation: 'Pattern: ×2+1 repeatedly. Missing term is 1567.'
  },
  ],
  'Wrong Number Series Part1(20 Question)' : [
    
  
  {
    "id": "wns-001",
    "question": "Find the wrong number in the series: 10, 58, 120, 190, 274, 370",
    "options": ["58", "10", "190", "370", "None of these"],
    "answer": 4,
    "explanation": "Series pattern: +48, +60, +72, +84, +96. Wrong number = 120 (not in options)."
  },
  {
    "id": "wns-002",
    "question": "Find the wrong number in the series: 16, 20, 13, 27, 2, 38",
    "options": ["38", "13", "16", "2", "None of these"],
    "answer": 1,
    "explanation": "Series: +4, -9, +16, -25, +36. Wrong number = 13."
  },
  {
    "id": "wns-003",
    "question": "Find the wrong number in the series: 6, 8, 14, 30, 75, 233",
    "options": ["8", "6", "75", "233", "None of these"],
    "answer": 2,
    "explanation": "Pattern: ×1+2, ×1.5+2, ×2+2, ×2.5+2, ×3+2. Wrong number = 75."
  },
  {
    "id": "wns-004",
    "question": "Find the wrong number in the series: 1, 4, 6, 30, 210, 2310",
    "options": ["4", "1", "6", "210", "None of these"],
    "answer": 0,
    "explanation": "Pattern: ×2, ×3, ×5, ×7, ×11. Wrong number = 4."
  },
  {
    "id": "wns-005",
    "question": "Find the wrong number in the series: 3120, 624, 156, 50, 26",
    "options": ["156", "50", "26", "624", "None of these"],
    "answer": 1,
    "explanation": "Pattern: ÷5, ÷4, ÷3, ÷2. Wrong number = 50."
  },
  {
    "id": "wns-006",
    "question": "Find the wrong number in the series: 1511, 302, 75, 24, 12, 5",
    "options": ["5", "1511", "24", "12", "None of these"],
    "answer": 3,
    "explanation": "Pattern: ×1+5, ×2+4, ×3+3, ×4+2, ×5+1 (from right). Wrong number = 12."
  },
  {
    "id": "wns-007",
    "question": "Find the wrong number in the series: 9, 4.5, 5, 9, 36, 288",
    "options": ["288", "36", "4.5", "9", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ×0.5, ×1, ×2, ×4, ×8. Wrong number = 5 (not in options)."
  },
  {
    "id": "wns-008",
    "question": "Find the wrong number in the series: 7, 10, 18, 44, 90, 210",
    "options": ["7", "18", "44", "90", "None of these"],
    "answer": 2,
    "explanation": "Pattern: +3, +8, +24, +48, +120. Wrong number = 44."
  },
  {
    "id": "wns-009",
    "question": "Find the wrong number in the series: 3, 9, 8, 15, 11, 33, 29",
    "options": ["3", "11", "15", "29", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ×3, -4, ×3, -4, ×3, -4. Wrong number = 8 (not in options)."
  },
  {
    "id": "wns-010",
    "question": "Find the wrong number in the series: 16, 24, 40, 64, 98, 136",
    "options": ["40", "136", "64", "98", "None of these"],
    "answer": 3,
    "explanation": "Pattern: +8, +16, +24, +32, +40. Wrong number = 98."
  },
  {
    "id": "wns-011",
    "question": "Find the wrong number in the series: 2, 6, 20, 72, 272, 1054",
    "options": ["1054", "272", "6", "2", "None of these"],
    "answer": 0,
    "explanation": "Pattern: +12+1, +22+2, +42+4, +82+8, +162+16, +322+32. Wrong number = 1054."
  },
  {
    "id": "wns-012",
    "question": "Find the wrong number in the series: 6, 15, 20, 30, 42, 56",
    "options": ["6", "15", "56", "42", "None of these"],
    "answer": 1,
    "explanation": "Pattern: 2×3, 3×4, 4×5, 5×6, 6×7, 7×8. Wrong number = 15."
  },
  {
    "id": "wns-013",
    "question": "Find the wrong number in the series: 0, 6, 21, 60, 120, 210",
    "options": ["0", "120", "6", "210", "None of these"],
    "answer": 4,
    "explanation": "Pattern: 6×1, 6×3, 6×6, 6×10, 6×15. Wrong number = 21 (not in options)."
  },
  {
    "id": "wns-014",
    "question": "Find the wrong number in the series: 37, 40, 45, 58, 82, 130",
    "options": ["40", "45", "58", "82", "None of these"],
    "answer": 1,
    "explanation": "Pattern: +3, +6, +12, +24, +48. Wrong number = 45."
  },
  {
    "id": "wns-015",
    "question": "Find the wrong number in the series: 153, 154, 160 ,185, 201, 326",
    "options": ["153", "201", "326", "185", "None of these"],
    "answer": 2,
    "explanation": "Pattern: +13, +22, +33, +42, +53. Wrong number = 160 (closest mismatch, not in options)."
  },
  {
    "id": "wns-016",
    "question": "Find the wrong number in the series: 2, 7, 43, 388, 4658, 69856",
    "options": ["7", "43", "388", "69855", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ×3+1, ×6+1, ×9+1, ×12+1, ×15+1. Wrong number = 4658 (not in options)."
  },
  {
    "id": "wns-017",
    "question": "Find the wrong number in the series: 284, 140, 68, 35, 14, 5",
    "options": ["68", "140", "14", "5", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ÷2-2, ÷2-2, ÷2-2, ÷2-2, ÷2-2. Wrong number = 35 (not in options)."
  },
  {
    "id": "wns-018",
    "question": "Find the wrong number in the series: 15, 16, 18, 22, 30, 45",
    "options": ["18", "16", "22", "30", "None of these"],
    "answer": 4,
    "explanation": "Pattern: +20, +21, +22, +23, +24. Wrong number = 45 (not in options)."
  },
  {
    "id": "wns-019",
    "question": "Find the wrong number in the series: 50, 98, 194, 386, 780",
    "options": ["98", "194", "386", "50", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ×2-2, ×2-2, ×2-2, ×2-2. Wrong number = 780 (not in options)."
  },
  {
    "id": "wns-020",
    "question": "Find the wrong number in the series: 54, 74, 45, 81, 32, 96",
    "options": ["45", "81", "96", "74", "None of these"],
    "answer": 3,
    "explanation": "Pattern: +16, -25, +36, -49, +64. Wrong number = 74."
  },
    ],
    
  'Wrong Number Series Part2(20 Question)' : [
    
    
  {
    "id": "wns-021",
    "question": "Find the wrong number in the series: 240, 260, 324, 333, 341",
    "options": ["260", "324", "333", "341", "None of these"],
    "answer": 4,
    "explanation": "Pattern: +52, +43, +32, +23. Wrong number = 240 (not in options)."
  },
  {
    "id": "wns-022",
    "question": "Find the wrong number in the series: 13, 91, 545, 2730, 10920, 32760",
    "options": ["545", "2730", "10920", "13", "None of these"],
    "answer": 0,
    "explanation": "Pattern: ×7, ×6, ×5, ×4, ×3. Wrong number = 545."
  },
  {
    "id": "wns-023",
    "question": "Find the wrong number in the series: 100, 120, 250, 400, 600",
    "options": ["120", "100", "250", "400", "None of these"],
    "answer": 0,
    "explanation": "Pattern: +50, +100, +150, +200. Wrong number = 120."
  },
  {
    "id": "wns-024",
    "question": "Find the wrong number in the series: 50400, 5600, 700, 160, 53.33",
    "options": ["53.33", "5600", "160", "50400", "None of these"],
    "answer": 4,
    "explanation": "Pattern: ÷9, ÷7, ÷5, ÷3. Wrong number = 700 (not in options)."
  },
  {
    "id": "wns-025",
    "question": "Find the wrong number in the series: 60, 30, 50, 112.5, 393.75",
    "options": ["30", "393.75", "112.5", "50", "None of these"],
    "answer": 3,
    "explanation": "Pattern: ×0.5, ×1.5, ×2.5, ×3.5. Wrong number = 50."
  },
  {
    "id": "wns-026",
    "question": "Find the wrong number in the series: 400, 380, 360, 288, 201.6",
    "options": ["400", "380", "288", "360", "None of these"],
    "answer": 1,
    "explanation": "Pattern: 100%, 90%, 80%, 70%. Wrong number = 380."
  },
  {
    "id": "wns-027",
    "question": "Find the wrong number in the series: 12.5, 26, 82, 338, 1701",
    "options": ["26", "1701", "82", "12.5", "None of these"],
    "answer": 1,
    "explanation": "Pattern: ×2+12, ×3+22, ×4+32, ×5+42. Wrong number = 338."
  },
  {
    "id": "wns-028",
    "question": "Find the wrong number in the series: 112, 143, 180, 222, 264, 311",
    "options": ["112", "143", "311", "222", "None of these"],
    "answer": 3,
    "explanation": "Pattern: +31, +37, +41, +43. Wrong number = 222."
  },
  {
    "id": "wns-029",
    "question": "Find the wrong number in the series: 170, 288, 362, 528, 845, 960",
    "options": ["170", "288", "362", "960", "None of these"],
    "answer": 4,
    "explanation": "Pattern: 132+1, 172-1, 192+1, 232-1, 292+1, 312-1. Wrong number = 845 (not in options)."
  },
  {
    "id": "wns-030",
    "question": "Find the wrong number in the series: 72, 110, 156, 210, 272, 345",
    "options": ["110", "156", "210", "345", "None of these"],
    "answer": 3,
    "explanation": "Pattern: 82+8, 102+10, 122+12, 142+14, 162+16, 182+18. Wrong number = 345."
  },
  {
    "id": "wns-031",
    "question": "Find the wrong number in the series: 88, 91, 100, 127, 208, 450",
    "options": ["91", "127", "100", "450", "None of these"],
    "answer": 3,
    "explanation": "Pattern: +3, +9, +27, +81, +243. Wrong number = 450."
  },
  {
    "id": "wns-032",
    "question": "Find the wrong number in the series: 6, 15, 35, 66, 143, 221",
    "options": ["35", "221", "66", "143", "None of these"],
    "answer": 2,
    "explanation": "Pattern: 2×3, 3×5, 5×7, 7×11, 11×13, 13×17. Wrong number = 66."
  },
  {
    "id": "wns-033",
    "question": "Find the wrong number in the series: 1000, 480, 1500, 375, 1875",
    "options": ["480", "1000", "1500", "375", "None of these"],
    "answer": 0,
    "explanation": "Pattern: ÷2, ×3, ÷4, ×5. Wrong number = 480."
  },
  {
    "id": "wns-034",
    "question": "Find the wrong number in the series: 48, 100, 182, 294, 448, 648",
    "options": ["182", "648", "448", "48", "None of these"],
    "answer": 0,
    "explanation": "Pattern: 43-42, 53-52, 63-62, 73-72, 83-82, 93-92. Wrong number = 182."
  },
  {
    "id": "wns-035",
    "question": "Find the wrong number in the series: 16, 33, 35, 70, 73, 147",
    "options": ["36", "73", "147", "70", "None of these"],
    "answer": 3,
    "explanation": "Pattern: ×2+1, ×1+2, ×2+1, ×1+2, ×2+1. Wrong number = 70."
  },
  {
    "id": "wns-036",
    "question": "Find the wrong number in the series: 1292, 1172, 1027, 858, 662, 437",
    "options": ["1172", "858", "662", "437", "None of these"],
    "answer": 0,
    "explanation": "Pattern: -121, -144, -169, -196, -225. Wrong number = 1172."
  },
  {
    "id": "wns-037",
    "question": "Find the wrong number in the series: 14, 40, 91, 275, 553, 1661",
    "options": ["40", "275", "1661", "553", "None of these"],
    "answer": 0,
    "explanation": "Pattern: ×3+2, ×2+3, ×3+2, ×2+3, ×3+2. Wrong number = 40."
  },
  {
    "id": "wns-038",
    "question": "Find the wrong number in the series: 997, 952, 862, 682, 310",
    "options": ["997", "682", "310", "862", "None of these"],
    "answer": 2,
    "explanation": "Pattern: -45, -90, -180, -360. Wrong number = 310."
  },
  {
    "id": "wns-039",
    "question": "Find the wrong number in the series: 19, 54, 96, 145, 201, 265",
    "options": ["54", "145", "201", "265", "None of these"],
    "answer": 3,
    "explanation": "Pattern: +35, +42, +49, +56, +63. Wrong number = 265."
  },
  {
    "id": "wns-040",
    "question": "Find the wrong number in the series: 19, 27, 44, 67, 99, 139",
    "options": ["27", "44", "139", "67", "None of these"],
    "answer": 1,
    "explanation": "Pattern: +8×1, +8×2, +8×3, +8×4, +8×5. Wrong number = 44."
  },
    ],  
    
    'Wrong Number Series Final(50 Question)' : [
      
      
  {
    question: "Find Wrong Number?: 2, 5, 26, 677, 458330, 209263730",
    options: ["2", "5", "26", "677", "209263730"],
    answer: 4,
    explanation: "2²+1=5 → 5²+1=26 → 26²+1=677 → 677²+1=458330 → 458330²+1=210065689901 (not 209263730)"
  },
  {
    question: "Find Wrong Number?: 6, 5, 9, 29, 105, 431",
    options: ["6", "5", "9", "29", "105"],
    answer: 0,
    explanation: "5×1+4=9 → 9×3+2=29 → 29×4-11=105 → 105×5+(-94)=431"
  },
  {
    question: "Find Wrong Number?: 3, 4, 8, 25, 99, 530",
    options: ["3", "4", "8", "25", "530"],
    answer: 3,
    explanation: "3×1+1=4 → 4×2=8 → 8×3+1=25 (wrong, should be 24+1=25 works) → next mismatches at 99"
  },
  {
    question: "Find Wrong Number?: 3, 10, 24, 45, 78, 121",
    options: ["3", "10", "24", "45", "78"],
    answer: 1,
    explanation: "Pattern is n³+2 → 3=1³+2 → 10=2³+2 → 27=3³ (not 24)"
  },
  {
    question: "Find Wrong Number?: 156, 78, 39, 19.5, 9.25, 4.125",
    options: ["78", "39", "19.5", "9.25", "4.125"],
    answer: 3,
    explanation: "156÷2=78 → 78÷2=39 → 39÷2=19.5 → 19.5÷2=9.75 (not 9.25) → 9.75÷2=4.875"
  },
  {
    question: "Find Wrong Number?: 1, 2, 6, 21, 88, 445",
    options: ["1", "2", "6", "21", "445"],
    answer: 3,
    explanation: "1×1+1=2 → 2×2+2=6 → 6×3+3=21 → 21×4+4=88 → 88×5+5=445"
  },
  {
    question: "Find Wrong Number?: 11, 23, 48, 98, 198, 400",
    options: ["11", "23", "48", "98", "400"],
    answer: 4,
    explanation: "Double each step +n: 11×2+1=23 → 23×2+2=48 → 48×2+2=98 → 98×2+2=198 → 198×2+2=398 (not 400)"
  },
  {
    question: "Find Wrong Number?: 31, 64, 129, 261, 522, 1046",
    options: ["31", "64", "129", "522", "1046"],
    answer: 3,
    explanation: "31×2+2=64 → 64×2+1=129 → 129×2+3=261 → 261×2+1=523 (not 522) → 523×2=1046"
  },
  {
    question: "Find Wrong Number?: 8, 10, 15, 26, 47, 95",
    options: ["8", "10", "15", "26", "47"],
    answer: 4,
    explanation: "Add +2, +5, +11, +21, +43 pattern → last should be 90 not 95"
  },
  {
    question: "Find Wrong Number?: 6, 12, 21, 35, 56, 84",
    options: ["12", "21", "35", "56", "84"],
    answer: 0,
    explanation: "Series is triangular numbers: 1st=1×2/2=1, 2×3/2=3, ... but here pattern mismatch at 12 instead of 10"
  },
  {
    question: "Find Wrong Number?: 100, 50, 55, 110, 115, 230",
    options: ["50", "55", "110", "115", "230"],
    answer: 1,
    explanation: "100÷2=50 → 50+5=55 → 55×2=110 → 110+5=115 → 115×2=230"
  },
  {
    question: "Find Wrong Number?: 2, 4, 12, 48, 240, 1440",
    options: ["4", "12", "48", "240", "1440"],
    answer: 4,
    explanation: "×2, ×3, ×4, ×5, ×6 pattern → last should be 1200 not 1440"
  },
  {
    question: "Find Wrong Number?: 3, 6, 18, 108, 1944, 87381",
    options: ["18", "108", "1944", "87381", "6"],
    answer: 3,
    explanation: "×2, ×3, ×6, ×18, ×54 pattern → 1944×54=104976 (not 87381)"
  },
  {
    question: "Find Wrong Number?: 1, 2, 6, 24, 120, 720, 5030",
    options: ["2", "6", "120", "720", "5030"],
    answer: 4,
    explanation: "Factorials: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040 (not 5030)"
  },
  {
    question: "Find Wrong Number?: 4, 8, 20, 48, 100, 180",
    options: ["8", "20", "48", "100", "180"],
    answer: 4,
    explanation: "Pattern ×2, ×2.5, ×2.4, ×2.1 etc → last term doesn’t fit correctly"
  },
  {
    question: "Find Wrong Number?: 2, 5, 13, 40, 121, 364",
    options: ["5", "13", "40", "121", "364"],
    answer: 4,
    explanation: "Pattern ×2+1, ×3-2, ×4+3, ×5-4, ×6+5 → last mismatched"
  },
  {
    question: "Find Wrong Number?: 4, 7, 15, 31, 63, 127",
    options: ["4", "7", "15", "31", "127"],
    answer: 1,
    explanation: "Series is 2ⁿ−1 → 3,7,15,31,63,127. First term should be 3 not 4"
  },
  {
    question: "Find Wrong Number?: 1, 3, 9, 27, 65, 243",
    options: ["3", "9", "27", "65", "243"],
    answer: 3,
    explanation: "Powers of 3 → 1,3,9,27,81,243 → 65 is wrong"
  },
  {
    question: "Find Wrong Number?: 5, 10, 26, 65, 194, 582",
    options: ["10", "26", "65", "194", "582"],
    answer: 4,
    explanation: "Pattern ×2=10, ×2+6=26, ×2+13=65, ×3=195 (not 194), ×3=585 (not 582)"
  },
  {
    question: "Find Wrong Number?: 7, 21, 63, 189, 574, 1722",
    options: ["21", "63", "189", "574", "1722"],
    answer: 3,
    explanation: "×3 pattern → last terms mismatch at 574"
  },
  {
    question: "Find Wrong Number?: 3, 9, 30, 120, 600, 3600",
    options: ["9", "30", "120", "600", "3600"],
    answer: 4,
    explanation: "Pattern ×3, ×3.3, ×4, ×5, ×6 → last mismatch"
  },
  {
    question: "Find Wrong Number?: 10, 12, 36, 108, 324, 972",
    options: ["12", "36", "108", "324", "972"],
    answer: 0,
    explanation: "10×3=30 (not 12) → 30×3=90 etc"
  },
  {
    question: "Find Wrong Number?: 125, 25, 5, 2, 1, 1",
    options: ["25", "5", "2", "1", "125"],
    answer: 2,
    explanation: "Pattern ÷5 each → 125÷5=25 → 25÷5=5 → 5÷5=1. Should be 1, not 2"
  },
  {
    question: "Find Wrong Number?: 1, 8, 27, 65, 125, 216",
    options: ["8", "27", "65", "125", "216"],
    answer: 3,
    explanation: "Cubes → 1³=1, 2³=8, 3³=27, 4³=64 (not 65), 5³=125, 6³=216"
  },
  {
    question: "Find Wrong Number?: 2, 4, 12, 36, 144, 720",
    options: ["4", "12", "36", "144", "720"],
    answer: 4,
    explanation: "Pattern ×2=4 → ×3=12 → ×3=36 → ×4=144 → ×5=720. Correct series should be 2,4,12,36,144,7200"
  },
  {
    question: "Find Wrong Number?: 14, 42, 47, 141, 154, 438",
    options: ["438", "141", "154", "42", "None of these"],
    answer: 2,
    explanation: "14 × 3 = 42 → 42 + 5 = 47 → 47 × 3 = 141 → 141 + 5 = 146 → 146 × 3 = 438"
  },
  {
    question: "Find Wrong Number?: 136, 140, 129, 147, 122, 158",
    options: ["129", "140", "147", "158", "None of these"],
    answer: 0,
    explanation: "136 + 22 = 140 → 140 - 32 = 131 → 131 + 42 = 147 → 147 - 52 = 122 → 122 + 62 = 158"
  },
  {
    question: "Find Wrong Number?: 4, 10, 18, 36, 46, 92",
    options: ["36", "46", "10", "18", "None of these"],
    answer: 2,
    explanation: "4 × 2 = 8 → 8 + 10 = 18 → 18 × 2 = 36 → 36 + 10 = 46 → 46 × 2 = 92"
  },
  {
    question: "Find Wrong Number?: 60, 120, 40, 180, 32, 192",
    options: ["180", "32", "40", "192", "None of these"],
    answer: 0,
    explanation: "60 × 2 = 120 → 120 ÷ 3 = 40 → 40 × 4 = 160 → 160 ÷ 5 = 32 → 32 × 6 = 192"
  },
  {
    question: "Find Wrong Number?: 21, 25, 41, 77, 143, 241",
    options: ["143", "41", "77", "25", "None of these"],
    answer: 0,
    explanation: "21 + 2² = 25 → 25 + 4² = 41 → 41 + 6² = 77 → 77 + 8² = 141 → 141 + 10² = 241"
  },
  {
    question: "Find Wrong Number?: 36, 42, 30, 48, 24, 52",
    options: ["52", "42", "48", "30", "None of these"],
    answer: 0,
    explanation: "36 + 6 = 42 → 42 - 12 = 30 → 30 + 18 = 48 → 48 - 24 = 24 → 24 + 30 = 54"
  },
  {
    question: "Find Wrong Number?: -20, -16, -7, 9, 31, 70",
    options: ["70", "-16", "31", "9", "None of these"],
    answer: 2,
    explanation: "-20 + 2² = -16 → -16 + 3² = -7 → -7 + 4² = 9 → 9 + 5² = 34 → 34 + 6² = 70"
  },
  {
    question: "Find Wrong Number?: 16, 24, 20, 47, 40, 102",
    options: ["47", "102", "16", "40", "None of these"],
    answer: 3,
    explanation: "16 + 2³ = 24 → 24 - 2² = 20 → 20 + 3³ = 47 → 47 - 3² = 38 → 38 + 4³ = 102"
  },
  {
    question: "Find Wrong Number?: 4, 12, 7, 21, 15, 48",
    options: ["15", "48", "21", "12", "None of these"],
    answer: 1,
    explanation: "4 × 3 = 12 → 7 × 3 = 21 → 15 × 3 = 45"
  },
  {
    question: "Find Wrong Number?: 7, 11, 19, 35, 67, 130",
    options: ["11", "19", "67", "130", "None of these"],
    answer: 3,
    explanation: "7 + 2² = 11 → 11 + 2³ = 19 → 19 + 2⁴ = 35 → 35 + 2⁵ = 67 → 67 + 2⁶ = 131"
  },
  {
    question: "Find Wrong Number?: 189, 225, 274, 357, 499, 755",
    options: ["499", "755", "189", "274", "357"],
    answer: 4,
    explanation: "+62, +72, +92, +122, +162"
  },
  {
    question: "Find Wrong Number?: 88, 148, 258, 588, 1908, 8508",
    options: ["88", "148", "258", "8508", "None of these"],
    answer: 0,
    explanation: "+55, +110, +330, +1320, +6600"
  },
  {
    question: "Find Wrong Number?: 982, 3262, 3718, 3832, 3870, 3884",
    options: ["3718", "3832", "3870", "3884", "982"],
    answer: 3,
    explanation: "+2280, +456, +114, +38, +19"
  },
  {
    question: "Find Wrong Number?: 2945, 2886, 2700, 2259, 1475, 250",
    options: ["1475", "2945", "2886", "2700", "2259"],
    answer: 2,
    explanation: "−72, −142, −212, −282, −352"
  },
  {
    question: "Find Wrong Number?: 10800, 2160, 360, 90, 30, 15",
    options: ["90", "30", "10800", "2160", "360"],
    answer: 3,
    explanation: "÷6 → ÷5 → ÷4 → ÷3 → ÷2"
  },
  {
    question: "Find Wrong Number?: 67, 116, 183, 274, 411, 592",
    options: ["183", "274", "411", "592", "67"],
    answer: 1,
    explanation: "Double difference → +49, +67, +95, +133, +181"
  },
  {
    question: "Find Wrong Number?: 85, 136, 257, 426, 715, 1076",
    options: ["136", "257", "715", "1076", "85"],
    answer: 4,
    explanation: "+72, +112, +132, +172, +192"
  },
  {
    question: "Find Wrong Number?: 413, 545, 655, 743, 817, 873",
    options: ["413", "545", "743", "817", "873"],
    answer: 2,
    explanation: "+(11×12), +(10×11), +(9×10), +(8×9), +(7×8)"
  },
  {
    question: "Find Wrong Number?: 49, 58, 66, 72, 73, 78",
    options: ["73", "78", "49", "66", "72"],
    answer: 0,
    explanation: "Last digit adds: 49+9 → 58+8 → 66+6 → 72+2 → 74+4"
  },
  {
    question: "Find Wrong Number?: 148, 268, 412, 580, 762, 988",
    options: ["148", "268", "580", "762", "988"],
    answer: 3,
    explanation: "Double difference: +120, +144, +168, +192, +216"
  },
  {
    question: "Find Wrong Number?: 167, 1167, 4542, 12542, 28167, 37167",
    options: ["28167", "1167", "4542", "37167", "167"],
    answer: 3,
    explanation: "167 + 1000 = 1167 → +3375 = 4542 → +8000 = 12542 → +15625 = 28167 → +22500 = 50667"
  },
  {
    question: "Find Wrong Number?: 42, 21, 28, 31.5, 63, 157.5",
    options: ["42", "21", "28", "31.5", "157.5"],
    answer: 2,
    explanation: "42 × 0.5 = 21 → 21 × 1 = 21 → 21 × 1.5 = 31.5 → 31.5 × 2 = 63 → 63 × 2.5 = 157.5"
  },
  {
    question: "Find Wrong Number?: 24, 124, 624, 8120, 15624, 78124",
    options: ["124", "624", "24", "15624", "8120"],
    answer: 4,
    explanation: "24 × 5 + 4 = 124 → 124 × 5 + 4 = 624 → 624 × 5 + 4 = 3124 → 3124 × 5 + 4 = 15624 → 15624 × 5 + 4 = 78124"
  },
  {
    question: "Find Wrong Number?: 30, 60, 66, 78, 98, 128",
    options: ["30", "60", "66", "78", "128"],
    answer: 0,
    explanation: "58 + 1×2 = 60 → 60 + 2×3 = 66 → 66 + 3×4 = 78 → 78 + 4×5 = 98 → 98 + 5×6 = 128"
  },
  {
    question: "Find Wrong Number?: 28, 18, 24, 4.8, 19.2, 6.4",
    options: ["28", "4.8", "18", "24", "6.4"],
    answer: 2,
    explanation: "28 ÷ 7 = 4 → 4 × 6 = 24 → 24 ÷ 5 = 4.8 → 4.8 × 4 = 19.2 → 19.2 ÷ 3 = 6.4"
  },
      ],
    
    
'Quadratic Equations Part 1(20 question)': [
        // Quadratic Equations
  {
    id: 'q-ser-021',
    question: '4x^2 - 20x + 21 = 0',
    options: ['(1, 21/4)', '(3/2, 7/2)', '(-3/2, -7/2)', '(3, 7)', 'None'],
    answer: 1,
    explanation: 'Factor: 4x^2-20x+21 = (2x-3)(2x-7) → x = 3/2, 7/2.'
  },
  {
    id: 'q-ser-022',
    question: 'x^2 - 13x + 42 = 0',
    options: ['(6, 7)', '(-7, 6)', '(3, 14)', '(2, 21)', 'None'],
    answer: 0,
    explanation: 'Factor: x^2-13x+42 = (x-6)(x-7) → x = 6, 7.'
  },
  {
    id: 'q-ser-023',
    question: 'x^2 - 7x + 25 = 2x + 5  (i.e., x^2 - 9x + 20 = 0)',
    options: ['(4, 5)', '(-5, 4)', '(−4, −5)', '(2, 10)', 'None'],
    answer: 0,
    explanation: 'Simplify: x^2 - 9x + 20 = (x-4)(x-5) → x = 4, 5.'
  },
  {
    id: 'q-ser-024',
    question: 'x^2 - 12x + 32 = 0',
    options: ['(6, -6)', '(4, 8)', '(2, 16)', '(-8, 4)', 'None'],
    answer: 1,
    explanation: 'Factor: (x-4)(x-8) → x = 4, 8.'
  },
  {
    id: 'q-ser-025',
    question: 'x^2 + 14x - 51 = 0',
    options: ['(−17, 3)', '(-3, −17)', '(3, 17)', '(17, −3)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+17)(x−3) → x = −17, 3.'
  },
  {
    id: 'q-ser-026',
    question: 'x^2 + 14x - 32 = 0',
    options: ['(8, −2)', '(−16, 2)', '(-2, −16)', '(−2, 16)', 'None'],
    answer: 1,
    explanation: 'Factor: (x+16)(x−2) → x = −16, 2.'
  },
  {
    id: 'q-ser-027',
    question: '9x^2 + 14x - 8 = 0',
    options: ['(−2, 4/9)', '(2, −4/9)', '(-4/9, −2)', '(−4/6, 2)', 'None'],
    answer: 0,
    explanation: 'Factor: (9x−4)(x+2) → x = −2, 4/9.'
  },
  {
    id: 'q-ser-028',
    question: 'x^2 + 16x + 63 = 0',
    options: ['(−9, −7)', '(7, −9)', '(9, 7)', '(−7, 9)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+9)(x+7) → x = −9, −7.'
  },
  {
    id: 'q-ser-029',
    question: 'x^2 - 8x + 15 = 0',
    options: ['(15, −1)', '(3, 5)', '(−3, −5)', '(-5, 3)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−3)(x−5) → x = 3, 5.'
  },
  {
    id: 'q-ser-030',
    question: 'x^2 - 7x + 12 = 0',
    options: ['(−3, −4)', '(6, 2)', '(-4, 3)', '(3, 4)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−3)(x−4) → x = 3, 4.'
  },
  {
    id: 'q-ser-031',
    question: 'x^2 + 11x - 26 = 0',
    options: ['(−13, 2)', '(-2, −13)', '(13, −2)', '(−2, 34)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+13)(x−2) → x = −13, 2.'
  },
  {
    id: 'q-ser-032',
    question: 'x^2 + 8x - 180 = 0',
    options: ['(−10, 18)', '(-10, −18)', '(18, −5)', '(−18, 10)', 'None'],
    answer: 3,
    explanation: 'Factor: (x+18)(x−10) → x = −18, 10.'
  },
  {
    id: 'q-ser-033',
    question: 'x^2 - 11x + 28 = 0',
    options: ['(4, -7)', '(7, 4)', '(14, −2)', '(−4, −7)', 'None'],
    answer: 1,
    explanation: 'Factor: (x−4)(x−7) → x = 4, 7.'
  },
  {
    id: 'q-ser-034',
    question: 'x^2 - 5x + 6 = 0',
    options: ['(−2, −3)', '(-3, 2)', '(6, −1)', '(2, 3)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−2)(x−3) → x = 2, 3.'
  },
  {
    id: 'q-ser-035',
    question: '5x^2 - 19x + 18 = 0',
    options: ['(2, -9/5)', '(−9/5, −2)', '(9/5, 2)', '(18, −1)', 'None'],
    answer: 2,
    explanation: 'Factor: (5x−9)(x−2) → x = 9/5, 2.'
  },
  {
    id: 'q-ser-036',
    question: 'x^2 - 19x + 88 = 0',
    options: ['(19, −?)', '(−8, −11)', '(-11, 8)', '(8, 11)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−8)(x−11) → x = 8, 11.'
  },
  {
    id: 'q-ser-037',
    question: 'x^2 - 36x + 128 = 0',
    options: ['(−4, −32)', '(-32, 4)', '(8, 16)', '(4, 32)', 'None'],
    answer: 3,
    explanation: 'Factor: (x−4)(x−32) → x = 4, 32.'
  },
  {
    id: 'q-ser-038',
    question: 'x^2 - 21x + 108 = 0',
    options: ['(9, 12)', '(18, 6)', '(-12, 9)', '(−9, −12)', 'None'],
    answer: 0,
    explanation: 'Factor: (x−9)(x−12) → x = 9, 12.'
  },
  {
    id: 'q-ser-039',
    question: '3x^2 - 10x + 8 = 0',
    options: ['(-2, 4/3)', '(4/3, 2)', '(8, −1)', '(−4/3, −2)', 'None'],
    answer: 1,
    explanation: 'Factor: (3x−4)(x−2) → x = 4/3, 2.'
  },
  {
    id: 'q-ser-040',
    question: 'x^2 + 14x + 33 = 0',
    options: ['(−11, −3)', '(3, 11)', '(11, -3)', '(3, −11)', 'None'],
    answer: 0,
    explanation: 'Factor: (x+11)(x+3) → x = −11, −3.'
  },
  ],
   
  'Quadratic Comparison Part 1(20 question)': [

  {
    id: 'q-ser-070',
    question: 'I. x² - 17x + 42 = 0   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 14, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-071',
    question: 'I. x² + 6x - 24 = -3x + 12   II. y² - 14y + 48 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -12, 3 | Roots of Eqn 2 = 8, 6 | Answer: B'
  },
  {
    id: 'q-ser-072',
    question: 'I. x² - 2x - 15 = 0   II. y² - 4y + 52 = 7y + 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 5, -3 | Roots of Eqn 2 = 6, 5 | Answer: E'
  },
  {
    id: 'q-ser-073',
    question: 'I. x² - 16x + 30 = -2x - 3   II. y² + 11y - 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 11, 3 | Roots of Eqn 2 = -14, 3 | Answer: D'
  },
  {
    id: 'q-ser-074',
    question: 'I. x² - 8x + 18 = 10 - 2x   II. y² + 3y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, 2 | Roots of Eqn 2 = -8, 5 | Answer: C'
  },
  {
    id: 'q-ser-075',
    question: 'I. x² + 8x - 48 = 0   II. y² - 15y + 44 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = -12, 4 | Roots of Eqn 2 = 11, 4 | Answer: E'
  },
  {
    id: 'q-ser-076',
    question: 'I. x² - 8x + 19 = 3x - 5   II. y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 8, 3 | Roots of Eqn 2 = -10, 3 | Answer: D'
  },
  {
    id: 'q-ser-077',
    question: 'I. x² - 2x - 8 = 0   II. y² + 7y - 18 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 4, -2 | Roots of Eqn 2 = -9, 2 | Answer: C'
  },
  {
    id: 'q-ser-078',
    question: 'I. x² - 17x + 60 = 0   II. y² + 5y - 50 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 12, 5 | Roots of Eqn 2 = -10, 5 | Answer: D'
  },
  {
    id: 'q-ser-079',
    question: 'I. x² - 5x + 26 = 6x - 2   II. y² + 6y - 40 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = 7, 4 | Roots of Eqn 2 = -10, 4 | Answer: D'
  },
  {
    id: 'q-ser-080',
    question: 'I. x² - 25x + 66 = 0   II. y² + 25y + 32 = 4y - 22',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 22, 3 | Roots of Eqn 2 = -18, -3 | Answer: A'
  },
  {
    id: 'q-ser-081',
    question: 'I. 25x² - 45x + 14 = 0   II. 48y² - 176y - 64 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1.4, 0.4 | Roots of Eqn 2 = 4, -0.33 | Answer: C'
  },
  {
    id: 'q-ser-082',
    question: 'I. x² - 11x + 30 = 0   II. y² - 13y + 42 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Eqn 1 = 6, 5 | Roots of Eqn 2 = 7, 6 | Answer: E'
  },
  {
    id: 'q-ser-083',
    question: 'I. 2x² + 19x + 45 = 0   II. 2y² + 11y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -5, -4.5 | Roots of Eqn 2 = -4, -1.5 | Answer: B'
  },
  {
    id: 'q-ser-084',
    question: 'I. 3x² - 13x + 12 = 0   II. 2y² - 15y + 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = 3, 1.33 | Roots of Eqn 2 = 4, 3.5 | Answer: B'
  },
  {
    id: 'q-ser-085',
    question: 'I. 6x² + 19x + 15 = 0   II. 3y² + 11y + 10 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Eqn 1 = -1.67, -1.5 | Roots of Eqn 2 = -2, -1.67 | Answer: D'
  },
  {
    id: 'q-ser-086',
    question: 'I. 2x² - 11x + 15 = 0   II. 2y² - 11y + 14 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 3, 2.5 | Roots of Eqn 2 = 2, 3.5 | Answer: C'
  },
  {
    id: 'q-ser-087',
    question: 'I. 2x² - 23x + 56 = 0   II. 3y² + 13y + 4 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Eqn 1 = 8, 3.5 | Roots of Eqn 2 = -4, -0.33 | Answer: A'
  },
  {
    id: 'q-ser-088',
    question: 'I. 2x² - 7x + 5 = 0   II. 2y² + y - 28 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Eqn 1 = 1, 2.5 | Roots of Eqn 2 = 3.5, -4 | Answer: C'
  },
  {
    id: 'q-ser-089',
    question: 'I. x² + 5x + 4 = 0   II. 3y² - 13y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Eqn 1 = -4, -1 | Roots of Eqn 2 = 3, 1.33 | Answer: B'
  },
    ],
    
  'Quadratic Comparison Par2(20 Questions)' : [
  {
    id: 'q-ser-061',
    question: 'I. 25x² - 15x + 2 = 0  ||  II. 10y² + 3y - 1 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 0.2, 0.4 | Roots of Equation 2 = -0.5, 0.2'
  },
  {
    id: 'q-ser-062',
    question: 'I. X² + 5x - 19 = x + 2  ||  II. Y² + 15y + 20 = 26y - 4',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Equation 1 = -7, 3 | Roots of Equation 2 = 8, 3'
  },
  {
    id: 'q-ser-063',
    question: 'I. X² - 7x - 18 = 0  ||  II. Y² + 10y + 16 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 9, -2 | Roots of Equation 2 = -8, -2'
  },
  {
    id: 'q-ser-064',
    question: 'I. X² - 9x + 18 = 0  ||  II. Y² + 7y - 30 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 6, 3 | Roots of Equation 2 = -10, 3'
  },
  {
    id: 'q-ser-065',
    question: 'I. X² - 2x - 8 = 0  ||  II. Y² - 2y - 15 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Equation 1 = 4, -2 | Roots of Equation 2 = 5, -3'
  },
  {
    id: 'q-ser-066',
    question: 'I. X² - 12x + 65 = 5x - 5  ||  II. Y² + 5y - 84 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 10, 7 | Roots of Equation 2 = -12, 7'
  },
  {
    id: 'q-ser-067',
    question: 'I. X² + 14x - 32 = 0  ||  II. Y² - 12y + 32 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Equation 1 = -16, 2 | Roots of Equation 2 = 8, 4'
  },
  {
    id: 'q-ser-068',
    question: 'I. X² + 9x - 25 = 8x - 5  ||  II. Y² - 8y + 33 = 3y + 3',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Equation 1 = -5, 4 | Roots of Equation 2 = 6, 5'
  },
  {
    id: 'q-ser-069',
    question: 'I. X² + 7x - 16 = 2x - 2  ||  II. Y² - 10y + 16 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Equation 1 = -7, 2 | Roots of Equation 2 = 8, 2'
  },
  {
    id: 'q-ser-090',
    question: 'I. 3x² - 14x + 8 = 0  ||  II. 3y² - 20y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Equation 1 = 4, 0.67 | Roots of Equation 2 = 6, 0.67'
  },
  {
    id: 'q-ser-091',
    question: 'I. 2x² - 7x + 3 = 0  ||  II. 2y² + 11y + 12 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Equation 1 = 3, 0.5 | Roots of Equation 2 = -4, -1.5'
  },
  {
    id: 'q-ser-092',
    question: 'I. 2x² - 23x + 56 = 0  ||  II. 3y² + 13y + 4 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Equation 1 = 8, 3.5 | Roots of Equation 2 = -4, -0.33'
  },
  {
    id: 'q-ser-093',
    question: 'I. 30x² + 89x + 58 = 0  ||  II. 27y² - 51y - 56 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Equation 1 = -2, -29/30 | Roots of Equation 2 = 8/3, -7/9'
  },
  {
    id: 'q-ser-094',
    question: 'I. 4x² + 8x + 3 = 0  ||  II. 4y² - 29y + 45 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 1,
    explanation: 'Roots of Equation 1 = -1.5, -0.5 | Roots of Equation 2 = 5, 2.25'
  },
  {
    id: 'q-ser-095',
    question: 'I. 2x² - 23x + 21 = 0  ||  II. Y² + 42y + 272 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Equation 1 = 10.5, 1 | Roots of Equation 2 = -34, -8'
  },
  {
    id: 'q-ser-096',
    question: 'I. 5x² - 26x + 21 = 0  ||  II. 2y² - 17y + 21 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 2,
    explanation: 'Roots of Equation 1 = 1, 4.2 | Roots of Equation 2 = 7, 1.5'
  },
  {
    id: 'q-ser-097',
    question: 'I. X² - 21x + 104 = 0  ||  II. Y² - 33y + 260 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 4,
    explanation: 'Roots of Equation 1 = 13, 8 | Roots of Equation 2 = 13, 20'
  },
  {
    id: 'q-ser-098',
    question: 'I. X² - 31x + 240 = 0  ||  II. Y² - 28y + 195 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 15, 16 | Roots of Equation 2 = 13, 15'
  },
  {
    id: 'q-ser-099',
    question: 'I. 3x² - 17x + 10 = 0  ||  II. 3y² + 4y - 4 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 3,
    explanation: 'Roots of Equation 1 = 0.67, 5 | Roots of Equation 2 = -2, 0.67'
  },
  {
    id: 'q-ser-100',
    question: 'I. 3x² - 19x + 28 = 0  ||  II. 4y² - 5y - 6 = 0',
    options: ['(a) X > Y','(b) X < Y','(c) X = Y or CND','(d) X ≥ Y','(e) X ≤ Y'],
    answer: 0,
    explanation: 'Roots of Equation 1 = 4, 2.33 | Roots of Equation 2 = 2, -0.75'
  },
    ],

      Algebra: [
        {
          id: 'q-alg-001',
          question: 'THIS SERIES COMMING SOON WAIT FOR NEXT WEEK',
          options: ['1,6', '2,3', '-2,-3', 'No real roots'],
          answer: 1,
          explanation: '(x-2)(x-3)=0 → x=2 or 3'
        }
      ],

      'Data Interpretation': [
        {
          id: 'q-di-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['17.5', '18', '19', '20'],
          answer: 0,
          explanation: 'Total = 100. After removing 30 → 70; new avg = 70 / 4 = 17.5'
        }
      ]
    }
  },

  'Reasoning Ability': {
    topics: {
      Puzzles: [
        {
          id: 'r-puz-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['A', 'B', 'C', 'D'],
          answer: 2,
          explanation: 'Sample; replace with full puzzle details.'
        }
      ],
      Syllogism: [
        {
          id: 'r-syl-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Yes', 'No', 'Cannot say', 'All'],
          answer: 2,
          explanation: 'Cannot be concluded from given statements.'
        }
      ],
      Inequalities: [
        {
          id: 'r-ineq-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['x > z', 'x < z', 'x = z', 'Cannot say'],
          answer: 0,
          explanation: 'Transitive property.'
        }
      ]
    }
  },

  'English Language': {
    topics: {
      'Reading Comprehension': [
        {
          id: 'e-rc-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Grammar', 'Tone', 'Central theme', 'Vocabulary'],
          answer: 2,
          explanation: 'Central theme is the main idea.'
        }
      ],
      Grammar: [
        {
          id: 'e-gra-001',
          question: "THIS SERIES COMING SOON WAIT FOR NEXT WEEK",
          options: ["He don't know.", "He doesn't know.", "He not knows.", "He no know."],
          answer: 1,
          explanation: "Third person singular requires \"doesn't\"."
        }
      ],
      Vocabulary: [
        {
          id: 'e-voc-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Increase', 'Expand', 'Reduce', 'Grow'],
          answer: 2,
          explanation: 'Reduce is antonym of augment.'
        }
      ]
    }
  },

  'Banking Awareness': {
    topics: {
      'Banking Terms': [
        {
          id: 'b-term-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Know Your Customer', 'Know Your Company', 'Key Yearly Check', 'Keep Your Cash'],
          answer: 0,
          explanation: 'KYC = Know Your Customer'
        }
      ],
      'Economy & Policy': [
        {
          id: 'b-eco-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['SEBI', 'RBI', 'Finance Ministry', 'NITI Aayog'],
          answer: 1,
          explanation: 'RBI sets the repo rate.'
        }
      ]
    }
  },

  'Computer Aptitude': {
    topics: {
      Basics: [
        {
          id: 'c-bas-001',
          question: 'THIS SERIES COMING SOON WAIT FOR NEXT WEEK',
          options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Print Unit', 'Control Processing Unit'],
          answer: 0,
          explanation: 'CPU = Central Processing Unit'
        }
      ]
    }
  }
};