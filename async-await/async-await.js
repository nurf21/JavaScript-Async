async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

(async () => {
  try {
    const data = await loadJson('https://some-url');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

// Call async from non-async
// ==================================================

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait()
    .then(result => {
      // result === 10
      console.log("Got:", result)
    })
    .catch(err => {
      console.error("oops", err)
    })
}