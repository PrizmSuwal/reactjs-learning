import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '../reducers/click.reducer';
import formReducer from '../reducers/form.reducer';

export default configureStore({
  reducer: {
    click: clickReducer,
    form: formReducer
  }
});
