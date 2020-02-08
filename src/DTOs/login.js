const Joi = require('@hapi/joi')
const newUser = require('./newUser')

const schema = Joi.object({
    username: newUser.extract('username').optional(),
    email: newUser.extract('email').optional(),
    password: newUser.extract('password')
}).xor('username','email')

module.exports = schema