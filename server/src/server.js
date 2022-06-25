const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');

require('dotenv').config();
require('./db/db');

const app = express();
app.use(cors());
app.use(helmet());
app.use(volleyball);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
})