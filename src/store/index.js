import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import foodReducer from './reducers/foods'
import authSlice from './reducers/auth'

export const store = configureStore({
  reducer: {
    foods: foodReducer,
    auth: authSlice,
    enhancers: [composeWithDevTools()]
  }
})
