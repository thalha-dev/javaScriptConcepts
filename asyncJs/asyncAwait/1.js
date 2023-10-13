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

const res = async () => {
  try {
    const message1 = await importantAction("thalha");
    console.log(message1);
    const message2 = await likeTheVideo("Js");
    console.log(message2);
    const message3 = await shareTheVideo("Async Await");
    console.log(message3);

    // console.log({ message1, message2, message3 });
  } catch (error) {
    console.error(error, " Failed :(");
  }
};

res();

console.log("stop");
