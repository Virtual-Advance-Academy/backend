const Joi = require('@hapi/joi')

const schema = Joi.object({
    fullName: Joi.string().trim().required(),
    username: Joi.string().required().min(3).message("Username must be more than 3 characters")
        .max(15).regex(/^[a-zA-Z0-9_]+$/)
        .message("Usernames may only contain numbers, letters, and underscores"),
    email: Joi.string().trim().required().email(),
    password: Joi.string().required().min(8)
})

module.exports = schema