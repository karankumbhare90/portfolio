import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* <h1 className="footer__title">Karan</h1> */}

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/karankumbhare_/" rel="noreferrer" className="footer__social-link" target='_blank'>
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/karankumbhare/" rel="noreferrer" className="footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/karankumbhare90" rel="noreferrer" className="footer__social-link" target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Karan Kumbhare | All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer