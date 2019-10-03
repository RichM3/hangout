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
          {/* <h1>Hangouts is Awesome! NAV BAR -- REACT Component!</h1>      */}
          {/* <h1>Hangouts</h1>      */}
          <a href="#" className="myLinks">Start a group</a>
          
          &nbsp;&nbsp;&nbsp;
          <a href="#" className="myLinks">Experiences</a>
          &nbsp;&nbsp;&nbsp;
          {/* <button><a href="#">NEW</a></button> */}
          <a href="#" className="fakeButton">NEW</a>
        </div>
        <div className="topLeft">
          <GreetingContainer />
        </div>
        {/* </nav> */}
      </header>
    </>
  )
}

export default Navbar;













//This is my original version -- Red but now well justified divs / items
// Oct 3rd version

// import React from 'react';
// import GreetingContainer from "../greeting/greeting_container";

// const Navbar = () => {
//   return  ( 
//     <>
//       <header className="header">
//       {/* <nav class="header-nav"> */}
//         <div className="header-img-logo" >
//         {/* <div> */}
//           <img src={window.hangoutLogoURL} />
//         </div>
//         <div className="navbar">
//           {/* <h1>Hangouts is Awesome! NAV BAR -- REACT Component!</h1>      */}
//           <h1>Hangouts</h1>     
//         </div>
//         <div className="topLeft">
//           <GreetingContainer />
//         </div>
//       {/* </nav> */}
//     </header>
//     </>
//   )
// }

// export default Navbar;




// -----------------------------------------------------
// really old version
// -----------------------------------------------------

// import React from 'react';

// const Navbar = () => {
//     return (

//     <nav class="header-nav">
//       <div className="navbar">
//         <h1>Hangouts is Awesome!  Welcome to the NAV CP+ React Component!</h1>          
//       </div>

//       <div className="navbar">
//       </div>
//     </nav>

//     )
// }

// export default Navbar;