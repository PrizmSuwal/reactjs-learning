import { createSlice } from '@reduxjs/toolkit';

export const click = createSlice({
  name: 'click',
  initialState: {
    password: true,
    confirmPassword: true,
    rememberMe: false
  },
  reducers: {
    setPasswordVisibility: (state) => {
      state.password = !state.password;
    },
    setConfirmPasswordVisibility: (state) => {
      state.confirmPassword = !state.confirmPassword;
    },
    setRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    }
  }
});

export const { setPasswordVisibility, setConfirmPasswordVisibility, setRememberMe } = click.actions;

export default click.reducer;
