const Joi = require('@hapi/joi')

const schema = Joi.object({
    fullName: Joi.string().trim().required(),
    username: Joi.string().trim().required().min(3).max(15).regex(/[a-zA-Z0-9_]+/),
    email: Joi.string().trim().required().email(),
    password: Joi.string().required().min(8)
})

module.exports = schema