import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return ( 
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">With Love - Gaurav</div>
                <div className="footer_copyright">
                    Sneha Kashyap's Birthday Bash 2020. All rights reserved.
                </div>
            </Fade>
        </footer>
     ); 
}
 
export default Footer;