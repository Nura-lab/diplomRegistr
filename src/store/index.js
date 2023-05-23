import { configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from "redux-devtools-extension";
import foodReducer from "./reducers/foods";

export const store = configureStore({
  reducer: {
    foods:foodReducer,
    enhancers: [composeWithDevTools()]
  },
})
