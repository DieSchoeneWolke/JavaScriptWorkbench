document.getElementById('updateUserForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const userData = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      department: document.getElementById('department').value,
      email: document.getElementById('email').value,
    };
  
    const userId = document.getElementById('userid').value;
  
    fetch(`http://127.0.0.1:3000/api/user/${userId}`, {
      method: 'PUT',
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
        document.getElementById('updateUserForm').reset();
      })
      .catch((error) => console.error('Error:', error));
  });