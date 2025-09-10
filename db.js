// db.js - question bank structure for Banking mock tests
const DB = {
  'Quantitative Aptitude': {
    topics: {
      
      'Simplification part 1 (20 question)': [
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
    question: "Wrong Number Series Question 76: 2, 5, 26, 677, 458330, 209263730",
    options: ["2", "5", "26", "677", "209263730"],
    answer: 4,
    explanation: "2²+1=5 → 5²+1=26 → 26²+1=677 → 677²+1=458330 → 458330²+1=210065689901 (not 209263730)"
  },
  {
    question: "Wrong Number Series Question 77: 6, 5, 9, 29, 105, 431",
    options: ["6", "5", "9", "29", "105"],
    answer: 0,
    explanation: "5×1+4=9 → 9×3+2=29 → 29×4-11=105 → 105×5+(-94)=431"
  },
  {
    question: "Wrong Number Series Question 78: 3, 4, 8, 25, 99, 530",
    options: ["3", "4", "8", "25", "530"],
    answer: 3,
    explanation: "3×1+1=4 → 4×2=8 → 8×3+1=25 (wrong, should be 24+1=25 works) → next mismatches at 99"
  },
  {
    question: "Wrong Number Series Question 79: 3, 10, 24, 45, 78, 121",
    options: ["3", "10", "24", "45", "78"],
    answer: 1,
    explanation: "Pattern is n³+2 → 3=1³+2 → 10=2³+2 → 27=3³ (not 24)"
  },
  {
    question: "Wrong Number Series Question 80: 156, 78, 39, 19.5, 9.25, 4.125",
    options: ["78", "39", "19.5", "9.25", "4.125"],
    answer: 3,
    explanation: "156÷2=78 → 78÷2=39 → 39÷2=19.5 → 19.5÷2=9.75 (not 9.25) → 9.75÷2=4.875"
  },
  {
    question: "Wrong Number Series Question 81: 1, 2, 6, 21, 88, 445",
    options: ["1", "2", "6", "21", "445"],
    answer: 3,
    explanation: "1×1+1=2 → 2×2+2=6 → 6×3+3=21 → 21×4+4=88 → 88×5+5=445"
  },
  {
    question: "Wrong Number Series Question 82: 11, 23, 48, 98, 198, 400",
    options: ["11", "23", "48", "98", "400"],
    answer: 4,
    explanation: "Double each step +n: 11×2+1=23 → 23×2+2=48 → 48×2+2=98 → 98×2+2=198 → 198×2+2=398 (not 400)"
  },
  {
    question: "Wrong Number Series Question 83: 31, 64, 129, 261, 522, 1046",
    options: ["31", "64", "129", "522", "1046"],
    answer: 3,
    explanation: "31×2+2=64 → 64×2+1=129 → 129×2+3=261 → 261×2+1=523 (not 522) → 523×2=1046"
  },
  {
    question: "Wrong Number Series Question 84: 8, 10, 15, 26, 47, 95",
    options: ["8", "10", "15", "26", "47"],
    answer: 4,
    explanation: "Add +2, +5, +11, +21, +43 pattern → last should be 90 not 95"
  },
  {
    question: "Wrong Number Series Question 85: 6, 12, 21, 35, 56, 84",
    options: ["12", "21", "35", "56", "84"],
    answer: 0,
    explanation: "Series is triangular numbers: 1st=1×2/2=1, 2×3/2=3, ... but here pattern mismatch at 12 instead of 10"
  },
  {
    question: "Wrong Number Series Question 86: 100, 50, 55, 110, 115, 230",
    options: ["50", "55", "110", "115", "230"],
    answer: 1,
    explanation: "100÷2=50 → 50+5=55 → 55×2=110 → 110+5=115 → 115×2=230"
  },
  {
    question: "Wrong Number Series Question 87: 2, 4, 12, 48, 240, 1440",
    options: ["4", "12", "48", "240", "1440"],
    answer: 4,
    explanation: "×2, ×3, ×4, ×5, ×6 pattern → last should be 1200 not 1440"
  },
  {
    question: "Wrong Number Series Question 88: 3, 6, 18, 108, 1944, 87381",
    options: ["18", "108", "1944", "87381", "6"],
    answer: 3,
    explanation: "×2, ×3, ×6, ×18, ×54 pattern → 1944×54=104976 (not 87381)"
  },
  {
    question: "Wrong Number Series Question 89: 1, 2, 6, 24, 120, 720, 5030",
    options: ["2", "6", "120", "720", "5030"],
    answer: 4,
    explanation: "Factorials: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040 (not 5030)"
  },
  {
    question: "Wrong Number Series Question 90: 4, 8, 20, 48, 100, 180",
    options: ["8", "20", "48", "100", "180"],
    answer: 4,
    explanation: "Pattern ×2, ×2.5, ×2.4, ×2.1 etc → last term doesn’t fit correctly"
  },
  {
    question: "Wrong Number Series Question 91: 2, 5, 13, 40, 121, 364",
    options: ["5", "13", "40", "121", "364"],
    answer: 4,
    explanation: "Pattern ×2+1, ×3-2, ×4+3, ×5-4, ×6+5 → last mismatched"
  },
  {
    question: "Wrong Number Series Question 92: 4, 7, 15, 31, 63, 127",
    options: ["4", "7", "15", "31", "127"],
    answer: 1,
    explanation: "Series is 2ⁿ−1 → 3,7,15,31,63,127. First term should be 3 not 4"
  },
  {
    question: "Wrong Number Series Question 93: 1, 3, 9, 27, 65, 243",
    options: ["3", "9", "27", "65", "243"],
    answer: 3,
    explanation: "Powers of 3 → 1,3,9,27,81,243 → 65 is wrong"
  },
  {
    question: "Wrong Number Series Question 94: 5, 10, 26, 65, 194, 582",
    options: ["10", "26", "65", "194", "582"],
    answer: 4,
    explanation: "Pattern ×2=10, ×2+6=26, ×2+13=65, ×3=195 (not 194), ×3=585 (not 582)"
  },
  {
    question: "Wrong Number Series Question 95: 7, 21, 63, 189, 574, 1722",
    options: ["21", "63", "189", "574", "1722"],
    answer: 3,
    explanation: "×3 pattern → last terms mismatch at 574"
  },
  {
    question: "Wrong Number Series Question 96: 3, 9, 30, 120, 600, 3600",
    options: ["9", "30", "120", "600", "3600"],
    answer: 4,
    explanation: "Pattern ×3, ×3.3, ×4, ×5, ×6 → last mismatch"
  },
  {
    question: "Wrong Number Series Question 97: 10, 12, 36, 108, 324, 972",
    options: ["12", "36", "108", "324", "972"],
    answer: 0,
    explanation: "10×3=30 (not 12) → 30×3=90 etc"
  },
  {
    question: "Wrong Number Series Question 98: 125, 25, 5, 2, 1, 1",
    options: ["25", "5", "2", "1", "125"],
    answer: 2,
    explanation: "Pattern ÷5 each → 125÷5=25 → 25÷5=5 → 5÷5=1. Should be 1, not 2"
  },
  {
    question: "Wrong Number Series Question 99: 1, 8, 27, 65, 125, 216",
    options: ["8", "27", "65", "125", "216"],
    answer: 3,
    explanation: "Cubes → 1³=1, 2³=8, 3³=27, 4³=64 (not 65), 5³=125, 6³=216"
  },
  {
    question: "Wrong Number Series Question 100: 2, 4, 12, 36, 144, 720",
    options: ["4", "12", "36", "144", "720"],
    answer: 4,
    explanation: "Pattern ×2=4 → ×3=12 → ×3=36 → ×4=144 → ×5=720. Correct series should be 2,4,12,36,144,7200"
  },
  {
    question: "Wrong Number Series Question 51: 14, 42, 47, 141, 154, 438",
    options: ["438", "141", "154", "42", "None of these"],
    answer: 2,
    explanation: "14 × 3 = 42 → 42 + 5 = 47 → 47 × 3 = 141 → 141 + 5 = 146 → 146 × 3 = 438"
  },
  {
    question: "Wrong Number Series Question 52: 136, 140, 129, 147, 122, 158",
    options: ["129", "140", "147", "158", "None of these"],
    answer: 0,
    explanation: "136 + 22 = 140 → 140 - 32 = 131 → 131 + 42 = 147 → 147 - 52 = 122 → 122 + 62 = 158"
  },
  {
    question: "Wrong Number Series Question 53: 4, 10, 18, 36, 46, 92",
    options: ["36", "46", "10", "18", "None of these"],
    answer: 2,
    explanation: "4 × 2 = 8 → 8 + 10 = 18 → 18 × 2 = 36 → 36 + 10 = 46 → 46 × 2 = 92"
  },
  {
    question: "Wrong Number Series Question 54: 60, 120, 40, 180, 32, 192",
    options: ["180", "32", "40", "192", "None of these"],
    answer: 0,
    explanation: "60 × 2 = 120 → 120 ÷ 3 = 40 → 40 × 4 = 160 → 160 ÷ 5 = 32 → 32 × 6 = 192"
  },
  {
    question: "Wrong Number Series Question 55: 21, 25, 41, 77, 143, 241",
    options: ["143", "41", "77", "25", "None of these"],
    answer: 0,
    explanation: "21 + 2² = 25 → 25 + 4² = 41 → 41 + 6² = 77 → 77 + 8² = 141 → 141 + 10² = 241"
  },
  {
    question: "Wrong Number Series Question 56: 36, 42, 30, 48, 24, 52",
    options: ["52", "42", "48", "30", "None of these"],
    answer: 0,
    explanation: "36 + 6 = 42 → 42 - 12 = 30 → 30 + 18 = 48 → 48 - 24 = 24 → 24 + 30 = 54"
  },
  {
    question: "Wrong Number Series Question 57: -20, -16, -7, 9, 31, 70",
    options: ["70", "-16", "31", "9", "None of these"],
    answer: 2,
    explanation: "-20 + 2² = -16 → -16 + 3² = -7 → -7 + 4² = 9 → 9 + 5² = 34 → 34 + 6² = 70"
  },
  {
    question: "Wrong Number Series Question 58: 16, 24, 20, 47, 40, 102",
    options: ["47", "102", "16", "40", "None of these"],
    answer: 3,
    explanation: "16 + 2³ = 24 → 24 - 2² = 20 → 20 + 3³ = 47 → 47 - 3² = 38 → 38 + 4³ = 102"
  },
  {
    question: "Wrong Number Series Question 59: 4, 12, 7, 21, 15, 48",
    options: ["15", "48", "21", "12", "None of these"],
    answer: 1,
    explanation: "4 × 3 = 12 → 7 × 3 = 21 → 15 × 3 = 45"
  },
  {
    question: "Wrong Number Series Question 60: 7, 11, 19, 35, 67, 130",
    options: ["11", "19", "67", "130", "None of these"],
    answer: 3,
    explanation: "7 + 2² = 11 → 11 + 2³ = 19 → 19 + 2⁴ = 35 → 35 + 2⁵ = 67 → 67 + 2⁶ = 131"
  },
  {
    question: "Wrong Number Series Question 61: 189, 225, 274, 357, 499, 755",
    options: ["499", "755", "189", "274", "357"],
    answer: 4,
    explanation: "+62, +72, +92, +122, +162"
  },
  {
    question: "Wrong Number Series Question 62: 88, 148, 258, 588, 1908, 8508",
    options: ["88", "148", "258", "8508", "None of these"],
    answer: 0,
    explanation: "+55, +110, +330, +1320, +6600"
  },
  {
    question: "Wrong Number Series Question 63: 982, 3262, 3718, 3832, 3870, 3884",
    options: ["3718", "3832", "3870", "3884", "982"],
    answer: 3,
    explanation: "+2280, +456, +114, +38, +19"
  },
  {
    question: "Wrong Number Series Question 64: 2945, 2886, 2700, 2259, 1475, 250",
    options: ["1475", "2945", "2886", "2700", "2259"],
    answer: 2,
    explanation: "−72, −142, −212, −282, −352"
  },
  {
    question: "Wrong Number Series Question 65: 10800, 2160, 360, 90, 30, 15",
    options: ["90", "30", "10800", "2160", "360"],
    answer: 3,
    explanation: "÷6 → ÷5 → ÷4 → ÷3 → ÷2"
  },
  {
    question: "Wrong Number Series Question 66: 67, 116, 183, 274, 411, 592",
    options: ["183", "274", "411", "592", "67"],
    answer: 1,
    explanation: "Double difference → +49, +67, +95, +133, +181"
  },
  {
    question: "Wrong Number Series Question 67: 85, 136, 257, 426, 715, 1076",
    options: ["136", "257", "715", "1076", "85"],
    answer: 4,
    explanation: "+72, +112, +132, +172, +192"
  },
  {
    question: "Wrong Number Series Question 68: 413, 545, 655, 743, 817, 873",
    options: ["413", "545", "743", "817", "873"],
    answer: 2,
    explanation: "+(11×12), +(10×11), +(9×10), +(8×9), +(7×8)"
  },
  {
    question: "Wrong Number Series Question 69: 49, 58, 66, 72, 73, 78",
    options: ["73", "78", "49", "66", "72"],
    answer: 0,
    explanation: "Last digit adds: 49+9 → 58+8 → 66+6 → 72+2 → 74+4"
  },
  {
    question: "Wrong Number Series Question 70: 148, 268, 412, 580, 762, 988",
    options: ["148", "268", "580", "762", "988"],
    answer: 3,
    explanation: "Double difference: +120, +144, +168, +192, +216"
  },
  {
    question: "Wrong Number Series Question 71: 167, 1167, 4542, 12542, 28167, 37167",
    options: ["28167", "1167", "4542", "37167", "167"],
    answer: 3,
    explanation: "167 + 1000 = 1167 → +3375 = 4542 → +8000 = 12542 → +15625 = 28167 → +22500 = 50667"
  },
  {
    question: "Wrong Number Series Question 72: 42, 21, 28, 31.5, 63, 157.5",
    options: ["42", "21", "28", "31.5", "157.5"],
    answer: 2,
    explanation: "42 × 0.5 = 21 → 21 × 1 = 21 → 21 × 1.5 = 31.5 → 31.5 × 2 = 63 → 63 × 2.5 = 157.5"
  },
  {
    question: "Wrong Number Series Question 73: 24, 124, 624, 8120, 15624, 78124",
    options: ["124", "624", "24", "15624", "8120"],
    answer: 4,
    explanation: "24 × 5 + 4 = 124 → 124 × 5 + 4 = 624 → 624 × 5 + 4 = 3124 → 3124 × 5 + 4 = 15624 → 15624 × 5 + 4 = 78124"
  },
  {
    question: "Wrong Number Series Question 74: 30, 60, 66, 78, 98, 128",
    options: ["30", "60", "66", "78", "128"],
    answer: 0,
    explanation: "58 + 1×2 = 60 → 60 + 2×3 = 66 → 66 + 3×4 = 78 → 78 + 4×5 = 98 → 98 + 5×6 = 128"
  },
  {
    question: "Wrong Number Series Question 75: 28, 18, 24, 4.8, 19.2, 6.4",
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