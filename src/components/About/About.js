import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-ctr'>
      <div className='about-me-card'>
        <span className='home-name'><span className='home-name-color'>ABOUT ME!</span></span>
        <p className='home-description'>I am a Professional Front-end Web Developer and have been working in this field for more than 4 years. We are highly experts in converting PSD href HTML, PSD href Bootstrap, Figma href HTML, Sketch href HTML, and Xd href HTML ,CSS responsive design and pixel-perfect using bootstrap latest version, jQuery, JavaScript. I always take care of code with SEO friendly.</p>
      </div>
      <div className='education-ctr'>
        <div className='exp-card'>

          <h3 className='about-name'>EXPERIENCE</h3>
          <p className='year'>July 2021 - April 2023</p>
          <p className='job-profile'>Full Stack Developer</p>
          <p className='company'>Visit Health</p>

          <p className='year'>Oct 2020 - July 2021</p>
          <p className='job-profile'>Software Developer Intern</p>
          <p className='company'>Visit Health</p>

        </div>
        <div className='edu-card'>
          <h3 className='about-name'>EDUCATION</h3>
          <p className='year'>2017 - 2021</p>
          <p className='job-profile'>Btech Computer Science</p>
          <p className='company'>JSS Academy Of Technical Education</p>

          <p className='year'>2015 - 2016</p>
          <p className='job-profile'>Intermediate</p>
          <p className='company'>W.H. Smith Memorial School</p>
        </div>
      </div>
    </div>
  );
}

export default About;
