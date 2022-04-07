import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    //animatie navbar als je naar beneden scrolt
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
      <div className={`nav ${show && "nav_black"}`}> {/*Laat eerst de logo zelf zien en DAN pas het zwarte blok als je scrollt */}
          <img
            className='nav_logo'
            src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
            alt='Netflix Logo'          
          />

          <img
            className='nav_avatar'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            alt='Netflix Profile'          
          />
      </div>
  )
}

export default Nav