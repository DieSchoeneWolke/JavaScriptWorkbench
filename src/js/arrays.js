class MyClass {
    constructor() {
        this.numbers = [1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27];
    }
}

const myObject = new MyClass();

function modifyArray(arr, push, seperator, trim) {
    const reversedArray = arr.slice().reverse();
    reversedArray.push(push);
    reversedArray.pop();
    const joinedString = reversedArray.join(seperator);
    const trimmedString = joinedString.trim(trim);
    //console.log('trimmedString:', trimmedString);
    const copiedArray = loopArray(reversedArray);
    return { trimmedString, copiedArray };
}

function loopArray(loop) {
    const loopedArray = loop.map(w => w * 2);
    //console.log('loopedArray:', loopedArray);
    return loopedArray
}

function modifyAndLoopArray(arr, push, seperator, trim) {
    const modifiedString = modifyArray(arr, push, seperator, trim);
    return modifiedString;
}


// Website functionality starts here

const popup = document.querySelector("#btn-1").addEventListener("click", function () {
    const printNumbers = modifyAndLoopArray(myObject.numbers, 'Hello World ', '.');
    const result = printNumbers.trimmedString + '\n' + printNumbers.copiedArray.join(', ');
    alert(result);
    //setTimeout(function() { alert(result); }, 300); 
    //timer();
});

function responsiveTopnav() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


/* 
If the button is clicked again within that time period redirect to another page

timer = setTimeout(function() {
    if (document.querySelector("#btn-1").addEventListener("click" , function() {
      window.location.href = "https://www.ddg.gg";
    } else {
    //
    }
  }, 300);

*/