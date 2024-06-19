const tableBody = document.getElementById('userTable');

fetch('http://127.0.0.1:3000/api/user/', {
  method: 'GET'
})
  .then(response => response.json())
  .then(users => {
    users.data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>
        <td>${user.department}</td>
        <td>${user.email}</td>
        <td><button onclick="confirmDelete(${user.id})">❌</button></td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function confirmDelete(userId) {
  if (confirm(`Are you sure you want to delete the user with the ID: ${userId}?`)) {
    deleteUser(userId);
  }
}

function deleteUser(userId) {
  fetch(`http://127.0.0.1:3000/api/user/${userId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        location.reload();
      } else {
        console.error('Failed to delete user');
      }
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
}


function searchInput() {
  let filter = document.querySelector('#searchInput').value.toUpperCase();
  let myTable = document.querySelector("table");
  let tr = myTable.getElementsByTagName('tr');

  for (let i = 0; i < tr.length; i++) {
    if (i === 0) { // Skip the header row
      tr[i].style.display = "";
      continue;
    }

    let row = tr[i];
    let displayRow = false;

    for (let j = 0; j < row.cells.length; j++) {
      let td = row.cells[j];
      if (td) {
        let textVal = td.textContent || td.innerHTML;
        if (textVal.toUpperCase().indexOf(filter) > -1) {
          displayRow = true;
          break;
        }
      }
    }

    if (displayRow) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

document.getElementById('searchInput').addEventListener('input', searchInput);

// Website functionality starts here

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  x.classList.add("responsive");
}