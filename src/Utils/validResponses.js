const questionKeys = require("./questionKeys") 

let responseMap = {
    question0: new Map ([
        [questionKeys.question0[1] ,"1st Year"],
        [questionKeys.question0[2] ,"2nd Year"],
        [questionKeys.question0[3] ,"3rd Year"],
        [questionKeys.question0[4] ,"4th Year"],
        [questionKeys.question0[5] ,"Past 4th Year"],
        [questionKeys.question0[6] ,"Masters"],
        [questionKeys.question0[7] ,"PhD"],
        [questionKeys.question0[8] ,"N/A"],
    ]),
    question1: new Map([
        [questionKeys.question1[1],"Computer Science"],
        [questionKeys.question1[2],"Computer Engineering"],
        [questionKeys.question1[3],"Information Technology"],
        [questionKeys.question1[4],"Management Information Systems"],
        [questionKeys.question1[5],"Mechanical Engineering"],
        [questionKeys.question1[6],"Electrical Engineering"],
        [questionKeys.question1[7],"Physics"],
        [questionKeys.question1[8],"IoT"],
        [questionKeys.question1[9],"Mathematics"],
        [questionKeys.question1[10],"Other"],
    ]),
    question2: new Map([
        [questionKeys.question2[1] ,"Software Programming"],
        [questionKeys.question2[2] ,"Program Management"],
        [questionKeys.question2[3] ,"Cyber Security"],
        [questionKeys.question2[4] ,"Artificial Intelligence"],
        [questionKeys.question2[5] ,"Hardware Programming"],
        [questionKeys.question2[6] ,"Robotics"],
        [questionKeys.question2[7] ,"Database Development"],
        [questionKeys.question2[8] ,"Advanced User Support"],
        [questionKeys.question2[9] ,"Networking"],
        [questionKeys.question2[10] ,"UI/UX"],
        [questionKeys.question2[11] ,"Other"],
    ]),
    question3: new Map([
        [questionKeys.question3[1] ,"Internship"],
        [questionKeys.question3[2] ,"Full-Time Position"],
        [questionKeys.question3[3] ,"Part-Time Position"],
        [questionKeys.question3[4] ,"Research"],
    ]),
    question4: new Map([
        [questionKeys.question4[1] ,"Google"],
        [questionKeys.question4[2] ,"Cisco"],
        [questionKeys.question4[3] ,"Adobe"],
        [questionKeys.question4[4] ,"Facebook"],
        [questionKeys.question4[5] ,"Nike"],
        [questionKeys.question4[6] ,"Uber"],
        [questionKeys.question4[7] ,"Microsoft"],
        [questionKeys.question4[8] ,"NASA"],
        [questionKeys.question4[9] ,"Lyft"],
        [questionKeys.question4[10] ,"Amazon"],
        [questionKeys.question4[11] ,"Twitter"],
        [questionKeys.question4[12] ,"Dell"],
        [questionKeys.question4[13] ,"Apple"],
        [questionKeys.question4[14] ,"Salesforce"],
        [questionKeys.question4[15] ,"Nvidia"],
        [questionKeys.question4[16] ,"Ultimate Software"],
        [questionKeys.question4[17] ,"Intel"],
        [questionKeys.question4[18] ,"LinkedIn"],
        [questionKeys.question4[19] ,"Citrix"],
        [questionKeys.question4[20] ,"IBM"],
        [questionKeys.question4[21] ,"Other"],
    ]),
    question5: new Map([
        [questionKeys.question5[15] ,"Industry Internship"],
        [questionKeys.question5[1] ,"Research Experience"],
        [questionKeys.question5[2] ,"Personal Projects"],
        [questionKeys.question5[3] ,"Shadowing Experience"],
        [questionKeys.question5[4] ,"Full-Time Job Experience"],
        [questionKeys.question5[16] ,"Internship/Job Offers"],
        [questionKeys.question5[5] ,"Mentoring student(s)"],
        [questionKeys.question5[6] ,"Being mentored by other student(s)"],
        [questionKeys.question5[7] ,"Being part of a computing group, club, etc"],
        [questionKeys.question5[8] ,"Attending a symposia or other computing events"],
        [questionKeys.question5[9] ,"Attending social events organized by the department"],
        [questionKeys.question5[10] ,"Attending a computing conference"],
        [questionKeys.question5[11] ,"Presenting work to other students (not classwork)"],
        [questionKeys.question5[12] ,"Networking with industry and other professionals"],
        [questionKeys.question5[13] ,"Interacting with students in different year(s)"],
        [questionKeys.question5[14] ,"None"],
    ]),
    question6: new Map([
        [questionKeys.question6[1] ,"Peers"],
        [questionKeys.question6[2] ,"Teaching or Learning Assistants"],
        [questionKeys.question6[3] ,"Faculty/Instructors"],
        [questionKeys.question6[4] ,"Online Courses (LinkedIn Learning, LeetCode, Khan Academy, Code.org, etc)"],
        [questionKeys.question6[5] ,"Reading"],
        [questionKeys.question6[6] ,"Videos"],
        [questionKeys.question6[7] ,"Personal Projects"],
        [questionKeys.question6[8] ,"Hackathons"],
        [questionKeys.question6[9] ,"Class Assignments"],
        [questionKeys.question6[10] ,"Class Lectures"],
        [questionKeys.question6[11] ,"Campus workshops by clubs and organizations on campus"],
        [questionKeys.question6[12] ,"Other"],
    ]),
    question7: new Map([
        [questionKeys.question7[1] ,"GitHub"],
        [questionKeys.question7[2] ,"LinkedIn"],
        [questionKeys.question7[3] ,"Personal Website"],
        [questionKeys.question7[4] ,"LeetCode Account"],
        [questionKeys.question7[5] ,"HackerRank Account"],
        [questionKeys.question7[6] ,"None of the above"],
    ]),
    question8: new Map([
        [questionKeys.question8[1],"0"],
        [questionKeys.question8[2],"1-3"],
        [questionKeys.question8[3],"4-6"],
        [questionKeys.question8[4],"7-9"],
        [questionKeys.question8[5],"10+"],
    ]),
    question9: new Map([
        [questionKeys.question9[1],"0"],
        [questionKeys.question9[2],"1-3"],
        [questionKeys.question9[3],"4-6"],
        [questionKeys.question9[4],"7-9"],
        [questionKeys.question9[5],"10+"],
    ]),
    question16: new Map([
        [questionKeys.question16[1] ,"American Indian or Alaska Native"],
        [questionKeys.question16[2] ,"Asian"],
        [questionKeys.question16[3] ,"Black or African American"],
        [questionKeys.question16[4] ,"Hispanic, Latinx, or Spanish Origin"],
        [questionKeys.question16[5] ,"Middle Easter or North African"],
        [questionKeys.question16[6] ,"Native Hawaiian or Other Pacific Islander"],
        [questionKeys.question16[7] ,"White"],
        [questionKeys.question16[8] ,"Another race or ethnicity not listed above"],
    ]),
    question17: new Map([
        [questionKeys.question17[1] ,"Female"],
        [questionKeys.question17[2] ,"Male"],
        [questionKeys.question17[3] ,"Transgender"],
        [questionKeys.question17[4] ,"A gender not listed"],
    ]),
    question18: new Map([
        [questionKeys.question18[1], "0"],
        [questionKeys.question18[2], "1-5"],
        [questionKeys.question18[3], "6-10"],
        [questionKeys.question18[4], "11-15"],
        [questionKeys.question18[5], "16-20"],
        [questionKeys.question18[6], "21+"],
    ]),
}

