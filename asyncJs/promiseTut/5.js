console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${username}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

Promise.all([
  importantAction("Thalha"),
  likeTheVideo("Js"),
  shareTheVideo("Promise"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
