const express = require('express');

const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

module.exports = app;