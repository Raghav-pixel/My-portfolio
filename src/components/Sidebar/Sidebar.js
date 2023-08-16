import React from 'react';
import './Sidebar.css';
import LinkedInIcon from '../../assets/images/linkedIn.svg';
import GithubIcon from '../../assets/images/github.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

const navigate = useNavigate();

  return (
    <div className='sidebar-ctr'>
        <span className='sidebar-name'>Raghav</span>
        <hr style={{ backgroundColor: 'grey', margin: '20px' }}></hr>
        <div className='sidebar-info'>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/about")}>About Me</p>
            <p onClick={() => navigate("/projects")}>Projects</p>
            <p>Contact</p>
        </div>
        <hr style={{ backgroundColor: 'grey', margin: '20px' }}></hr>
        <h3>Follow Me:</h3>
        <div className='sidebar-social-media-icons-ctr'>
            <a href='https://www.linkedin.com/in/15-rk/'>
                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '10px', borderRadius: '5px', border: '1px solid black', height: '26px', backgroundColor: 'grey' }}>
                    <img src={LinkedInIcon} alt='linkedIn icon' />
                </button>
            </a>
            <a href='https://github.com/Raghav-pixel'>
                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '10px', borderRadius: '5px', border: '1px solid black', height: '26px', backgroundColor: 'grey' }}>
                    <img src={GithubIcon} alt='Github icon' />
                </button>
            </a>
            <a href='/'>
                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '10px', borderRadius: '5px', border: '1px solid black', height: '26px', backgroundColor: 'grey' }}>
                    <img src={InstagramIcon} alt='Instagram icon' />
                </button>
            </a>
        </div>
    </div>
  );
}

export default Sidebar;
