const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
console.log(envFile)
dotenv.config({path: envFile})