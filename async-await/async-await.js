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