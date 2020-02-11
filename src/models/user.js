const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    username_lower: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
})


/**
 * This needs to stay as a regular function.
 * More info: https://stackoverflow.com/questions/36794709/inside-schema-method-scopes-this-is-empty-in-mongoose-4-4-12
 */
userSchema.methods.generateAuthToken = function () {
    // Generate an auth token for the user
    const user = this

    const payload = {
        _id: user._id,
        name: user.fullName,
        scope: ['self']
    }

    const token = jwt.sign(payload, process.env.JWT_TOKEN)
    return token
}

userSchema.statics.verifyUser = async (emailOrUsername, password) => {
    emailOrUsername = emailOrUsername.toLowerCase()
    // Search for a user by email and password.
    let user = await User.findOne({
        $or: [{ email: emailOrUsername }, { username_lower: emailOrUsername }]
    })
    if (!user) {
        throw new Error('Invalid login credentials')
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error('Invalid login credentials')
    }
    return user
}

userSchema.plugin(uniqueValidator, { message: 'Error, {VALUE} already exists.' });

const User = mongoose.model('User', userSchema)

module.exports = User