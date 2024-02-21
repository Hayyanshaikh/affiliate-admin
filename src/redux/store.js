import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js'

export default configureStore({
  reducer: {
    auth: authReducer,
  }
})