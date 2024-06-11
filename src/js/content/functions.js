const person = {
    firstName: "John",
    lastName: "Doe",
    message: "Refresh the page to stop the spam!",
    display: function () {
        return this.firstName + " " + this.lastName + "\n" + this.message;
    },
}

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