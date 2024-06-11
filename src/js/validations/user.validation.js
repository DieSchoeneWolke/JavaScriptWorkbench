const userDataValidate = (req, res, next) => {
  let errorMessage = "";
  if (!req.body.fname) {
    errorMessage = "Firstname is required!";
  }
  if (!req.body.lname) {
    errorMessage = "Lastname is required!";
  }
  if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(req.body.email)) {
    errorMessage = "Provide a valid email address!";
  }
  if (!req.body.subject) {
    errorMessage = "Subject is required!";
  }

  // send error
  if (errorMessage) {
    return res.status(400).json({ success: false, errorMessage });
  }

  next();
};

module.exports = {
  userDataValidate
};