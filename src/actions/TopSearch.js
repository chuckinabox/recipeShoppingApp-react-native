import { API_URL } from "react-native-dotenv";
import { TOP_SEARCH_FETCH, TOP_SEARCH_FETCH_SUCCESS } from "./types";

const responseChecker = response => {
  if (!response.ok && (response.status === 404 || response.status === 500)) {
    console.log("ERROR");
  } else {
    console.log(response);
    return response.json();
  }
};

export function getTopRecipes(pageNumber) {
  return dispatch => {
    dispatch({ type: TOP_SEARCH_FETCH });

    fetch(`${API_URL}api/latest?rpp=9&pg=${pageNumber}`)
      .then(responseChecker)
      .then(json => {
        if (json.error) {
          console.log(json.error);
        } else {
          dispatch({ type: TOP_SEARCH_FETCH_SUCCESS, payload: json });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}
