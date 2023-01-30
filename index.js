const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e));

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));



app.use('/', indexRouter);

app.listen(8801, ()=> {
  console.log("Backend server is running!")
})
