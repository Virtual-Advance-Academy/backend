const Joi = require("@hapi/joi");
const responses = require("../Utils/validResponses")

const schema = Joi.object({
    "question-0": Joi.string()
        .valid(
            ...responses.question0
        )
        .required(),
    "question-1": Joi.string()
        .valid(
            ...responses.question1
        )
        .required(),
    "question-2": Joi.array()
        .items(
            Joi.string().valid(
                ...responses.question2
            )
        )
        .required(),
    "question-3": Joi.string()
        .valid(
            ...responses.question3
        )
        .required(),
    "question-4": Joi.array()
        .items(
            Joi.string().valid(
                ...responses.question4
            )
        )
        .required(),
    "question-5": Joi.array()
        .items(
            Joi.string().valid(
                ...responses.question5
            )
        )
        .required(),
    "question-6": Joi.array()
        .items(
            Joi.string().valid(
                ...responses.question6
            )
        )
        .required(),
    "question-7": Joi.array()
        .items(
            Joi.string().valid(
                ...responses.question7
            )
        )
        .required(),
    "question-8": Joi.string()
        .valid(...responses.question8)
        .required(),
    "question-9": Joi.string()
        .valid(...responses.question9)
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
                ...responses.question17
            )
        )
        .required(),
    "question-18": Joi.string()
        .valid(...responses.question18)
        .required(),
    "question-19": Joi.string()
        .valid(...responses.question19)
        .required()
});

module.exports = schema;
