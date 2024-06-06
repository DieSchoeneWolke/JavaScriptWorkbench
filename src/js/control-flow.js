const time = new Date().getHours();
let greeting;

try {
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
}
catch (err) {
  document.getElementById("demo").innerHTML = err.message;
}

// Website functionality starts here

document.querySelector("#btn-1").addEventListener("click", function () {
  alert(greeting);
  if (greeting !== "Good day") {
    document.body.style.backgroundColor = "LemonChiffon";
  }
});

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}