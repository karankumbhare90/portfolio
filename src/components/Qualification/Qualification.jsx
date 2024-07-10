import React, { useState } from 'react';
import './Qualification.css'

const Qualification = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <section className="section qualification" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button__flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div
                        className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button__flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BE/B. Tech</h3>
                                <span className="qualification__subtitle">GEC, Gandhinagar</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma Engineering</h3>
                                <span className="qualification__subtitle">Dr. S & SS Ghandhy, Surat</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SSC Board</h3>
                                <span className="qualification__subtitle">Suman High School</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer Intern</h3>
                                <span className="qualification__subtitle">Exposys Data Labs</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    July 2024 - July 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer Intern</h3>
                                <span className="qualification__subtitle">Prodigy Infotech</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    June 2024 - June 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification