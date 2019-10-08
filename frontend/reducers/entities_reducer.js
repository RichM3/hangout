import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer
});

export default entitiesReducer;

