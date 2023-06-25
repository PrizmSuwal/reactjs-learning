import { createSlice } from '@reduxjs/toolkit';

export const loginForm = createSlice({
  name: 'loginForm',
  initialState: {
    email: '',
    password: '',
    passwordVisibility: true,
    rememberMe: false
  },
  reducers: {
    updateLoginForm: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setPasswordVisibility: (state) => {
      state.password = !state.password;
    },
    setRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    resetLoginForm: (state) => {
      state.email = '';
      state.password = '';
    }
  }
});

export const { updateLoginForm, setPasswordVisibility, setRememberMe, resetLoginForm } = loginForm.actions;

export default loginForm.reducer;
