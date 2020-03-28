import { createStore, combineReducers } from "redux";

function list(state = { data: [], error: null, loading: true }, action) {
  switch (action.type) {
    case "GET_LIST_STARSHIPS":
      return { ...state, loading: true };
    case "GET_LIST_STARSHIPS_SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "GET_LIST_STARSHIPS_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

const reducers = combineReducers({
  list
});

let store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

export default store;
