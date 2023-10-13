console.log("start");

const fn = () => {
  return new Promise((res, rej) => {
    console.log(1);
    res("success");
  });
};

console.log("middle");

fn()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("end");
