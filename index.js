const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const instructorRouter = require('./routes/instructors');
const studentRouter = require('./routes/students');
require('./mongo-connection');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/', indexRouter);
app.use('/api/instructors', instructorRouter);
app.use('/api/students', studentRouter);

module.exports = app;