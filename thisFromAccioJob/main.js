// *****************************************************************
//
// In normal fun 'This' will point towards enclosing parent object
// In arrow fun 'This' will point towards 'This' of enclosing normal fun
//
// *****************************************************************

this.a = 5;

function getParam() {
  console.log(this.a);
}

getParam = () => {
  console.log(this.a);
};

// getParam();

let user = {
  name: "thalha",
  age: "22",
  getDetails() {
    console.log(this.name);
  },
};

// user.getDetails();

user = {
  name: "sam",
  age: "21",
  childObj: {
    newName: "sami",
    getDetails() {
      console.log(this.newName, " and ", this.name);
    },
  },
  getDetails2() {
    console.log(this.newName, " and ", this.name);
  },
};

// user.childObj.getDetails();
// user.getDetails2();

// this.name = "human 007";

user = {
  name: "thalha",
  age: "22",
  getDetails: () => {
    console.log(this.name);
  },
};

// user.getDetails();

let variableAccessTestObject = {
  a: "a",
};

// console.log(variableAccessTestObject.objPropNotExist); // undefined
// console.log(variableAccessTestObject.objPropNotExist.innerPropNotExist); // error

user = {
  name: "thalha",
  age: "22",
  getDetails() {
    const nestedArrowFun = () => {
      console.log(this.name);
    };
    nestedArrowFun();
  },
};

// user.getDetails();

user = {
  name: "jhon",
  age: "22",
  getDetails() {
    const name = "luke";
    return this.name;
  },
};

// console.log(user.getDetails());

user = {
  name: "jhon2",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000);
