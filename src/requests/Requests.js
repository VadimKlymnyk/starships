export async function getListStarships(dispatch, page, name) {
  try {
    dispatch({ type: "GET_LIST_STARSHIPS" });
    let data;
    if (name === 0) {
      data = await makeRequest(`https://swapi.co/api/starships/?page=${page}`);
    } else {
      data = await makeRequest(
        `https://swapi.co/api/starships/?search=${name}`
      );
    }
    dispatch({
      type: "GET_LIST_STARSHIPS_SUCCESS",
      data: data.results,
      counter: data.count
    });
    return data.results;
  } catch (error) {
    dispatch({ type: "GET_LIST_STARSHIPS_ERROR", error });
  }
}

export async function getOneStarships(dispatch, id) {
  try {
    dispatch({ type: "GET_STARSHIP" });
    let data = await makeRequest(`https://swapi.co/api/starships/${id}`);
    dispatch({ type: "GET_STARSHIP_SUCCESS", data });
    return data;
  } catch (error) {
    dispatch({ type: "GET_STARSHIP_ERROR", error });
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
