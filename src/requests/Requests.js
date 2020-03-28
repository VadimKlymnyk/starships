export async function all(page) {
  try {
    let data = await makeRequest(`https://swapi.co/api/starships/?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function one(id) {
  try {
    let data = await makeRequest(
      `https://swapi.co/api/starships/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

function makeRequest(url, options = {}) {
  return fetch(url, options).then(response => {
    if (response.status !== 200) {
      return response.text.then(text => {
        throw new Error(text);
      });
    }
    return response.json();
  });
}
