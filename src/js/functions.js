const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        return this.firstName + " " + this.lastName;
    },
}

//let temp2 = person.display.bind(person);

function tick() {
  alert(person.display());
}

// Website functionality starts here

document.querySelector("#btn-1").addEventListener("click", function () {
    setInterval(tick.bind(person), 300);
});

function responsiveTopnav() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /* function Greeting() {
    alert('Hello!');
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  } */