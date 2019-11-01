import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      // add the action.currentUser value to the state - set the key for this value to the id of the user
      // Note: the user information may not always update correctly when deleting so be aware that this maybe an issue later!
      // If the data is not deleted properly consider not merging with oldState
      return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
    }
    default:
      return oldState;
  }
}

export default usersReducer;