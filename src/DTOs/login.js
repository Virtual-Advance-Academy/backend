const Joi = require('@hapi/joi')
const newUser = require('./newUser')


/**
 * @swagger
 * components:
 *  schemas:
 *      Login:
 *          type: object
 *          properties:
 *              username:
 *                  $ref: '#/components/schemas/User/properties/username'
 *              password:
 *                  $ref: '#/components/schemas/User/properties/password'
 */
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