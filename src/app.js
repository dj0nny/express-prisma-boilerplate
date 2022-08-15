const express = require('express');

const errorMiddleware = require('./middleware/error.middleware');

const apiRoute = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.use(errorMiddleware);

module.exports = app;