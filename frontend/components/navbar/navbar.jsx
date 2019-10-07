import React from 'react';
import GreetingContainer from "../greeting/greeting_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Code for the logo big or small
    let logoType = window.hangoutLogoURL;



    let myHeadClass = this.props.headClass;   //props are passed in from msp and must be included in Navbar = (props)

    let hClass = "";
    switch (myHeadClass) {
      case "login":
        hClass = "myLinks-login";
        break;
      default:
        hClass = "myLinks";
        break;
    }



    let renderRightLinks = "";
    let navType = this.props.navType;
    switch (navType) {
      case "splash":
        renderRightLinks =
          <>
            <div className="nav__links">
              <a href="/" className={hClass}><b>Start a new group</b></a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="experience">Experiences</a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="fakeButton">NEW</a>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="topRight">
              <GreetingContainer />
            </div>
          </>;
        break;
      case "groups":
        renderRightLinks =
          <>
            <div className="nav__links">
              <a href="/" className={hClass}><b>Start a new group</b></a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="myLinks">Experiences</a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="fakeButton">NEW</a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="myLinks">Explore</a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" className="myLinks">Messages</a>
            &nbsp;&nbsp;&nbsp;
              <a href="/" className="myLinks">Notifications</a>
            </div>
            <div className="topRight">
              <GreetingContainer />
            </div>
          </>;
        break;
      case "signUpForm":
        renderRightLinks = "";
        logoType = window.hLogoURL
        break;    
      default:
        renderRightLinks =
          <>
            <div className="nav__links">
              <a href="/" className={hClass}><b>Start a new group</b></a>
            </div>
            <div className="topRight">
              <GreetingContainer />
            </div>
          </>;
        break;
    }



    // let mySignUp = this.props.isSignUp;   //props are passed in from msp and must be included in Navbar = (props)

    // let renderRightLinks = "";
    // switch (mySignUp) {
    //   case "signUpForm":
    //     renderRightLinks = "";
    //     break;
    //   default:
    //     renderRightLinks = 
    //       <>
    //       <div className="nav__links">
    //         <a href="/" className={hClass}><b>Start a new group</b></a>
    //         {/* &nbsp;&nbsp;&nbsp;
    //         <a href="/" className="myLinks">Experiences</a>
    //         &nbsp;&nbsp;&nbsp;
    //         <a href="/" className="fakeButton">NEW</a> */}
    //       </div>
    //       <div className="topRight">
    //         <GreetingContainer />
    //       </div>
    //     </>;
    //     break;
    // }

    return (
      <>
        <header className="nbar">
          <div className="logo" >
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
