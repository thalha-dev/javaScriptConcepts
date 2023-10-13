function checkOcc(data) {
  if (data === { occ: "engineer" }) {
    console.log("you are an engineer");
  } else if (data === { occ: "engineer" }) {
    console.log("you are still an engineer");
  } else {
    console.log("you dont work");
  }
}

checkOcc({ occ: "engineer" });
