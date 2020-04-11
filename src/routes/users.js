var express = require("express");
var router = express.Router();
const jwt = require("express-jwt");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const UserDto = require("../DTOs/newUser");
const LoginDto = require("../DTOs/login");
const SurveyDto = require("../DTOs/survey");
const validator = require("express-joi-validation").createValidator({
    passError: true
});
const makeCompletion = require("../Utils/makeCompletion")

/* GET users listing. */
/**
 * @swagger
 * /users:
 *    get:
 *      description: This should output 'Test'
 *      responses:
 *        '200':
 */
router.get("/", (req, res, next) => {
    res.json("Test");
});

router.get(
    "/profile",
    jwt({ secret: process.env.JWT_TOKEN }),
    async (req, res, next) => {
        let user = await User.findById(req.user._id, "fullName username email");

        if (!user) res.status(400).json({ message: "Invalid User ID" });

        res.json(user);
    }
);

/**
 * @swagger
 * /users:
 *    post:
 *      description: Register a new user
 *
 */
router.post("/", validator.body(UserDto), async (req, res) => {
    //Copy username to help with uniqueness lookup in the database
    req.body.username_lower = req.body.username;

    try {
        //Hash the user's password
        req.body.password = await bcrypt.hash(
            req.body.password,
            parseInt(process.env.SALT_ROUNDS)
        );

        let user = new User(req.body);
        const newUser = await user.save();

        //Don't expose the user's password hash when returned
        delete newUser.password;

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /users/auth:
 *    post:
 *      description: Authenticates a user by returning a JWT
 *
 */
router.post("/auth", validator.body(LoginDto), async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.verifyUser(username, password);
        const token = await user.generateAuthToken();
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /users/survey:
 *    post:
 *      description: Updates the survey data for an authenticated user and
 *
 */
router.post(
    "/survey",
    validator.body(SurveyDto),
    jwt({ secret: process.env.JWT_TOKEN }),
    async (req, res) => {
        //Generate completion object
        let completion = makeCompletion(req.body);
        try {
            let user = await User.findByIdAndUpdate(req.user._id, {
                survey: req.body,
                completedSurvey: true,
                completion
            });
            user = await User.findById(req.user._id);
            const token = await user.generateAuthToken();
            res.json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
);

module.exports = router;
