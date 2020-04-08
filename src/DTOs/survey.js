const Joi = require("@hapi/joi");

const schema = Joi.object({
    "question-0": Joi.string()
        .valid(
            "1st Year",
            "2nd Year",
            "3rd Year",
            "4th Year",
            "Past 4th Year",
            "Masters",
            "PhD",
            "N/A"
        )
        .required(),
    "question-1": Joi.string()
        .valid(
            "Computer Science",
            "Computer Engineering",
            "Information Technology",
            "Management Information Systems",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Physics",
            "IoT",
            "Mathematics",
            "Other"
        )
        .required(),
    "question-2": Joi.array()
        .items(
            Joi.string().valid(
                "Software Programming",
                "Program Management",
                "Cyber Security",
                "Artificial Intelligence",
                "Hardware Programming",
                "Robotics",
                "Database Development",
                "Advanced User Support",
                "Networking",
                "UI/UX",
                "Other"
            )
        )
        .required(),
    "question-3": Joi.string()
        .valid(
            "Internship",
            "Full-Time Position",
            "Part-Time Position",
            "Research"
        )
        .required(),
    "question-4": Joi.array()
        .items(
            Joi.string().valid(
                "Google",
                "Cisco",
                "Adobe",
                "Facebook",
                "Nike",
                "Uber",
                "Microsoft",
                "NASA",
                "Lyft",
                "Amazon",
                "Twitter",
                "Dell",
                "Apple",
                "Salesforce",
                "Nvidia",
                "Ultimate Software",
                "Intel",
                "LinkedIn",
                "Citrix",
                "IBM",
                "Other"
            )
        )
        .required(),
    "question-5": Joi.array()
        .items(
            Joi.string().valid(
                "Industry Internship",
                "Research Experience",
                "Personal Projects",
                "Shadowing Experience",
                "Full-Time Job Experience",
                "Internship/Job Offers",
                "Mentoring student(s)",
                "Being mentored by other student(s)",
                "Being part of a computing group, club, etc",
                "Attending a symposia or other computing events",
                "Attending social events organized by the department",
                "Attending a computing conference",
                "Presenting work to other students (not classwork)",
                "Networking with industry and other professionals",
                "Interacting with students in different year(s)",
                "None"
            )
        )
        .required(),
    "question-6": Joi.array()
        .items(
            Joi.string().valid(
                "Peers",
                "Teaching or Learning Assistants",
                "Faculty/Instructors",
                "Online Courses (LinkedIn Learning, LeetCode, Khan Academy, Code.org, etc)",
                "Reading",
                "Videos",
                "Personal Projects",
                "Hackathons",
                "Class Assignments",
                "Class Lectures",
                "Campus workshops by clubs and organizations on campus",
                "Other"
            )
        )
        .required(),
    "question-7": Joi.array()
        .items(
            Joi.string().valid(
                "GitHub",
                "LinkedIn",
                "Personal Website",
                "LeetCode Account",
                "HackerRank Account",
                "None of the above"
            )
        )
        .required(),
    "question-8": Joi.string()
        .valid("0", "1-3", "4-6", "7-9", "10+")
        .required(),
    "question-9": Joi.string()
        .valid("0", "1-3", "4-6", "7-9", "10+")
        .required(),
    "question-10-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-10-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-10-2": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-10-4": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-10-3": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-10-5": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-11-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-11-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-11-2": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-11-3": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-11-4": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-12-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-12-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-12-2": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-13-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-13-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-13-2": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-14-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-14-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-14-2": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-15-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-15-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-16-0": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-16-1": Joi.number()
        .min(1)
        .max(5)
        .required(),
    "question-17": Joi.array()
        .items(
            Joi.string().valid(
                "American Indian or Alaska Native",
                "Asian",
                "Black or African American",
                "Hispanic, Latinx, or Spanish Origin",
                "Middle Easter or North African",
                "Native Hawaiian or Other Pacific Islander",
                "White",
                "Another race or ethnicity not listed above"
            )
        )
        .required(),
    "question-18": Joi.string()
        .valid("Female", "Male", "Transgender", "A gender not listed")
        .required(),
    "question-19": Joi.string()
        .valid("0", "1-5", "6-10", "11-15", "16-20", "21+")
        .required()
});

module.exports = schema;
