const person = { name: "thalha", hobbies: ["coding"] };

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby("reading", []);
addHobby("exploring");
addHobby("exercising", person.hobbies);

console.log(person.hobbies);
