const myPromise = Promise.resolve("Heyaa");

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error("Alas !! Didn't worked ");
  } finally {
    console.log("Yeah !!! Got it");
  }
})();
