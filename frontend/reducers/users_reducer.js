import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      //add the action.currentUser value to the state - set the key for this value to the id of the user
      // return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser })
      return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
    }
    default:
      return oldState;
  }
}

export default usersReducer;