let u1 = {
  name1: "AA",
  age: 33,
  status: "student",
  getInfo: function () {
    console.log(this.name1 + " " + this.age);
  },
};

const key = "mr.Key";
const value = "mrs.Value";
const u2 = {
  key: value,
  getInfo: function () {
    console.log(this.key);
  },
};

const strobj = JSON.stringify(u1);

const admin = {
  admin: true,
  ...u1,
};

const { name1, one, age } = u1;
const { name1: n, age: d } = u1;

let u3 = u1;
u3.name1 = "Salman";

console.log("-------------Object");
console.log(u1.name1);
console.log(u1["age"]);
u1.getInfo();
console.log("-------------object: delete prop");
delete u1.age;
u1.getInfo();
console.log("-------------object: key value from outsid");
u2.getInfo();
console.log("-------------object: looping through object");
for (let key in u1) {
  console.log(key + " --- key");
  console.log(u1[key] + " --- value");
}
console.log(Object.entries(u1));
console.log("-------------object: json stringify parse");
console.log(strobj);
console.log(JSON.parse(strobj));
console.log("-------------object: spread ");
console.log(Object.entries(admin));
console.log("-------------object: destructuring ");
console.log(name1, age, one);
console.log(n, d);
console.log("-------------object: representation in memory ");
console.log(u1.name1);
console.log(u3.name1);
u1 = null;
console.log(u3.name1);
console.log(typeof u3 === "object");
