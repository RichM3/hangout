const _nullUser = {
  id: null
};

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { id } = action.currentUser;
      return Object.assign({}, { id });
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};