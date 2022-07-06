import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({
	reducer: {
		cartStore: CartSlice
	}
},
	composeWithDevTools()
)