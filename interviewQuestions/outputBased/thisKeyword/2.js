const user = {
  name: "thalha",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000);
// setTimeout(function () {
//   user.logMessage();
// }, 1000);
// setTimeout(user.logMessage.bind(user), 1000);
