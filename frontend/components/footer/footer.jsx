import React from 'react';

const Footer = (props) => {

    let myFootClass = props.footClass;   //props are passed in from msp and must be included in Footer = (props)

    let fClass = "";
    switch (myFootClass) {
        case "login":
            fClass = "footerLong";
            break;
        case "groups":
            fClass = "footerLong";
            break;
        case "splash":
            fClass = "footerLong";
            break;
        default:
            fClass = "footer";
            break;
    }


    return (
    <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css" />
        <footer className={fClass}>
            <div className="foot-link-container">
                <div className="foot-link-text">My Github</div>
                <div><a class="no-underline" target="_blank" href="https://github.com/RichM3"><i class="fa fa-github  fa-5x" ></i></a></div>
            </div>
            <div className="foot-link-container">
                <div className="foot-link-text">My LinkedIn</div>
                <div><a class="no-underline" target="_blank" href="https://www.linkedin.com/in/rich-meyer3/"><i class="fa fa-linkedin  fa-5x"></i></a></div>
            </div>
            <div className="foot-link-container">
                <div className="foot-link-text">My Angellist</div>
                <div><a class="no-underline" target="_blank" href="https://angel.co/rich-meyer3"><i class="fa fa-angellist  fa-5x"></i></a></div>
            </div>
            <div className="foot-link-container">
                <div className="foot-link-text">My Personal Page</div>
                <div><a class="no-underline" target="_blank" href="https://richm3.github.io"><i class="fa fa-link  fa-5x"></i></a></div>
            </div>
            <div className="foot-link-container">
                <div className="foot-link-text">My Email</div>
                <div><a class="no-underline" target="_blank" href="mailto:richmeyerjobs@gmail.com"><i class="fa fa-envelope  fa-5x"></i></a></div>
            </div>
        </footer>
    </>
    )
}

export default Footer;
