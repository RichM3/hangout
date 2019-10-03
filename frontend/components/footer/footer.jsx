// import React from 'react';

// const Footer = () => {
//     return (
//     <>
//         <div class="footerTwo">
//             <div class="footerTwo-content">
//                 <div class="footerTwo-section"></div>
//                 <div class="footerTwo-section"></div>
//                 <div class="footerTwo-section"></div>
//             </div>
//             <div class="footerTwo-bottom">
//                 bottom
//             </div>
//         </div>
//     </>
//     )
// }

// export default Footer;



import React from 'react';

const Footer = () => {
    return (
    <>
        <footer className="footer">
            <div className="account" >
                <ul>Your Account
                    <li>Sign up</li>
                    <li>Login</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="discover">
                <ul>Discover
                    <li>Join a Groups</li>
                    <li>Start a Groups</li>
                    <li>Calendar</li>
                    {/* <li>Help</li> */}
                </ul>
            </div>
            <div className="discover">
                <ul>Start a group
                    <li>Create Group</li>
                    <li></li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="discover">
                <ul>Hangout
                    <li>About the Page</li>
                    <li>About Developer</li>
                    {/* <li>Help</li> */}
                </ul>
            </div>
        </footer>
    </>
    )
}

export default Footer;
