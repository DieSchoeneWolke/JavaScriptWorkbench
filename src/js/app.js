const express = require("express");
const cors = require('cors');
const sanitizer = require('perfect-express-sanitizer');
const formRouter = require("./routes/form");
const { userDataValidate } = require('./validations/user.validation');
const app = express();
const port = 3000;
app.use(cors(), express.json());
app.use(
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

app.use("/api/send", userDataValidate, formRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Form API listening on http://localhost:${port}`);
});