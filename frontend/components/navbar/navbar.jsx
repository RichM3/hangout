import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Code for the logo big or small
    let logoType = window.hangoutLogoURL;
    let logoCss = "logo";


    let myHeadClass = this.props.headClass;   //props are passed in from msp and must be included in Navbar = (props)

    let hClass = "";
    switch (myHeadClass) {
      case "login":
        hClass = "myLinks-login";
        logoCss = "logo-login";
        break;
      default:
        hClass = "myLinks";
        break;
    }


    let renderRightLinks = "";
    let navType = this.props.navType;
    switch (navType) {
      case "splash":
        logoCss = "logo-splash";
        renderRightLinks =
          <>
          <div className="nav__links">
            <Link to={`/groups/create`} className={hClass}><b>Start a new group</b></Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={`/groups/create`} className="fakeButton">NEW</Link>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="topRight">
            <GreetingContainer sourceType={"splash"} />
          </div>
          </>;
        break;
      case "groups_index":
        renderRightLinks =
          <>
          <div className="nav__links">
            <Link to={`/groups/create`} className={hClass}><b>Start a new group</b></Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={`/groups/create`} className="fakeButton">NEW</Link>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="topRight">
            <GreetingContainer />
          </div>
          </>;
        break;
      case "groups_show":
        logoCss = "logo-show";
        renderRightLinks =
          <>
          <div className="nav__links">
            <Link to={`/groups/create`} className={hClass}><b>Start a new group</b></Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={`/groups/create`} className="fakeButton">NEW</Link>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="topRight">
            <GreetingContainer />
          </div>
          </>;
        break;
      case "groups_create":
        logoCss = "logo-splash";
        renderRightLinks =
          <>
          {/* <div className="nav__links">
            <Link to={`/groups/create`} className="fakeButton">NEW</Link>
            &nbsp;&nbsp;&nbsp;
          </div> */}
          <div className="topRight">
            <GreetingContainer />
          </div>
          </>;
        break;
      case "signUpForm":
        logoCss = "logo-signup";
        renderRightLinks = "";
        logoType = window.hLogoURL
        break;    
      default:
        renderRightLinks =
          <>
          <div className="nav__links">
            <Link to={`/groups/create`} className={hClass}><b>Start a new group</b></Link>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="topRight">
            <GreetingContainer />
          </div>
          </>;
        break;
    }


    return (
      <>
        <header className="nbar">
          <div className={logoCss} >
            <a href="/">
              <img src={logoType} />
            </a>
          </div>

          {renderRightLinks}
        </header>
      </>
    )
  }
}

export default Navbar;
