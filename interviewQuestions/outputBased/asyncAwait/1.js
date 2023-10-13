const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res("two"), 100);
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
