import React from 'react';
import './About.css';


// describe Projects, experience and education in a timeline
const About = () => {
  return (
    <div className='about-ctr'>
      <div className='about-me-card'>
        <span className='home-name'><span className='home-name-color'>ABOUT ME!</span></span>
        <p className='home-description'>Hello, I'm Raghav Khanna, a passionate Frontend Developer with a strong proficiency in crafting captivating and responsive web experiences. With a deep-rooted knowledge of ReactJS, I thrive on creating seamless user interfaces that not only engage but also deliver exceptional functionality. <br></br>My toolkit includes a blend of modern tools like Bootstrap, Material UI, pure CSS, and JavaScript, allowing me to bring design concepts to life with precision. With over 2 years of hands-on experience, I've honed the art of transforming ideas into pixel-perfect realities, ensuring a seamless user journey across devices. Let's collaborate to shape the digital landscape together.</p>
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
