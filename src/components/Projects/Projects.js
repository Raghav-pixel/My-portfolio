import React from 'react';
import './Projects.css';
import mobileDesign from '../../assets/images/mobile-design.jpg';
import EntertainmentPreview from '../../assets/images/Entertainment-hub-preview.png';
import NoteZipperPreview from '../../assets/images/NoteZipperPreview.png';
import HostingPreview from '../../assets/images/Hosting_Preview.png';

const Projects = () => {
  return (
    <div className='project-ctr'>
      <h3 className='featured-heading'>FEATURED PROJECTS!</h3>
      {/* <p className='featured-description'>Featured and popular products are the best-selling items for your product, product range, or company. However, a featured product could be a new product line or seasonal products instead.</p> */}

      <div className='card-ctr'>
        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={EntertainmentPreview} />
          </div>
          <p className='project-heading'>Entertainment Hub</p>
          <a className='project_link' href='https://dashing-chimera-a560fb.netlify.app/' target='_blank'><h3 className='project-description'>Responsive Web App using Reactjs and material ui</h3></a>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={NoteZipperPreview} />
          </div>
          <p className='project-heading'>NoteZipper App</p>
          <a className='project_link' href='https://mern-notes-app-awfz.onrender.com/' target='_blank'><h3 className='project-description'>MERN stack notes taking app using Redux</h3></a>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={mobileDesign} />
          </div>
          <p className='project-heading'>Shopping Cart App</p>
          <h3 className='project-description'>E-commerce web app using Reactjs with useReducer and context api</h3>
        </div>

        <div className='project-card'>
          <div className='project-img-ctr'>
            <img className='project-img' src={HostingPreview} />
          </div>
          <p className='project-heading'>Hosting Application</p>
          <a className='project_link' href='https://raghav-pixel.github.io/hosting-app/'  target='_blank'>
            <h3 className='project-description'>Hosting Website using HTML, CSS & JS</h3>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Projects;
