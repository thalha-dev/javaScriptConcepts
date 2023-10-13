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
    return job(false);
  })
  .catch(function (error) {
    console.error(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.error(error);
  });
