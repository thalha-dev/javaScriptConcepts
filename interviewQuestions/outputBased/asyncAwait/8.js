const promise1 = Promise.resolve("Frist");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");
const promise4 = Promise.resolve("Fourth");

const runPromise = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
