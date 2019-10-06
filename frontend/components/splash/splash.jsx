import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
//./navbar/navbar_container";


const Splash = () => {
    return (
    <>
        <NavbarContainer />
        <div className="home-container" ></div>
        <FooterContainer myType={"splash"} />
    </>
    )
}

export default Splash;

