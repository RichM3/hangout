import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// import * as sessionActions from './actions/session_actions';

// testing?????
// import {login} from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {


let store;
if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}



  // const store = configureStore();

  // ----------- just for testing! ----------- 
  window.store = store;
  // window.login = sessionActions.login;

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  // const user = ("uname", "test");
  // window.dispatch(login(user));

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  // <h1>Welcome to hangout!</h1>, root);
});


