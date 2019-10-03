import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
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
    {/* <SplashContainer /> */}

    {/* <div className="header-img-ppl" >
      <img src={window.peopleHangoutURL} />
    </div> */}
    
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

    <FooterContainer />
    {/* <footer className="footer">
    <h1>This is my hangout footer!</h1>
    </footer> */}
  </div>  
);

export default App;








/////////////////////////////////////////////////////////////////////
// This is the old app code - here as a safety before cleanup refactor
/////////////////////////////////////////////////////////////////////
// import React from 'react';
// import GreetingContainer from "./greeting/greeting_container";
// import NavbarContainer from "./navbar/navbar_container";
// // import FooterContainer from "./footer/footer_container";

// import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';


// const App = () => (
//   <div>
//     {/* <GreetingContainer /> */}
// <NavbarContainer />

// {/* <header className="header">
//       <nav className="header-nav">
//         <div> test
//         </div>
//         <div className="navbar">
//           <h1>Hangouts is Awesome!  Welcome to the App React Component!</h1>
           
//         </div>
//         <div className="navbar">
//         </div>
//       </nav>
//           <GreetingContainer />
//     </header> */}

// {/* <div><p>TEST 1</p></div>
//     <div className="nbar"><p>TEST 2</p></div> */}

// <div className="header-img-ppl" >
//   <img src={window.peopleHangoutURL} />
// </div>

//   <Switch>
//     <AuthRoute exact path="/login" component={LogInFormContainer} />
//     <AuthRoute exact path="/signup" component={SignUpFormContainer} />
//   </Switch>

//     {/* <FooterContainer /> */ }
// <footer className="footer">
//   <h1>This is my hangout footer!</h1>
// </footer>
//   </div >
// );

// export default App;


