require('dotenv').config();
const express = require('express');
const conn = require('./db/conn');
const dotenv = require('dotenv');
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(routes);

dotenv.config();

conn();

module.exports = app;