class MyClass {
  constructor() {
    return new Promise((resolve, reject) => {
      this.numbers = [1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27];
      resolve(this);
    });
  }
}

const myClassPromise = new MyClass();

function buttonClick() {
  myClassPromise
    .then((result) => {
      return result.numbers.map((number) => number * 2);
    })
    .then((result) => {
      return result.map((number) => number * 2);
    })
    .then((result) => {
      return result.map((number) => number * 2);
    })
    .then((result) => {
      alert(result);
    });
}

// Website functionality starts here

document.querySelector("#btn-1").addEventListener("click", function () {
  buttonClick();
});

function responsiveTopnav() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}