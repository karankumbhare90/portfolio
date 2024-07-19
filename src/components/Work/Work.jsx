import React from 'react'
import './Work.css'
import Carousel from './Carousel'

const Work = () => {
    return (
        <section className="work section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent works</span>
            <Carousel />
        </section>
    )
}

export default Work