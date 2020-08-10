import React from 'react';
import facebookIcon from 'assets/icons/facebook.png';
import twitterIcon from 'assets/icons/twitter.png';
import instagramIcon from 'assets/icons/instagram.png';
import emailIcon from 'assets/icons/email.png';
import './Footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__social-networks">
                <img className="footer__item" src={twitterIcon} alt="twitter"/>
                <img className="footer__item" src={facebookIcon} alt="facebook"/>
                <img className="footer__item" src={instagramIcon} alt="instagram"/>
                <img className="footer__item" src={emailIcon} alt="email"/>
            </div>
            <span className="footer__copyright">
                Leniolabs  -  Congress members challenge
        </span>
    </footer>
    )
};

export default Footer;