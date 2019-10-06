import React from 'react';

const Footer = (props) => {

    let myFootClass = props.footClass;   //props are passed in from msp and must be included in Footer = (props)

    let fClass = "";
    switch (myFootClass) {
        case "login":
            fClass = "footerLong";
            break;
        default:
            fClass = "footer";
            break;
    }


    return (
    <>
        <footer className={fClass}>
            <div>
                My Github >> <a href="#">Press Here</a>
            </div>
            <div>
                My linked in >> <a href="#">Press Here</a>
            </div>
            <div>
                My personal page >> <a href="#">Press Here</a>
            </div>
        </footer>
    </>
    )
}

export default Footer;
