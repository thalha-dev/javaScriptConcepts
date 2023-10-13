const user = {
  name: "thalha",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet());
console.log(user.farewell());
