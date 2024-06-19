const express = require('express');
const cors = require('cors');
const sanitizer = require('perfect-express-sanitizer');
const formRouter = require('../routes/form');
const userRouter = require('../routes/user');
const app = express();
const port = 3000;
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('startup');
app.use(
  cors(),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  sanitizer.clean({
    xss: true,
    noSql: false,
    sql: true,
    sqlLevel: 5,
    noSqlLevel: 5
  }),
);

try {
  require('fs').mkdirSync('./src/logging/logs');
} catch (e) {
  if (e.code != 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e);
    process.exit(1);
  }
}

app.use('/api/form', formRouter);
app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
  log.debug('This is in the app.use form function');
  log.error('Something went wrong:', err);
  res.status(err.status || 500);
});

app.listen(port, () => {
  log.debug('This is in the app.listen function');
  console.log(`Form API listening on http://localhost:${port}/api/form`);
  console.log(`User API listening on http://localhost:${port}/api/user`);
  log.info(`Express server listening on port ${port} with pid ${process.pid}`);
});

