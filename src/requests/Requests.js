export async function all(dispatch) {
  try {
    dispatch({ type: "GET_LIST_STARSHIPS" });
    let data = await makeRequest(`https://swapi.co/api/starships/`);
    dispatch({ type: "GET_LIST_STARSHIPS_SUCCESS", data: data.results });
    return data.results;
  } catch (error) {
    dispatch({ type: "GET_LIST_STARSHIPS_ERROR", error });
  }
}

export async function one(id) {
  try {
    let data = await makeRequest(`https://swapi.co/api/starships/${id}`);
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
