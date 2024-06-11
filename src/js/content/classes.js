// Constructor Blueprint starts here
class Construct0r {
    constructor(firstName, lastName, age, eyeColor, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.nationality = nationality;
    }
}

// Constructor definition starts here
firstConstructor = new Construct0r("Max", "Meier", 33, "brown", "german");

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name + '!!!';
    }
    set name(newValue) {
        this._name = newValue;
    }
}

class Clothing extends Person {
    constructor (name, brand, color) {
        super(name)
        this._brand = brand;
        this._color = color;
    }
    get brand() {
        return this._brand;
    }
    set brand(newValue) {
        this._brand = newValue;
    }
    get color() {
        return this._color;
    }
    set color(newValue) {
        this._color = newValue;
    }
    get fullDescription() {
        return `${this.name} ${this.brand} ${this.color}`;
    }
}

const me = new Clothing('Zach', 'whateverBrand', 'red')
me.name = 'Jacob'

// Website functionality starts here

document.querySelector("#btn-1").addEventListener("click", function () {
    alert(me.fullDescription);
});

function responsiveTopnav() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}