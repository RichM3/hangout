import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="myLinks" >Login</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/signup" className="myLinks" >Sign up</Link>
    </nav>
  );
  const personalGreeting = () => {
    return (
    <>
      <div className="manageLogout">
        <div className="showname" >Hi, {currentUser.username}!</div>
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

