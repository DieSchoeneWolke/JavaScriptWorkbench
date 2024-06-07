const express = require('express');
const app = express();
const cors = require('cors');
const sanitizer = require('perfect-express-sanitizer');
const { userDataValidate } = require('../validations/user.validation');
const PORT = 3000;
app.use(cors(), express.json(), sanitizer.clean({
  xss: true,
  noSql: false,
  sql: true,
  sqlLevel: 5,
  noSqlLevel: 5
},
));

app.post('/api/send', userDataValidate, (req, res) => {
  const { body } = req;
  console.log({ body });
  res.send('Form submitted successfully!');
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});


// TODO: Figure out how to write the formdata to different tables
// depending on the selection the user did in the html form.

/*
const mySQL = require('../../db/db_connect');
const getTableName = require ('./contact');

 app.post('/api/send', userDataValidate, (req, res) => {
  const { body } = req;
  console.log({ body });

  mySQL();

  let rb = req.body;
  const tableName = getTableName(selectedOption);
  const sqli = `INSERT INTO ${tableName} SET @id = ?; SET @fname = ?; SET @lname = ?; SET @subject = ?;`;

  mySQL.query(
    sqli,
    [rb.id, rb.fname, rb.lname, rb.subject],
    (err, results, fields) => {
      if (!err) {
        results.forEach((element) => {
          if (Array.isArray(element)) res.send(element);
        });
      } else {
        console.log(err);
      }
    }
  );

  mySQL.end();

  res.send('Form submitted successfully!');
}); */