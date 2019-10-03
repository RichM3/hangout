import React from 'react';
import GreetingContainer from "../greeting/greeting_container";

const Navbar = () => {
  return  ( 
    <>
      <header className="header">
      {/* <nav class="header-nav"> */}
        <div className="header-img-logo" >
        {/* <div> */}
          <img src={window.hangoutLogoURL} />
        </div>
        <div className="navbar">
          <h1>Hangouts is Awesome! NAV BAR -- REACT Component!</h1>     
        </div>
        <div className="navbar">
          <GreetingContainer />
        </div>
      {/* </nav> */}
    </header>
    </>
  )
}

export default Navbar;





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