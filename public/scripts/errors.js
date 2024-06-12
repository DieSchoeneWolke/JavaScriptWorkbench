try {
  consold.log("Hello");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}

// Website functionality starts here

document.querySelector("#btn-1").addEventListener("click", function () {
// code here
});

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}