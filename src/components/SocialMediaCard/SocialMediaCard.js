import React from 'react';
import './SocialMediaCard.css';
import avatar from '../../assets/images/avatar.svg';
import LinkedInIcon from '../../assets/images/linkedIn.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import GithubIcon from '../../assets/images/github.svg';

const SocialMediaCard = () => {
  return (
    <div className='container'>
      <img className='ctr-profile' src={avatar} height={'170px'} width={'170px'} style={{ margin: '40px 0', borderRadius: '16px' }} alt='profile_pic' />
      <div className='job-ctr'>
        <p className='profile-name'>HI! I'M <span style={{ color: 'rgba(47, 240, 147, 0.871)' }}>RAGHAV KHANNA</span></p>
        <p className='profile-job'>FullStack Developer</p>
      </div>
      <br></br>
      <div className='contact-ctr'>
        <p className='profile-email'>raghavkhanna468@gmail.com</p>
        <p className='profile-mobile'>9455225055</p>
      </div>
      <div className='social-media-icons-ctr'>
        <a href='/'>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '10px', borderRadius: '5px', border: '1px solid black', height: '26px', backgroundColor: 'grey' }}>
                <img src={LinkedInIcon} alt='linkedIn icon' color='grey' />
            </button>
        </a>
        <a href='/'>
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
      <button className='cv-btn'>Download CV</button>
    </div>
  );
}

export default SocialMediaCard;
