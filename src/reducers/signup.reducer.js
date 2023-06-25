import { createSlice } from '@reduxjs/toolkit';

export const signUpform = createSlice({
  name: 'signUpForm',
  initialState: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordVisibility: true,
    rememberMe: false
  },
  reducers: {
    updateSignUpForm: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setPasswordVisibility: (state) => {
      state.passwordVisibility = !state.passwordVisibility;
    },
    setRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    resetSignUpForm: (state) => {
      state.fullName = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
    }
  }
});

export const { updateSignUpForm, setPasswordVisibility, setRememberMe, resetSignUpForm } = signUpform.actions;

export default signUpform.reducer;
