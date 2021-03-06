// This is an example of the motivation questionnaire structure
const motivationQuestionnaire = {
  quizTitle: 'Motivation Questionnaire',
  sections: [
    {
      sectionTitle: 'Motivation Questionnaire Overview',
      sectionDescription:
        "This is a survey to gather information about the type and level of motivation the student has for a class or course. The objective is to have a profile of the student in order to adapt the learning materials and tasks to the student's needs.",
      items: [
        {
          itemType: 'description',
          title: 'Informed consent',
          text:
            'We invite you to participate voluntarily in the performance of this test to measure motivation. Participants older than 18 are required and this experiment is being carried out by the postgraduate department of the Faculty of Chemical Sciences and Engineering of UABC, under the direction of Dr. J. Reyes Juárez Ramírez, email reyesjua@uabc.edu.mx , for academic and research purposes.'
        },
        {
          itemType: 'description',
          title: 'Your participation consists of:',
          text:
            'If you agree to participate in this test, it will consist of three sections, the first section is your demographic data, the second section is 31 motivation items and the third section is 51 learning items, with response options for each 7-point Likert scale item .'
        },
        {
          itemType: 'description',
          title: 'Risks and benefits',
          text:
            'This research has no physical or mental health risk. There will be no monetary compensation of any other type.'
        },
        {
          itemType: 'description',
          title: 'Rights',
          text:
            'Participation is voluntary, you can refuse to participate without any penalty. You have the right to request that the information you have provided so far be discarded, and to ask questions about the procedure, if you have any questions after reading the sheet.'
        },
        {
          itemType: 'description',
          title: 'Confidentiality',
          text:
            'The information obtained will be confidential, your name will not be made public by any means. No external person will have access to individual information. The analyzes will be individual or group, and only in this way will they be presented as a research report and will only be used for educational purposes only. In no case will personal data be used when publishing or using these materials.'
        },
        {
          itemType: 'description',
          title: 'For more information',
          text: 'You can contact Carolina Avila  at carolina.avila@uabc.edu.mx'
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            'By checking the box below, you voluntarily and consciously express your desire to participate in this study.',
          options: ['I agree to participate'],
          selOption: -1
        }
      ]
    },
    {
      sectionTitle: 'DEMOGRAPHIC INFORMATION',
      sectionDescription: '',
      items: [
        {
          itemType: 'question',
          questionType: 'open',
          title: 'EMAIL',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'open',
          title: 'STUDENT ID',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'GENDER',
          options: ['MALE', 'FEMALE'],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'ETHNIC BACKGROUND',
          options: ['U.S.A.', 'HISPANIC', 'AFRO-AMERICAN', 'OTHER'],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'WHAT ENGLISH LEVEL DO YOU HAVE?',
          options: [
            'PROFICIENCY (C2)',
            'ADVANCED (C1)',
            'UPPER-INTERMEDIATE (B2)',
            'INTERMEDIATE (B1)',
            'ELEMENTARY (A2)',
            'BEGINNER (A1)',
            'NOTHING'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'open',
          title: '¿WHAT YEAR DID YOU GRADUATE FROM HIGH SCHOOL?',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'UNIVERSITY WHERE YOU ARE CURRENTLY STUDYING *',
          options: [
            'UABC OTAY',
            'UABC VALLE DE LAS PALMAS',
            'UABC MEXICALI',
            'TEC TIJUANA TOMAS AQUINO',
            'TEC TIJUANA OTAY',
            'UNIVERSIDAD AUTONOMA DE SAN LUIS POTOSI'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: '¿WHICH SEMESTER ARE YOU ATTENDING? *',
          options: [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            'GREATER THAN 12'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'open',
          title:
            'FULL NAME OF THE EDUCATIONAL PROGRAM / CAREER YOU’RE CURRENTLY STUDYING ? For Example: Ingeniero en Computación',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'open',
          title: 'GRADE POINT AVERAGE (0-100)',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'MAIN FOCUS OF THE COURSE ARE YOU ATTENDING THIS SEMESTER?',
          options: [
            'STRUCTURED PROGRAMMING',
            'OBJECT-ORIENTED PROGRAMMING',
            'QUALITY ASSURANCE',
            'SOFTWARE ENGINEERING',
            'PROBABILITY AND STATISTICS',
            'RESEARCH WORKSHOP I',
            'OTHER COURSE'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'open',
          title:
            'FULL NAME OF THE COURSE YOU ARE ENROLLED IN THIS SEMESTER (WRITE IN UPPERCASE)',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'open',
          title:
            'FULL NAME OR IDENTIFIER OF THE GROUP TO WHICH YOU ARE ENROLLED IN THAT COURSE (WRITE IN UPPERCASE)',
          answer: ''
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'THEMATIC AREA OF THE COURSE',
          options: [
            'MATH',
            ' PROGRAMMING',
            'SOFTWARE',
            'DEVELOPMENT',
            'ELECTRONICS',
            'MECATRONICS ',
            'SOCIAL SCIENCES',
            'OTHER'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: 'COURSE MODALITY',
          options: [
            'PRESENTIAL',
            'SEMI-PRESENCIAL (PRESENT PART AND DISTANCE PART)',
            'VIRTUAL (FROM DISTANCE)'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title: '¿HOW MANY TIMES HAVE YOU TAKEN THIS COURSE? *',
          options: [
            '1 (FIRST TIME)',
            '2 (SECOND OPPORTUNITY)',
            '3 (THIRD OPPORTUNITY)',
            'MORE THAN 3 TIMES'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            'ON THIS (CURRENT) OCCASION, ¿HOW DO YOU CONSIDER YOUR PERFORMANCE IN THE COURSE, BASED ON QUALIFICATIONS (GRADES) OBTAINED?',
          options: [
            'EXCELLENT',
            ' VERY GOOD',
            'REGULAR',
            'BAD',
            'VERY BAD',
            'THERE IS NO EVALUATION'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            'ON THIS (CURRENT) OCCASION, ¿HOW DO YOU CONSIDER YOUR PERFORMANCE IN THE COURSE, BASED ON THE LEARNING ACHIEVED?',
          options: [
            'EXCELLENT',
            'VERY GOOD',
            'REGULAR',
            'BAD',
            'VERY BAD',
            'THERE IS NO EVALUATION'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            '¿HOW MANY COURSES (UNIVERSITY LEVEL) RELATED TO THIS SUBJECT/AREA HAVE YOU COMPLETED BEFORE?',
          options: [
            '0 COURSES',
            '1 COURSE',
            '2 COURSES',
            '3 COURSES',
            'MORE THAN 3 COURSES'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            '¿HOW MANY EXTRA HOURS TO THE COURSE SCHEDULE, DO YOU DEDICATE TO THIS COURSE AT WEEK?',
          options: [
            '5 OR MORE HOURS',
            '3-5 HOURS',
            '1-3 HOURS',
            'LESS THAN 1 HOUR'
          ],
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'checkboxgrid',
          title:
            'REASONS WHY DID YOU TAKE THIS COURSE (SELECT A “YES” OR “NO” FOR EACH ITEM)',
          options: [
            {
              optionText: 'TO FULFILL CURRICULA REQUIREMENT (SEQUENCE)',
              selColumn: -1
            },
            { optionText: 'THE CONTENT SEEMS INTERESTING', selColumn: -1 },
            {
              optionText: 'IT IS REQUIRED FOR ALL STUDENTS AT COLLEGE',
              selColumn: -1
            },
            {
              optionText: 'WILL BE USEFUL TO ME IN OTHER COURSES',
              selColumn: -1
            },
            { optionText: 'IS AN EASY ELECTIVE', selColumn: -1 },
            {
              optionText: 'WILL HELP IMPROVE MY ACADEMIC SKILLS',
              selColumn: -1
            },
            {
              optionText: 'IS REQUIRED FOR MAJOR (FOR CREDITS)',
              selColumn: -1
            },
            { optionText: 'WAS RECOMMENDED BY A FRIEND', selColumn: -1 },
            { optionText: 'WAS RECOMMENDED BY A COUNSELOR', selColumn: -1 }
          ],
          leftColumnText: 'YES',
          rightColumnText: 'NO'
        }
      ]
    },
    {
      sectionTitle: 'MOTIVATION',
      sectionDescription:
        'The following questions are about your motivation and attitudes about this class. Remember that there are no right or wrong answers, just answer as accurately as possible. Use the scale below to answer the questions. If you think the statement is very true for you, circle the number 7; If a statement is not entirely true for you, circle the number 1. If the statement is more or less true for you, find the number between 1 and 7 that best describes you.',
      items: [
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '1.- In a class like this, I prefer course learning materials that really challenges me so I can learn new things. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '2.- If I study in appropriate ways, then I will be able to learn the learning materials in this course. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '3.- When I take a test, I think about how poorly I am doing compared with other students.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '4.- I think I will be able to use what I learn in this course in other courses.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '5.- I believe I will receive an excellent grade in this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "6.- I'm certain I can understand the most difficult learning materials presented in the readings for this course.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '7.- . Getting a good grade in this course is the most satisfying thing for me right now. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "8.- When I take a test I think about items on other parts of the test I can't answer.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "9.- It is my own fault if I don't learn the materials in this course.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '10.- It is important for me to learn the course materials in this class.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '11.- The most important thing for me right now is improving my overall grade point average, so my main concern in this class is getting a good grade.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "12.- I'm confident that I can learn the basic concepts taught in this course.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '13.- . If I can, I want to get better grades in this course than most of the other students.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '14.- When I take tests I think on the consequences of failing.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "15.- I'm confident I can understand the most complex learning material presented by the instructor in this course.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '16.- In a course like this, I prefer learning materials that arouses my curiosity, even if it is difficult to learn.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '17.- I am very interested in the content area of this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '18.- If I try hard enough, then I will understand the learning materials of this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '19.- I have an uneasy, upset feeling when I take an exam.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "20.- I'm confident I can do an excellent job on the assignments and tests in this course. ",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '21. I expect to do well in this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '22. The most satisfying thing for me in this course is trying to understand the content as thoroughly as possible.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '23. I think the learning materials in this course are useful for me to learn.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "24. When I have the opportunity in this course, I choose course assignments that I can learn from even if they don't guarantee a good grade.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "25. If I don't understand the course materials, it is because I didn't try hard enough.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '26. I like the subject matter of this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '27. Understanding the subject matter of this course is very important to me.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '28. I feel my heart beating (exitement of entusiasm) fast when I take an exam.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "29. I'm certain I can master the skills being taught in this class.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '30. I want to do well in this course because it is important to show my ability to my family, friends, teachers, or others. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '31. Considering the difficulty of this course, the teacher, and my skills, I think I will do well in this class.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        }
      ]
    },
    {
      sectionTitle: 'LEARNING STRATEGIES',
      sectionDescription:
        'The following questions are about their learning strategies and study skills for this class. Again, there are no right or wrong answers. Answer the questions about how you study in this class as accurately as possible. Use the same scale to answer the remaining questions. If you think the statement is very true for you, circle the number 7; If a statement is not entirely true for you, circle the number 1. If the statement is more or less true for you, find the number between 1 and 7 that best describes you.',
      items: [
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '32. When I study the learning materials for this course, I outline the material to help me organize my thoughts.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "33. During class time I often miss important points because I'm thinking of other things.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '34. When studying for this course, I often try to explain the learning materials to a classmate or friend.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '35. I usually study in a place where I can concentrate on my course work. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '36. When reading for this course, I make up questions to help focus my reading.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '37. I often feel so lazy or bored when I study for this class that I quit before I finish what I planned to do. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '38. I often find myself questioning things I hear or read in this course to decide if I find them convincing. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '39. When I study for this class, I practice saying the learning materials to myself over and over.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '40. Even if I have trouble learning the materials in this class, I try to do the work on my own, without help from anyone. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "41. When I become confused about something I'm reading for this class, I go back and try to figure it out.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '42. When I study for this course, I go through the readings and my class notes and try to find the most important ideas. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '43. I make good use of my study time for this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '44. If course readings are difficult to understand, I change the way I read the learning materials.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '45. I try to work with other students from this class to complete the course assignments.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '46. When studying for this course, I read my class notes and the course readings over and over again. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '47. When a theory, interpretation, or conclusion is presented in class or in the readings, I try to decide if there is good supporting evidence.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "48. I work hard to do well in this dass even if I don't like what we are doing.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '49. I make simple charts, diagrams, or tables to help me organize course materials. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '50. When studying for this course, I often set aside time to discuss course materials with a group of students from the class.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '51. I treat the course materials as a starting point and try to develop my own ideas about it.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '52. I find it hard to stick to a study schedule.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '53. When I study for this class, I put together information from different sources, such as lectures, readings, and discussions.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '54. Before I study new course materials thoroughly, I often skim it to see how it is organized.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '55. I ask myself questions to make sure I understand the learning materials I have been studying in this class. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "56. I try to change the way I study in order to fit the course requirements and the instructor's teaching style.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "57. I often find that I have been reading for this class but don't know what it was all about.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "58. I ask the instructor to clarify concepts when I don't understand well. ",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '59. I memorize key words to remind me of important concepts in this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '60. When course work is difficult, I either give up or only study the easy parts. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '61. I try to think through a topic and decide what I am supposed to learn from it rather than just reading it over when studying for this course. ',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '62. I try to relate ideas in this subject to those in other courses whenever possible.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '63. When I study for this course, I go over my class notes and make an outline of important concepts.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '64. When reading for this class, I try to relate the learning material to what I already know.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '65. I have a regular place set aside for studying.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '66. I try to play around with ideas of my own related to what I am learning in this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '67. When I study for this course, I write brief summaries of the main ideas from the readings and my class notes.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "68. When I can't understand the material in this course, I ask another student in this class for help.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '69. I try to understand the material in this course by making connections between the readings and the concepts from the lectures.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '70. I make sure that I keep up with the weekly readings and assignments for this course.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '71. Whenever I read or hear an assertion or conclusion in this class, I think about possible alternatives.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '72. I make lists of important items for this course and memorize the lists.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title: '73. I attend this class regularly.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '74. Even when course materials are dull and un interesting, I manage to keep working until I finish.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '75. I try to identify students in this class whom I can ask for help if necessary.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "76. When studying for this course I try to determine which concepts I don't understand well.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            "77. I often find that I don't spend very much time on this course because of other activities.",
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '78. When I study for this class, I set goals for myself in order to direct my activities in each study period.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '79. If I get confused taking notes in class, I make sure I sort it out after wards.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '80. I rarely find time to review my notes or readings before an exam.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        },
        {
          itemType: 'question',
          questionType: 'likert',
          title:
            '81. I try to apply ideas from course readings in other class activities such as lecture and discussion.',
          topScale: 7,
          leftText: 'NOT AT ALL TRUE OF ME',
          rightText: 'VERY TRUE OF ME',
          selOption: -1
        }
      ]
    },
    {
      sectionTitle: 'ENGLISH PROFICIENCY',
      sectionDescription: '',
      items: [
        {
          itemType: 'question',
          questionType: 'multiple',
          title:
            '82. Question: How much do you use an English Translator to asnwer this survey?',
          options: [
            'VERY MUCH',
            'PARTIALLY, ONLY FOR SOME PARTS',
            'A LITTLE BIT, FOR SOME WORDS'
          ],
          selOption: -1
        }
      ]
    }
  ]
};
