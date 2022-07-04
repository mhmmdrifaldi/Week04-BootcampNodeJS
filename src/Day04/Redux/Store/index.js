import { createStore } from "redux";
import CartReducer from "../Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	CartReducer,
	composeWithDevTools()
)

export default store