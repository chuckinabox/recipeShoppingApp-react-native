import { combineReducers } from "redux";
import TopRecipeReducer from "./TopRecipeReducer";

export default combineReducers({
  topRecipes: TopRecipeReducer
});
