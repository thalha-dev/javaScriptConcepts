console.log("start");

const promise1 = new Promise((res, rej) => {
  console.log(1);
  res(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
