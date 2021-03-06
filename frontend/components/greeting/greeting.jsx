import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, sourceType }) => {
  let source = sourceType;
  let linkColors;

  switch (source) {
    case "splash":
      linkColors = "myLinks_splash";
      break;
    default:
      linkColors = "myLinks_greet";      
      break;
  }

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className={linkColors} >Log in</Link>
      {/* &nbsp;&nbsp;&nbsp; */}
      <Link to="/signup" className={linkColors} >Sign up</Link>
    </nav>
  );
  const personalGreeting = () => {
    return (
    <>
      <div className="manageLogout">
          <div className="dropdown">
            <img className="blankProfile" src={window.blankProfileURL} />
            <div className="dropdown-content">
              <button className="logoffButton" onClick={logout}>Log Out</button>
            </div>
          </div>
      </div>
    </>
    )
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

