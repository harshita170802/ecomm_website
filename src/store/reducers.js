import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer'; // Adjust the path as needed for your specific reducers

const rootReducer = combineReducers({
  auth: authReducer, // Replace with your actual reducer names
  // ...other reducers
});

export default rootReducer;
