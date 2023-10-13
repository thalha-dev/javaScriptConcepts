console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1200);
  });
}

function shareTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 0);
  });
}

Promise.any([
  likeTheVideo("Js"),
  importantAction("Thalha"),
  shareTheVideo("Promise"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
