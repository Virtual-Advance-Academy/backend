const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const moduleCompletionSchema = new Schema(
    {
        // Percentage (0-100) already completed via survey
        initialCompletion: {
            type: Number,
            required: true,
        },
        // Total    Percentage (0-100) completed so far
        currentCompletion: {
            type: Number,
            required: true,
        },
    },
    { _id: false }
);

const completionSchema = new Schema(
    {
        "module-1": moduleCompletionSchema,
        "module-2": moduleCompletionSchema,
        "module-3": moduleCompletionSchema,
        "module-4": moduleCompletionSchema,
        "module-5": moduleCompletionSchema,
        "module-6": moduleCompletionSchema,
        "module-7": moduleCompletionSchema,
        "module-8": moduleCompletionSchema,
        "module-9": moduleCompletionSchema,
        "module-10": moduleCompletionSchema,
        "module-11": moduleCompletionSchema,
    },
    { _id: false }
);

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    username_lower: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    completedSurvey: {
        type: Boolean,
        default: false,
    },
    survey: {
        type: Object,
    },
    completion: completionSchema,
});

/**
 * This needs to stay as a regular function.
 * More info: https://stackoverflow.com/questions/36794709/inside-schema-method-scopes-this-is-empty-in-mongoose-4-4-12
 */
userSchema.methods.generateAuthToken = function () {
    // Generate an auth token for the user
    const user = this;

    const payload = {
        _id: user._id,
        name: user.fullName,
        completedSurvey: user.completedSurvey,
        scope: ["self"],
    };

    const token = jwt.sign(payload, process.env.JWT_TOKEN);
    return token;
};

userSchema.statics.verifyUser = async (emailOrUsername, password) => {
    emailOrUsername = emailOrUsername.toLowerCase();
    // Search for a user by email and password.
    let user = await User.findOne({
        $or: [{ email: emailOrUsername }, { username_lower: emailOrUsername }],
    });
    if (!user) {
        throw new Error("Invalid login credentials");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid login credentials");
    }
    return user;
};

userSchema.plugin(uniqueValidator, {
    message: "Error, {VALUE} already exists.",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
