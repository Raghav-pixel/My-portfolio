import React, { useState } from 'react';
import './Header.css';
import HamburgerIcon from '../../assets/images/hamburger.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsSideModalOpen, selectedHeader, setSelectedHeader }) => {
  const navigate = useNavigate();
  // const [ selectedHeader, setSelectedHeader ] = useState('home');

  const handleHomeClick = () => {
    setSelectedHeader('home');
    navigate('/')
  }

  const handleAboutClick = () => {
    setSelectedHeader('about');
    navigate('/about')
  }

  const handleProjectClick = () => {
    setSelectedHeader('projects');
    navigate('/projects')
  }

  return (
    <div className='header'>
      <span className='name'>Raghav</span>
      <div className='info'>
        <p 
          className={`header-home ${selectedHeader === 'home' ? 'selected' : ''}`} 
          style={{ cursor: 'pointer' }} 
          onClick={handleHomeClick}
        >
          Home
        </p>
        <p 
          className={`header-about ${selectedHeader === 'about' ? 'selected' : ''}`}
          style={{ cursor: 'pointer' }} 
          onClick={handleAboutClick}
        >
          About Me
        </p>
        <p 
          className={`header-projects ${selectedHeader === 'projects' ? 'selected' : ''}`} 
          style={{ cursor: 'pointer' }} 
          onClick={handleProjectClick}
        >
          Projects
        </p>
      </div>
      <div className='img-ctr'>
        {/* <p>Dark/Light</p>
        <img className='dark-img' src='' alt='sun' /> */}
        <img className='nav-icon' src={HamburgerIcon} alt="nav-icon" onClick={() => setIsSideModalOpen(true)} />
      </div>
    </div>
  );
}

export default Header;
