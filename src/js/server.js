const express = require('express');
const app = express();
const cors = require('cors');
const sanitizer = require('perfect-express-sanitizer');
app.use(cors(), express.json(), sanitizer.clean({
  xss: true,
  noSql: false,
  sql: true,
  sqlLevel: 5,
  noSqlLevel: 5
},
));
const { userDataValidate } = require('../validations/user.validation');
const PORT = 3000;

app.get('/api/send', (req, res) => {
  res.send('Welcome on the form API!');
});

app.post('/api/send', userDataValidate, (req, res) => {
  const { body } = req;
  console.log({ body });
  res.send('Form submitted successfully!');
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});

