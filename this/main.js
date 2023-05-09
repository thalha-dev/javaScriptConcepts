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

globalThis.name = "Lark";
sayMyname();

console.log();
console.log("----------------Accio");

const u1 = {
  fname: "thalha",
  getname() {
    const fname = "salman";
    return this.fname;
  },
};

this.fname = "TH";

const u2 = {
  fname: "thalha",
  lname: this.fname,
  getname: () => {
    const fname = "salman";
    return this.fname;
  },
};

const u3 = {
  fname: "thalha3",
  getname() {
    const name = () => {
      return this.fname;
    };
    return name();
  },
};

const u4 = {
  name: "PC",
  logMessage() {
    console.log(this.name);
  },
};

const u40 = {
  name: "DC",
};

var obj = {
  myname: "javascripter",
};

function sayHello1() {
  return "hello " + this.myname;
}

function sayHello2(age, profession) {
  return "hello " + this.myname + " is " + age + ", " + profession;
}

const bindedFunction = sayHello2.bind(obj);

function sayHai(age) {
  return `${this.myname} is ${age} and says HI!`;
}

console.log("------------------normal funciton and this");
console.log(u1.getname());
console.log();
console.log("------------------arrow funciton and this");
console.log(u2.getname());
console.log(u2.lname);
console.log();
console.log("------------------arrow funciton inside normal function and this");
console.log(u3.getname());
console.log();
console.log("------------------setTimeout and this");
u4.logMessage();
// setTimeout(u4.logMessage, 1000);
// setTimeout(u4.logMessage.bind(u4), 1000);
// setTimeout(u4.logMessage.bind(u40), 1000);
// setTimeout(() => u4.logMessage(), 1000);
console.log();
console.log("------------------Call Bind Apply");
console.log(sayHello1());
console.log(sayHello1.call(obj));
console.log(sayHello2.apply(obj, [24, "Hacker"]));
console.log(bindedFunction(33, "Waste"));
console.log(sayHai.call(obj, 44));
console.log(sayHai.bind(obj, 24));
