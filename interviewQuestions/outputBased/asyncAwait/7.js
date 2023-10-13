const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function firstFun() {
  myPromise.then((res) => res).then((res) => console.log(res, "  1"));
  setTimeout(() => {
    console.log("TimeOut! 1"), 0;
  });
  console.log("Last Line", " 1");
}

async function secondFun() {
  const res = await myPromise;
  console.log(await res, " 2");
  setTimeout(() => {
    console.log("TimeOut! 2"), 0;
  });
  console.log("Last Line", " 2");
}

firstFun();
secondFun();
