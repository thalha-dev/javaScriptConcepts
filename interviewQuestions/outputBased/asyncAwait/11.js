console.log("start");

const promise1 = new Promise((res, rej) => {
  console.log(1);
  console.log(3);
});

console.log("middle")

promise1
  .then((res) => {
    console.log("Result ", res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("end");
