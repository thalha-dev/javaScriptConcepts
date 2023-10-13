function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    }
    reject("error");
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.error(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success", data.message);
    return new Error("test");
  });
