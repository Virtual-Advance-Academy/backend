var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')
const UserDto = require('../DTOs/newUser')
const LoginDto = require('../DTOs/login')
const validator = require('express-joi-validation').createValidator({ passError: true })

/* GET users listing. */
/**
 * @swagger
 * /users:
 *    get:
 *      description: This should output 'Test'
 *      responses:
 *        '200':
 */
router.get('/', (req, res, next) => {
  res.json('Test');
});

/**
 * @swagger
 * /users:
 *    post:
 *      description: Register a new user
 *      
 */
router.post('/', validator.body(UserDto), async (req, res) => {

  //Copy username to help with uniqueness lookup in the database
  req.body.username_lower = req.body.username

  try {
    //Hash the user's password
    req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS))

    let user = new User(req.body)
    const newUser = await user.save();

    //Don't expose the user's password hash when returned
    delete newUser.password

    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

/**
 * @swagger
 * /users/auth:
 *    post:
 *      description: Authenticate a user
 *      
 */
router.post('/auth', validator.body(LoginDto), (req, res) => {
  let id = req.body.email || req.body.username;
  
})

module.exports = router;
