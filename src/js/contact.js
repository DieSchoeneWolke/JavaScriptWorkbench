document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    subject: document.getElementById('subject').value,
  };

  fetch('http://127.0.0.1:3000/api/send', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
});


// TODO: Add a React component to dynamically popup the alert 
/* 
document.getElementById('submit-button').addEventListener('click', function (event) {
  alert('Form has been submitted!');
}); 
*/

// Website functionality starts here

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}