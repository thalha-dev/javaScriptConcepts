console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Resolved");
    } else {
      reject(new Error("Rejected"));
    }
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
