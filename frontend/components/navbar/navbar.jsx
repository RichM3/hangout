import React from 'react';
import GreetingContainer from "../greeting/greeting_container";

const Navbar = () => {
  return (
    <>
      <header className="nbar">
        {/* <nav class="header-nav"> */}
        <div className="logo" >
          <a href="/">
          <img src={window.hangoutLogoURL} />
          </a>
        </div>
        <div className="nav__links">
          
          <a href="/" className="myLinks"><b>Start a new group</b></a>
          
          &nbsp;&nbsp;&nbsp;
          <a href="/" className="myLinks">Experiences</a>
          &nbsp;&nbsp;&nbsp;
          <a href="/" className="fakeButton">NEW</a>
        </div>
        <div className="topRight">
          <GreetingContainer />
        </div>
        {/* </nav> */}
      </header>
    </>
  )
}

export default Navbar;

