// store.ts
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const store = configureStore({
  reducer: {
    myreducer: Reducer,
  },
});

export default store;
