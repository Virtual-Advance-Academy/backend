const dotenv = require("dotenv");
const envFile =
    process.env.NODE_ENV && process.env.NODE_ENV !== "production"
        ? `.env.${process.env.NODE_ENV}`
        : ".env";
console.log("env file: ", envFile);
dotenv.config({ path: envFile });