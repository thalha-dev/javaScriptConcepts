function outerClosure() {
  let counter = 0;
  function innerClosure() {
    counter++;
    console.log(counter);
  }
  return innerClosure;
}
let fnClosure = outerClosure();
fnClosure();
fnClosure();
fnClosure();
