import React from 'react';
import './Projects.css';
import mobileDesign from '../../assets/images/mobile-design.jpg';

const Projects = () => {
  return (
    <div className='project-ctr'>
      <h3 className='featured-heading'>FEATURED PROJECTS!</h3>
      {/* <p className='featured-description'>Featured and popular products are the best-selling items for your product, product range, or company. However, a featured product could be a new product line or seasonal products instead.</p> */}

      <div className='card-ctr'>
        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={mobileDesign} />
          </div>
          <p className='project-heading'>Entertainment Hub</p>
          <h3 className='project-description'>Responsive Web App using Reactjs and material ui</h3>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={mobileDesign} />
          </div>
          <p className='project-heading'>Shopping App</p>
          <h3 className='project-description'>E-commerce web app using Reactjs with useReducer and context api</h3>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={mobileDesign} />
          </div>
          <p className='project-heading'>NoteZipper App</p>
          <h3 className='project-description'>Full Stack Web app with MERN stack</h3>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={mobileDesign} />
          </div>
          <p className='project-heading'>Mobile App Design</p>
          <h3 className='project-description'>Mobile Application Landing Page Design </h3>
        </div>
      </div>

    </div>
  );
}

export default Projects;
