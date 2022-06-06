//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import utility from "./utility_reduce";
export default combineReducers({
  utility: utility,
  form: formReducer
});
