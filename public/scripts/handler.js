const { getFormData, sendFormData }  = require ('./contact');

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = getFormData();
    sendFormData(formData);
  });

  function getFormData() {
    return {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      department: document.getElementById('department').value,
      subject: document.getElementById('subject').value,
    };
  }