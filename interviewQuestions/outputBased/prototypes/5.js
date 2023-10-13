const user = {
  name: "thlha",
};

const user2 = Object.create(user);

console.log(user2.name);
console.log(user2.prototype);
