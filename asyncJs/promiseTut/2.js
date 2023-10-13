console.log("start");

const sub = Promise.resolve("Resolved");
console.log(sub);

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
