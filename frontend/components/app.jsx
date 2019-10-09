import React from 'react';
import NavbarContainer from "./navbar/navbar_container";
import FooterContainer from "./footer/footer_container";
import SplashContainer from "./splash/splash_container";
import GroupsIndexContainer from "./groups/groups_index_container";
import GroupsShowContainer from "./groups/groups_show_container";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/groups" component={GroupsIndexContainer} />
      <ProtectedRoute exact path="/groups/:groupId" component={GroupsShowContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>  
);

export default App;
