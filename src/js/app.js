

// Website functionality starts here
document.querySelector("#btn-1").addEventListener("click", function () {
  // Code here
});

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

