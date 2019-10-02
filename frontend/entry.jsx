import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();


  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!


  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to hangout!</h1>, root);
});


