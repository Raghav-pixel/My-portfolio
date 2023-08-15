import React from 'react';
import './Header.css';
import HamburgerIcon from '../../assets/images/hamburger.svg';

const Header = ({ isSideModalOpen, setIsSideModalOpen }) => {
  return (
    <div className='header'>
      <span className='name'>Raghav</span>
      <div className='info'>
        <p style={{ cursor: 'pointer' }}>Home</p>
        <p style={{ cursor: 'pointer' }}>About Me</p>
        <p style={{ cursor: 'pointer' }}>Contact</p>
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
