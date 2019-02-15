const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const localJwtStrategy = require('./config/strategies/local.jwt');
const cors = require('cors');

const app = express();

passport.use(localJwtStrategy.strategy);

app.options('*', cors());

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

require('./modules/auth/routes/auth.routes')(app);
require('./modules/parcel/routes/parcel.routes')(app, passport);
require('./modules/tractor/routes/tractor.routes')(app, passport);
require('./modules/processed-parcel/routes/processed-parcel.routes')(
  app,
  passport,
);

module.exports = app;
