import React from 'react';

import SplashContainer from "./splash/splash_container";
import GroupsIndexContainer from "./groups/groups_index_container";
import GroupsShowContainer from "./groups/groups_show_container";
import GroupsCreateContainer from "./groups/groups_create_container";
import GroupsEditContainer from "./groups/groups_edit_container";

import EventsCreateContainer from "./groups/show_components/events/events_create_container";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



{/* for testing the calendar only - remove later after testing */ }
import CalendarContainer from "./groups/calendartest";



const App = () => (
  <div>

    <Switch>

      {/* for testing the calendar only - remove later after testing */}
      <ProtectedRoute exact path="/groups/calendartest" component={CalendarContainer} />



      <ProtectedRoute exact path="/events/create" component={EventsCreateContainer} />
      <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
      <ProtectedRoute exact path="/groups/create" component={GroupsCreateContainer} />
      <ProtectedRoute exact path="/groups/:groupId" component={GroupsShowContainer} />
      <ProtectedRoute exact path="/groups/:groupId/edit" component={GroupsEditContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
    
  </div>  
);

export default App;
