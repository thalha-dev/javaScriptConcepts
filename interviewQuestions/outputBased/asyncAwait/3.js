const myPromise = () => Promise.resolve("I have resolved");

function firstFunction() {
  myPromise().then((res) => console.log(res, "1"));
  console.log("second", " 1");
}

async function secondFunction() {
  console.log(await myPromise(), "2");
  console.log("second", " 2");
}

firstFunction();
secondFunction();
