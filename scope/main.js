let a = 10;
function outerScope() {
  let b = 20;
  function innerScope() {
    let c = 30;
    console.log(a, b, c);
  }
  innerScope();
}
outerScope();
