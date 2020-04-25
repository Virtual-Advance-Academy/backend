var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')
var cors = require('cors')

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Internship/Full-Time Site API',
      version: '1.0.0',
      description: 'API for \'How to land an Internship/Full-Time Job\'',
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

//MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// Router Imports
var usersRouter = require('./routes/users');
var deployTestRouter = require('./routes/deployTest');

var app = express();

app.use(helmet())
app.use(cors())
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Base Routes
app.use('/users', usersRouter);
app.use('/desployTest', deployTestRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    // we had a joi error, let's return a custom 400 json response
    res.status(400).json({
      type: err.type, // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString()
    });
  } else {
    // pass on to another error handler
    next(err);
  }
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ type: err.status, message: err.message });
});

module.exports = app;
