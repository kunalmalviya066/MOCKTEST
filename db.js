// db.js - question bank structure for Banking mock tests
const DB = {
  'Quantitative Aptitude': {
    topics: {
      
      Arithmetic: [
        {
          id: 'q-art-001',
          question: 'If 5x + 3 = 2x + 18, then x = ?',
          options: ['3', '5', '7', '10'],
          answer: 1,
          explanation: '5x - 2x = 18 - 3 → 3x = 15 → x = 5'
        },
        {
          id: 'q-art-002',
          question: 'A train 120 m long crosses a platform in 30 s. If speed is 36 km/h, what is platform length?',
          options: ['60 m', '120 m', '180 m', '240 m'],
          answer: 2,
          explanation: '36 km/h = 10 m/s. Distance = 10 × 30 = 300. Platform = 300 - 120 = 180 m.'
        }
      ],

      'One Liner': [
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
  {
          id: 'q-simp-010',
          question: '3/5 of 350 - 45 = ?',
          options: ['165', '160', '155', '150'],
          answer: 0,
          explanation: '3/5 of 350=210 → 210-45=165'
        },
      ],
      'Number Series and Quadratic Eqn': [
        // Wrong / Number Series
        {
          id: 'q-ser-001',
          question: 'Find the wrong number: 2, 6, 12, 20, 30, 42',
          options: ['6', '12', '20', '30'],
          answer: 3,
          explanation: 'Pattern: add consecutive even numbers: 2,6(+4),12(+6),20(+8),30(+10),42(+12). All fit → 30 is wrong in given options.'
        },
        {
          id: 'q-ser-002',
          question: 'What comes next: 5, 11, 23, 47, ?',
          options: ['93', '95', '97', '99'],
          answer: 1,
          explanation: 'Pattern ×2+1: 5→11→23→47→95'
        },
        {
          id: 'q-ser-003',
          question: 'Find wrong number: 3, 9, 27, 81, 243, 720',
          options: ['27', '81', '243', '720'],
          answer: 3,
          explanation: 'Powers of 3: last should be 729 not 720'
        },
        {
          id: 'q-ser-004',
          question: 'Next term: 4, 9, 19, 39, 79, ?',
          options: ['159', '161', '163', '165'],
          answer: 0,
          explanation: 'Pattern +5,+10,+20,+40,+80… → next=159'
        },
        {
          id: 'q-ser-005',
          question: 'Find missing: 2, 5, 10, 17, 26, ?',
          options: ['35', '36', '37', '38'],
          answer: 2,
          explanation: '+3,+5,+7,+9,+11 → next=37'
        },
        {
          id: 'q-ser-006',
          question: 'Wrong number: 7, 14, 29, 58, 116, 233',
          options: ['29', '58', '116', '233'],
          answer: 0,
          explanation: 'Double series: 7→14→28→56→112→224. 29 breaks the pattern.'
        },
        {
          id: 'q-ser-007',
          question: 'Next: 3, 12, 36, 108, ?',
          options: ['216', '324', '432', '648'],
          answer: 1,
          explanation: '×3 each time → 108×3=324'
        },
        {
          id: 'q-ser-008',
          question: 'Find missing: 121, 144, 169, 196, ?',
          options: ['225', '256', '289', '324'],
          answer: 0,
          explanation: 'Perfect squares: 11²,12²,13²,14² → next 15²=225'
        },
        {
          id: 'q-ser-009',
          question: 'Find wrong number: 2, 4, 16, 64, 256, 1240',
          options: ['64', '256', '1240', '16'],
          answer: 2,
          explanation: 'Powers of 2: should be 1024 not 1240'
        },
        {
          id: 'q-ser-010',
          question: 'Missing: 1, 4, 9, 16, 25, ?',
          options: ['30', '35', '36', '49'],
          answer: 2,
          explanation: 'Perfect squares: 1²,2²,3²,4²,5² → next 6²=36'
        },

        // Quadratic Equations
        {
          id: 'q-quad-001',
          question: 'x² - 7x + 12 = 0. Roots?',
          options: ['2,6', '3,4', '4,5', 'None'],
          answer: 1,
          explanation: '(x-3)(x-4)=0 → roots 3,4'
        },
        {
          id: 'q-quad-002',
          question: 'x² + 5x + 6 = 0. Roots?',
          options: ['-2,-3', '-1,-6', '2,3', 'No real roots'],
          answer: 0,
          explanation: '(x+2)(x+3)=0 → roots -2,-3'
        },
        {
          id: 'q-quad-003',
          question: '2x² - 8x + 6 = 0. Roots?',
          options: ['1,3', '2,3', '1,2', '3,4'],
          answer: 0,
          explanation: 'Divide 2 → x²-4x+3=0 → roots 1,3'
        },
        {
          id: 'q-quad-004',
          question: 'x² - 9 = 0. Roots?',
          options: ['±3', '3 only', '-3 only', 'None'],
          answer: 0,
          explanation: 'x²=9 → x=±3'
        },
        {
          id: 'q-quad-005',
          question: 'x² - 10x + 25 = 0. Root?',
          options: ['5 double root', '5,10', '0,5', 'No root'],
          answer: 0,
          explanation: '(x-5)²=0 → root 5 (repeated)'
        },
        {
          id: 'q-quad-006',
          question: 'x² + x - 20 = 0. Roots?',
          options: ['4,-5', '5,-4', '2,-10', '10,-2'],
          answer: 0,
          explanation: 'Factors (x+5)(x-4)=0 → roots -5,4'
        },
        {
          id: 'q-quad-007',
          question: 'x² - 2x - 15 = 0. Roots?',
          options: ['3,-5', '5,-3', '15,-1', 'None'],
          answer: 1,
          explanation: '(x-5)(x+3)=0 → roots 5,-3'
        },
        {
          id: 'q-quad-008',
          question: 'x² - 16 = 0. Roots?',
          options: ['±4', '4 only', '-4 only', 'None'],
          answer: 0,
          explanation: 'x²=16 → x=±4'
        },
        {
          id: 'q-quad-009',
          question: 'x² + 4x + 4 = 0. Root?',
          options: ['-2 double root', '-2,2', '2 double root', 'None'],
          answer: 0,
          explanation: '(x+2)²=0 → root -2 (repeated)'
        },
        {
          id: 'q-quad-010',
          question: 'x² - 5x + 4 = 0. Roots?',
          options: ['1,4', '2,4', '1,5', '2,3'],
          answer: 0,
          explanation: '(x-1)(x-4)=0 → roots 1,4'
        }
  
  ],

      Algebra: [
        {
          id: 'q-alg-001',
          question: 'Solve: x^2 - 5x + 6 = 0. x = ?',
          options: ['1,6', '2,3', '-2,-3', 'No real roots'],
          answer: 1,
          explanation: '(x-2)(x-3)=0 → x=2 or 3'
        }
      ],

      'Data Interpretation': [
        {
          id: 'q-di-001',
          question: 'Average of five numbers is 20. If one number 30 is removed, new average is?',
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
          question: 'Five people A-E sitting in a row; who is in middle? (sample placeholder)',
          options: ['A', 'B', 'C', 'D'],
          answer: 2,
          explanation: 'Sample; replace with full puzzle details.'
        }
      ],
      Syllogism: [
        {
          id: 'r-syl-001',
          question: 'All dogs are animals. Some animals are cats. Are some dogs cats?',
          options: ['Yes', 'No', 'Cannot say', 'All'],
          answer: 2,
          explanation: 'Cannot be concluded from given statements.'
        }
      ],
      Inequalities: [
        {
          id: 'r-ineq-001',
          question: 'If x > y and y > z then?',
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
          question: 'Main idea of a passage is used to assess?',
          options: ['Grammar', 'Tone', 'Central theme', 'Vocabulary'],
          answer: 2,
          explanation: 'Central theme is the main idea.'
        }
      ],
      Grammar: [
        {
          id: 'e-gra-001',
          question: "Choose the correct sentence: \"He don't know.\"",
          options: ["He don't know.", "He doesn't know.", "He not knows.", "He no know."],
          answer: 1,
          explanation: "Third person singular requires \"doesn't\"."
        }
      ],
      Vocabulary: [
        {
          id: 'e-voc-001',
          question: 'Antonym of "augment"?',
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
          question: 'What does KYC stand for?',
          options: ['Know Your Customer', 'Know Your Company', 'Key Yearly Check', 'Keep Your Cash'],
          answer: 0,
          explanation: 'KYC = Know Your Customer'
        }
      ],
      'Economy & Policy': [
        {
          id: 'b-eco-001',
          question: 'Repo rate is set by which institution in India?',
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
          question: 'What does CPU stand for?',
          options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Print Unit', 'Control Processing Unit'],
          answer: 0,
          explanation: 'CPU = Central Processing Unit'
        }
      ]
    }
  }
};
