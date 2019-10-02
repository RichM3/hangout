// // login(user) (thunk action creator)
// // logout() (thunk action creator)
// // signup(user) (thunk action creator)
// // receiveCurrentUser(currentUser) (regular action creator)
// // logoutCurrentUser() (regular action creator)
// // receiveErrors(errors) (regular action creator)

// import * as SessionApiUtil from '../util/session_api_util'

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// // This is the same as the RECEIVE_SESSION_ERRORS -- Issue
// // export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// // This action does not exist yet and maybe unnecessary - RECEIVE_SESSION_ERRORS
// // Found in BenchBNB solution session_errors_solution and afraid to leave out or project
// // No action creator corresponding yet!!!!
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// //REGULAR ACTION CREATOR
// export const receiveCurrentUser = currentUser => {
//   return {
//     type: RECEIVE_CURRENT_USER,
//     currentUser
//   }
// }

// export const logoutCurrentUser = () => {
//   return {
//     type: LOGOUT_CURRENT_USER
//   }
// }


// export const receiveErrors = errors => {
//   return {
//     type: RECEIVE_SESSION_ERRORS,
//     errors
//   }
// }



// //THUNK ACTION CREATOR

// export const login = user => {
//   return (dispatch) => {
//     return SessionApiUtil.login(user)
//     .then(payload => dispatch(receiveCurrentUser(payload))
//     .fail(payload => dispatch(receiveErrors(payload)))
//     );
//   }
// };

// export const logout = () => {
//   return dispatch => {
//     return SessionApiUtil.logout().then(payload =>
//       dispatch(logoutCurrentUser(payload)).fail(payload =>
//         dispatch(receiveErrors(payload))
//       )
//     );
//   };
// };


// export const signup  = user => {
//   return dispatch => {
//     return SessionApiUtil.signup(user).then(payload =>
//       dispatch(receiveCurrentUser(payload)).fail(payload =>
//         dispatch(receiveErrors(payload))
//       )
//     );
//   };
// };


// -----------

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
