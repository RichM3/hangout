import React from 'react';
import GreetingContainer from "./greeting/greeting_container";



import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
  <div>
    <header>
    <h1>Hangouts is Awesome!  Welcome to the App React Component!</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
      {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
);

export default App;

