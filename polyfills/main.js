// polyfill for call method

Function.prototype.myCall = function (obj, ...args) {
  obj.attachedFunction = this;
  return obj.attachedFunction(...args);
};

// polyfill for apply method

Function.prototype.myApply = function (obj, args = []) {
  obj.attachedFunction = this;
  return obj.attachedFunction(...args);
};

// polyfill for bind method

Function.prototype.myBind = function (obj, ...args) {
  obj.attachedFunction = this;
  return function (...newArgs) {
    return obj.attachedFunction(...args, ...newArgs);
  };
};

// polyfill for map method

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};

// polyfill for map method

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

// polyfill for reduce method

Array.prototype.myReduce = function (callBack, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? callBack(accumulator, this[i], i) : this[i];
  }
  return accumulator;
};

const obj = {
  name: "java",
};

function sayHellow(age) {
  return "hellow " + this.name + ", you are " + age + " old!";
}

let arr = [1, 2, 3, 4];
let modifiedArray = arr.myMap((num, i) => {
  return num + i;
});

let filteredArray = arr.myFilter((num) => {
  return num > 3;
});
let reducedResult = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log();
console.log("-----------------------------call polyfill");
console.log(sayHellow.myCall(obj, 33));
console.log("-----------------------------apply polyfill");
console.log(sayHellow.myApply(obj, [37]));
console.log("-----------------------------bind polyfill");
let bindedfunction = sayHellow.myBind(obj, 23);
console.log(bindedfunction());
console.log("-----------------------------map polyfill");
console.log(modifiedArray);
console.log("-----------------------------filter polyfill");
console.log(filteredArray);
console.log("-----------------------------reduce polyfill");
console.log(reducedResult);
