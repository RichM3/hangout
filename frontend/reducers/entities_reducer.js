import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
import rsvpsReducer from './rsvps_reducer';
import searchReducer from './search_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  events: eventsReducer,
  rsvps: rsvpsReducer,
  searchResults: searchReducer
});

export default entitiesReducer;

