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
      resolve(`Like the ${video} video`);
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

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) {
    return;
  }

  const currPromise = funcPromises.pop();

  currPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  promRecurse(funcPromises);
}

promRecurse([sayHello("thalha"), likeVideo("JS"), shareVideo("Promises")]);
