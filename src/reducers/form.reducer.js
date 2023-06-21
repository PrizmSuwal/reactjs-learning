import { createSlice } from '@reduxjs/toolkit';

export const form = createSlice({
  name: 'form',
  initialState: {
    login: {
      email: '',
      password: ''
    },
    signup: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  reducers: {
    updateFormField: (state, action) => {
      const { formName, name, value } = action.payload;
      state[formName][name] = value;
    },
    resetLoginForm: (state) => {
      state.login.email = '';
      state.login.password = '';
    }
  }
});

export const { updateFormField, resetLoginForm } = form.actions;

export default form.reducer;
