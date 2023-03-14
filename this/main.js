// BINDING PRIORITY
// NEW -> EXPLICIT -. IMPLICIT -> DEFAULT

// IMPLICIT BINDING

const person = {
  name: "thalha",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();

// EXPLICIT BINDING

function sayMyname() {
  console.log(`My name is ${this.name}`);
}

sayMyname.call(person);

// NEW BINDING

function Person(name) {
  this.name = name;
}

const p1 = new Person("thalha");
const p2 = new Person("Elon Musk");

console.log(p1.name, p2.name);

// DEFAULT BINDING
// to global

globalThis.name = "Andrew Tate";
sayMyname();
