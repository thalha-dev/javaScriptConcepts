const promiseOne = new Promise((resolve, reject) => {
  resolve("One");
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve(promiseOne);
});

promiseTwo
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });
