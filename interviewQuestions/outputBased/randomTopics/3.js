const animal = {};

let dog = {
  emoji: "🐕",
};

let cat = {
  emoji: "🐈",
};

animal[dog] = { ...dog, name: "jony" };
animal[cat] = { ...cat, name: "sara" };

console.log(animal[dog]);
