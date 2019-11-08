import React from 'react';
// import NavbarContainer from "./navbar/navbar_container";
// import FooterContainer from "./footer/footer_container";
import SplashContainer from "./splash/splash_container";
import GroupsIndexContainer from "./groups/groups_index_container";
import GroupsShowContainer from "./groups/groups_show_container";
import GroupsCreateContainer from "./groups/groups_create_container";

import EventsIndexContainer from "./groups/show_components/events/events_index_container";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>

    {/* <ProtectedRoute path="/groups" component={GroupShowContainer} /> */}

    <Switch>
      <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
      <ProtectedRoute exact path="/groups/create" component={GroupsCreateContainer} />
      <ProtectedRoute exact path="/groups/:groupId" component={GroupsShowContainer} />
      {/* <ProtectedRoute exact path="/groups/:groupId/events" component={EventsIndexContainer} /> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>

    
  </div>  
);

export default App;
