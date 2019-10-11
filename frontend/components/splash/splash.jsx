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
        <div className="splash-menu-container">
            <div className="splash-menu-bar">
                <div className="splash-menu-button">Join a movement</div>
                <div className="splash-menu-button">Learn to cook</div>
                <div className="splash-menu-button">Train for a marathon</div>
                <div className="splash-menu-button">Build a mobile app</div>
                <div className="splash-menu-button">Hike a mountain</div>
                <div className="splash-menu-button">Practice a language</div>
            </div>
        </div>

        <div className="splash-section-container">
            <div className="splash-section-bar">
                <h2>Events near you</h2>
                <p>See what's happening soon in your area.</p>
                {/* <div className="splash-section-event"></div>
                <div className="splash-section-event"></div> */}

            <div className="splash-section-event-bar">
                <a href="#"><div className="splash-section-event">
                    <div className="spl-evt-date">FRI, OCT 11, 1:30 PM</div>
                    <div className="spl-evt-name">Financial Accounting Course Help- OPEN HOUSE</div>
                    <div className="spl-evt-group">International Group of Learners and ...</div>
                    <div className="spl-evt-location">Astor Place</div>

                    <div className="spl-evt-lower">
                        <div className="spl-evt-attendees">7 attendees</div>
                        <div className="spl-evt-attend-btn">Attend</div>
                    </div>
                </div></a>
                <a href="#"><div className="splash-section-event">
                    <div className="spl-evt-date">SAT, OCT 12, 11:00 AM</div>
                    <div className="spl-evt-name">Learning German in NYC</div>
                    <div className="spl-evt-group">Language Learners and Enthusiasts of NYC</div>
                    <div className="spl-evt-location">620 Madison Ave</div>

                    <div className="spl-evt-lower">
                        <div className="spl-evt-attendees">16 attendees</div>
                        <div className="spl-evt-attend-btn">Attend</div>
                    </div>
                </div></a>
                <a href="#"><div className="splash-section-event">
                    <div className="spl-evt-date">SUN, OCT 13, 9:30 PM</div>
                    <div className="spl-evt-name">Literature, Concepts, and Knowledge</div>
                    <div className="spl-evt-group">Connecticut Book Club</div>
                    <div className="spl-evt-location">Sacred Heart Bookstore</div>

                    <div className="spl-evt-lower">
                        <div className="spl-evt-attendees">7 attendees</div>
                        <div className="spl-evt-attend-btn">Attend</div>
                    </div>
                </div></a>
            </div>
                
            </div>
        </div>

        <FooterContainer myType={"splash"} />
    </>
    )
}

export default Splash;

