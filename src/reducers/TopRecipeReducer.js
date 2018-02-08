import { TOP_SEARCH_FETCH_SUCCESS, TOP_SEARCH_FETCH } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  recipes: [
    // {
    //   title: "",
    //   id: "",
    //   photo_url: "",
    //   ingredients: [],
    //   instructions: ""
    // }
  ],
  recipesPage: 1
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TOP_SEARCH_FETCH:
      return { ...state, isFetching: true };
    case TOP_SEARCH_FETCH_SUCCESS:
      return { ...state, isFetching: false, recipes: action.payload };
    default:
      return state;
  }
};
