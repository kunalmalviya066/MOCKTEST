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