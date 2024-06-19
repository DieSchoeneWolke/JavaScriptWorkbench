document.getElementById('addUserForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const userData = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      department: document.getElementById('department').value,
      email: document.getElementById('email').value,
    };
  
    fetch('http://127.0.0.1:3000/api/user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById('addUserForm').reset();
      })
      .catch((error) => console.error('Error:', error));
  });