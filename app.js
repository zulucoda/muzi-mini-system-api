const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./modules/parcel/routes/parcel.routes')(app);
require('./modules/tractor/routes/tractor.routes')(app);
require('./modules/processed-parcel/routes/processed-parcel.routes')(app);

module.exports = app;
