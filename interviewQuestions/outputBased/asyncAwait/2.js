async function getData() {
  return await Promise.resolve("I made it!");
}

const date = getData();

console.log(date.then((res) => console.log(res)));
