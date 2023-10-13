function sayHello(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${username}`);
    }, 1000);
  });
}

function likeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 1000);
  });
}

function shareVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;

        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.allPolyFill([
  likeVideo("Js"),
  sayHello("Thalha"),
  shareVideo("Promise"),
])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error("Failed: ",err);
  });
