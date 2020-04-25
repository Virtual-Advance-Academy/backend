const Joi = require('@hapi/joi')

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              fullName:
 *                  type: string
 *                  example: James Bond
 *              username:
 *                  type: string
 *                  maxLength: 15
 *                  pattern: /^[a-zA-Z0-9_]+$/
 *                  example: JBond007
 *              email:
 *                  type: string
 *                  format: email
 *                  example: jamesb@mi6.gov.uk
 *              password:
 *                  type: string
 *                  minLength: 8
 *                  format: password
 *                  example: shakenN0t$tirred!
 */
const schema = Joi.object({
    fullName: Joi.string().trim().required(),
    username: Joi.string().required().min(3).message("Username must be more than 3 characters")
        .max(15).regex(/^[a-zA-Z0-9_]+$/)
        .message("Usernames may only contain numbers, letters, and underscores"),
    email: Joi.string().trim().required().email(),
    password: Joi.string().required().min(8)
})

module.exports = schema