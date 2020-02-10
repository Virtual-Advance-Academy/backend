const Joi = require('@hapi/joi')
const newUser = require('./newUser')

const schema = Joi.object({
    username: Joi.alternatives(
        [
            newUser.extract('username'),
            newUser.extract('email')
        ]).messages({
            "alternatives.match": "Username must be a valid email or valid username"
        }),
    password: newUser.extract('password')
})

module.exports = schema