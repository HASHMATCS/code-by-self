const express = require('express');

const router = require('./routers/router');
const globalErrorHandler = require('./controllers/errorcontroller')
const AppError = require('./utils/appError');
const app = express();


app.use(express.json());


app.use('/api/v1/user',router);

app.all('*', (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
})


app.use(globalErrorHandler);

module.exports = app;






















// {
//   "name": "nators",
//   "version": "1.0.0",
//   "lockfileVersion": 2,
//   "requires": true,
//   "packages": {
//     "": {
//       "name": "nators",
//       "version": "1.0.0",
//       "license": "ISC"
//     }
//   }
// }