import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login.reducer';
import signupReducer from '../reducers/signup.reducer';

export default configureStore({
  reducer: {
    loginForm: loginReducer,
    signUpForm: signupReducer
  }
});
