let person = {
  name: "thalha",
};

function helloBuddy(occu) {
  return `${this.name} is working as ${occu}`;
}

console.log(helloBuddy.call(person, "engineer"));

console.log(helloBuddy.bind(person, "engineer"));
