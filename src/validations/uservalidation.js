const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('input');

const userDataValidate = (req, res, next) => {
  log.debug('This is in the userDataValidate variable');
  let inputError = '';
  if (!req.body.fname) {
    inputError = 'Firstname is required!';
  }
  if (!req.body.lname) {
    inputError = 'Lastname is required!';
  }
  if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(req.body.email)) {
    inputError = 'Provide a valid email address!';
  }
  if (!(req.body.department === 'controlling' || req.body.department === 'hr' || req.body.department === 'sales')) {
    inputError = 'Department must be either controlling, hr or sales!';
  }
  if (!req.body.subject) {
    inputError = 'Subject is required!';
  }
  
  if (inputError) {
    return res.status(400).json({ inputError });
  }

  next();
};

module.exports = {
  userDataValidate
};