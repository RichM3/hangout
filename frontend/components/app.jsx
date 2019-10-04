import React from 'react';
import NavbarContainer from "./navbar/navbar_container";
import FooterContainer from "./footer/footer_container";
import SplashContainer from "./splash/splash_container";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

    <FooterContainer />
  </div>  
);

export default App;
