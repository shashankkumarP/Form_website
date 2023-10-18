/* eslint-disable @typescript-eslint/no-unused-vars */
// store.ts
// import { configureStore } from "@reduxjs/toolkit";
import MYReducer from "./Reducer";
import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  reducer: MYReducer,
});
export const store = legacy_createStore(rootreducer,composeEnhancers( applyMiddleware(thunk)));

