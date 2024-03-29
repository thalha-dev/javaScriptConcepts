async function loadJson(url) {
  try {
    let response = await fetch(url);

    if (response.status === 200) {
      let json = response.json();
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

loadJson("https://fakestoreapi.com/products").then((res) => {
  console.log(res)
})
