function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.first + " " + this.last;
};

const p1 = new Person("Thalha", "S", 22);

console.log(p1.getFullName());
