import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Services I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Web Designing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Web Designing</h3>
                            <p className="services__modal-description">
                                Service with year of experience. Providing quality of work to clients & companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Responsive Web Design
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        UI/UX Design
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Landing Page Design
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Website Redesign
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Web Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Web Development</h3>
                            <p className="services__modal-description">
                                Service with year of experience. Providing quality of work to clients & companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Front-End Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Back-End Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Full-Stack Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Security Implementation
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Third-Party Integrations
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-setting services__icon"></i>
                        <h3 className="services__title">API Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">API Development</h3>
                            <p className="services__modal-description">
                                Service with year of experience. Providing quality of work to clients & companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Custom API Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        RESTful API Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        API Integration Services
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        API Testing and Validation
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services