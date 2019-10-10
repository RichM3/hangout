import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import { Link } from 'react-router-dom';
//./navbar/navbar_container";


const Splash = () => {
    return (
    <>
        <NavbarContainer navType={"splash"} />
        <div className="home-container-video">
            <video className="home-video" muted autoPlay loop src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div className="home-text">
                <h1 className="homeH1">The real world is calling</h1>
                <h3>Join a local group to meet people, try something new, or do more of what you love.</h3>
                <Link className="fake-btn-red" to="/signup">Come hangout!</Link>
            </div>
        </div>
            <div className="spaceholder"></div>
        <FooterContainer myType={"splash"} />
    </>
    )
}

export default Splash;

