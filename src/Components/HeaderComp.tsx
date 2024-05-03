// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import logo from '/src/assets/logo.jpeg';

//Landing page header
//contains image, logo(present on every page & routes back to landing page onClick)
//
function LandingHeader() {

    return (
    <>
        <div>
            <body class="bg-50">
                <img src={logo} alt= "logo"/>
            </body>
        </div>
    </>
    )
}

export default LandingHeader;