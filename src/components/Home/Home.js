import React from 'react';
import './Home.css';
import HtmlIcon from '../../assets/images/html-icon.svg';
import CssIcon from '../../assets/images/css-icon.svg';
import JsIcon from '../../assets/images/javascript-programming-language-icon.svg';
import ReactIcon from '../../assets/images/react-js-icon.svg';
import NodeIcon from '../../assets/images/node-js-icon.svg';
import { useNavigate } from 'react-router-dom';
import mobileDesign from '../../assets/images/mobile-design.jpg';
import EntertainmentPreview from '../../assets/images/Entertainment-hub-preview.png';
import NoteZipperPreview from '../../assets/images/NoteZipperPreview.png';

const Home = ({ selectedHeader, setSelectedHeader }) => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    setSelectedHeader('about');
    navigate('/about');
  }

  const handleProjectClick = () => {
    setSelectedHeader('projects');
    navigate('/projects');
  }

  return (
    <div className='main-ctr'>
      <div className='home-ctr'>
        <span className='home-name'><span className='home-name-color'>Hi!</span> There I'm</span>
        <h2 className='home-job'>Professional <span className='home-name-color'>Front-end</span> Web Developer</h2>
        <p className='home-description'>I am a Professional Front-end Web Developer and have been working in this field for more than 4 years. We are highly experts in converting PSD href HTML, PSD href Bootstrap, Figma href HTML, Sketch href HTML, and Xd href HTML ,CSS responsive design and pixel-perfect using bootstrap latest version, jQuery, JavaScript. I always take care of code with SEO friendly.</p>
      </div>

      <div className='tech-ctr'>
        <div className='about-card'>
          <span style={{ fontSize: '25px', color: 'rgba(47, 240, 147, 0.871)', margin: '20px 20px 10px 20px' }}>Raghav</span>
          <p style={{ fontSize: '15px', color: 'grey', margin: '0px 20px 10px 20px' }}>More Specialized</p>
          <h2 
            style={{ fontSize: '24px', margin: '0px 20px 10px 20px', cursor: 'pointer', color: 'rgba(47, 240, 147, 0.871)' }}
            onClick={handleAboutClick}
          >
            ABOUT ME
          </h2>
        </div>

        <div className='project-card-home'>
          <div className='icon-ctr'>
            {/* <img width={'60px'} height={'60px'} src={ReactIcon} alt='React icon' />
            <img width={'60px'} height={'60px'} src={NodeIcon} alt='Node icon' /> */}
            <div className='project-img-ctr-home'>
              <img className='project-img-home' src={EntertainmentPreview} />
            </div>          
            <div className='project-img-ctr-home'>
              <img className='project-img-home' src={NoteZipperPreview} />
            </div>          
            <div className='project-img-ctr-home-optional'>
              <img className='project-img-home' src={mobileDesign} />
            </div>
          </div>
          <div>
            <p className='showcase-view'>Showcase View</p>
            <h2 
              className='showcase-view-pt'
              onClick={handleProjectClick}
            >
              PROJECTS
            </h2>
          </div>
        </div>

        <div className='lang-card'>
          <div className='icon-ctr'>
            <button className='icon-ctr-btn'>
              <img width={'40px'} height={'40px'} src={HtmlIcon} alt='Html icon' />
            </button>
            <button className='icon-ctr-btn'>
              <img width={'40px'} height={'40px'} src={CssIcon} alt='Css icon' />
            </button>
            <button className='icon-ctr-btn'>
              <img width={'40px'} height={'40px'} src={JsIcon} alt='JS icon' />
            </button>
            <button className='icon-ctr-btn'>
              <img width={'40px'} height={'40px'} src={ReactIcon} alt='React icon' />
            </button>
            <button className='icon-ctr-btn'>
              <img width={'40px'} height={'40px'} src={NodeIcon} alt='Node icon' />
            </button>
          </div>
          <p style={{ fontSize: '15px', color: 'grey', margin: '0px 20px 10px 20px' }}>Specialization</p>
          <h2 
            style={{ fontSize: '24px', margin: '0px 20px 30px 20px', cursor: 'pointer', color: 'rgba(47, 240, 147, 0.871)' }} 
            onClick={() => navigate("/experience")}
          >
            SERVICES OFFER
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
