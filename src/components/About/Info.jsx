import React from 'react'

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__titles">Experience</h3>
                <span className="about__subtitles">1+ Year</span>
            </div>
            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__titles">Completed</h3>
                <span className="about__subtitles">3+ Projects</span>
            </div>
            <div className="about__box">
                <i className='bx bx-support about__icon'></i>
                <h3 className="about__titles">Support</h3>
                <span className="about__subtitles">24/7 Online</span>
            </div>

        </div >
    )
}

export default Info