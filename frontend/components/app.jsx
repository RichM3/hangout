import React from 'react';

import SplashContainer from "./splash/splash_container";
import GroupsIndexContainer from "./groups/groups_index_container";
import GroupsShowContainer from "./groups/groups_show_container";
import GroupsCreateContainer from "./groups/groups_create_container";
import GroupsEditContainer from "./groups/groups_edit_container";

import EventsCreateContainer from "./groups/show_components/events/events_create_form_container";
import EventsEditContainer from "./groups/show_components/events/events_edit_form_container";
import EventsShowContainer from "./groups/show_components/events/events_show_container";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SearchPageContainer from "./search/search_page_container";

import HomeIndexContainer from "./home/home_index_container";
import CalendarContainer from "./groups/calendar";



const App = () => (
  <div>

    <Switch>
      <ProtectedRoute exact path="/groups/calendar" component={CalendarContainer} />
      <ProtectedRoute exact path="/home" myType={"calendar"} component={HomeIndexContainer} />
      <ProtectedRoute exact path="/search" component={SearchPageContainer} />
      <ProtectedRoute exact path="/my-calendar" myType={"calendar"} component={HomeIndexContainer} />
      <ProtectedRoute exact path="/my-groups" myType={"groups"} component={HomeIndexContainer} />
      <ProtectedRoute exact path="/events/create/:groupId" component={EventsCreateContainer} />
      <ProtectedRoute exact path="/events/:eventId/edit" component={EventsEditContainer} />
      <ProtectedRoute exact path="/events/show/:eventId" component={EventsShowContainer} />
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
