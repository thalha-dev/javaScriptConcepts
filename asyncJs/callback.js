console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`hello ${username}`);
  }, 0);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

importantAction("thalha", (message) => {
  console.log(message);
  likeTheVideo("js", (action) => {
    console.log(action);
    shareTheVideo("promises", (action) => {
      console.log(action);
    });
  });
});

console.log("stop");