let responsesByModule = {
    interviewGod: {
        criteriaQ8: [
            responseMap.question8.get(questionKeys.question8[5]),
        ],
        criteriaQ9: [
            responseMap.question9.get(questionKeys.question9[5]),
        ],
    },
    m1: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[15]),
            responseMap.question5.get(questionKeys.question5[16])
        ],
    },
    m2: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[7]),
            responseMap.question5.get(questionKeys.question5[8]),
            responseMap.question5.get(questionKeys.question5[9]),
            responseMap.question5.get(questionKeys.question5[10]),
            responseMap.question5.get(questionKeys.question5[11]),
            responseMap.question5.get(questionKeys.question5[12]),
            responseMap.question5.get(questionKeys.question5[13]),
        ],
    },
    m3: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[15]),
            responseMap.question5.get(questionKeys.question5[2]),
            responseMap.question5.get(questionKeys.question5[3]),
            responseMap.question5.get(questionKeys.question5[4]),
            responseMap.question5.get(questionKeys.question5[5]),
            responseMap.question5.get(questionKeys.question5[6]),
            responseMap.question5.get(questionKeys.question5[7]),
            responseMap.question5.get(questionKeys.question5[10]),
        ],
    },
    m4: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[15]),
            responseMap.question5.get(questionKeys.question5[16])
        ],
    },
    m5: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[15]),
            responseMap.question5.get(questionKeys.question5[16])
        ],
    },
    m6: {
        
    },
    m7: {
        criteriaQ7: [
            responseMap.question7.get(questionKeys.question7[1]),
            responseMap.question7.get(questionKeys.question7[3]),
            responseMap.question7.get(questionKeys.question7[4]),
            responseMap.question7.get(questionKeys.question7[5]),
        ],
        criteriaQ8: [
            responseMap.question8.get(questionKeys.question8[4]),
            responseMap.question8.get(questionKeys.question8[5]),
        ],
        criteriaQ9: [
            responseMap.question9.get(questionKeys.question9[4]),
            responseMap.question9.get(questionKeys.question9[5]),
        ],
        criteriaQ18: [
            responseMap.question18.get(questionKeys.question18[6]),
        ],  
    },
    m8: {
        questionX: [],
    },
    m9: {
        questionX: [],
    },
    m10: {
        questionX: [],
    },
    m11: {
        criteriaQ5: [
            responseMap.question5.get(questionKeys.question5[10]),
            responseMap.question5.get(questionKeys.question5[11]),
            responseMap.question5.get(questionKeys.question5[12]),
        ],
        criteriaQ9: [
            responseMap.question9.get(questionKeys.question9[4]),
            responseMap.question9.get(questionKeys.question9[5]),
        ]
    },
};

let responses = {
    question0: Array.from(responseMap.question0.values()),
    question1: Array.from(responseMap.question1.values()),
    question2: Array.from(responseMap.question2.values()),
    question3: Array.from(responseMap.question3.values()),
    question4: Array.from(responseMap.question4.values()),
    question5: Array.from(responseMap.question5.values()),
    question6: Array.from(responseMap.question6.values()),
    question7: Array.from(responseMap.question7.values()),
    question8: Array.from(responseMap.question8.values()),
    question9: Array.from(responseMap.question9.values()),
    question16: Array.from(responseMap.question16.values()),
    question17: Array.from(responseMap.question17.values()),
    question18: Array.from(responseMap.question18.values()),
};

module.exports = { responses, responsesByModule };
