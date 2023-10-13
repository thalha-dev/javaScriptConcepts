const user = {
  email: "thalha@gmail.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("newemail@gmail.com");

// console.log(this.email);
console.log(user.email);
