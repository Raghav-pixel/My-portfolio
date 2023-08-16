import React from 'react';
import './Home.css';
import HtmlIcon from '../../assets/images/html-icon.svg';
import CssIcon from '../../assets/images/css-icon.svg';
import JsIcon from '../../assets/images/javascript-programming-language-icon.svg';
import ReactIcon from '../../assets/images/react-js-icon.svg';
import NodeIcon from '../../assets/images/node-js-icon.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
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
            style={{ fontSize: '20px', margin: '0px 20px 10px 20px', cursor: 'pointer', color: 'rgba(47, 240, 147, 0.871)' }}
            onClick={() => navigate("/about")}
          >
            ABOUT ME
          </h2>
        </div>

        <div className='project-card-home'>
          <div className='icon-ctr'>
            <img width={'60px'} height={'60px'} src={ReactIcon} alt='React icon' />
            <img width={'60px'} height={'60px'} src={NodeIcon} alt='Node icon' />
          </div>
          <div>
            <p style={{ fontSize: '15px', color: 'grey', margin: '0px 20px 10px 20px' }}>Showcase View</p>
            <h2 
              style={{ fontSize: '20px', margin: '0px 20px 10px 20px', cursor: 'pointer', color: 'rgba(47, 240, 147, 0.871)' }}
              onClick={() => navigate("/projects")}
            >
              PROJECTS
            </h2>
          </div>
        </div>

        <div className='lang-card'>
          <div className='icon-ctr'>
            <img width={'40px'} height={'40px'} src={HtmlIcon} alt='Html icon' />
            <img width={'40px'} height={'40px'} src={CssIcon} alt='Css icon' />
            <img width={'40px'} height={'40px'} src={JsIcon} alt='JS icon' />
            <img width={'40px'} height={'40px'} src={ReactIcon} alt='React icon' />
            <img width={'40px'} height={'40px'} src={NodeIcon} alt='Node icon' />
          </div>
          <p style={{ fontSize: '15px', color: 'grey', margin: '0px 20px 10px 20px' }}>Specialization</p>
          <h2 
            style={{ fontSize: '20px', margin: '0px 20px 10px 20px', cursor: 'pointer', color: 'rgba(47, 240, 147, 0.871)' }} 
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
