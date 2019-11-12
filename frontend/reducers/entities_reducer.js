import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  events: eventsReducer
});

export default entitiesReducer;

