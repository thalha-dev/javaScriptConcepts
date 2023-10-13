function getPersonInfo(one, two, three) {
  console.log(one, two, three);
}

const person = "Kiran";

const occ = "Engineer";

getPersonInfo`${person} is working as ${occ}`;
