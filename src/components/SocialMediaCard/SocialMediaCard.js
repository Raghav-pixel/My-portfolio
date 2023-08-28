import React from 'react';
import './SocialMediaCard.css';
import avatar from '../../assets/images/avatar.svg';
import LinkedInIcon from '../../assets/images/linkedIn.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import GithubIcon from '../../assets/images/github.svg';

const SocialMediaCard = () => {

  const handleDownload = () => {
    // Perform actions to prepare the file for download
    // For example, create a Blob or fetch the file from an API

    // Simulate a file to download (replace with your actual file URL)
    const fileUrl = 'https://drive.google.com/file/d/1qsC5nHBBpHlwagYIwjBGZpRhh9-Z-xTh/view?usp=drive_link';

    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.target='_blank'
    anchor.download = 'Raghav khanna resume.pdf'; // Set the desired filename
    anchor.click();
  };

  return (
    <div className='container'>
      <img className='ctr-profile' src={avatar} height={'170px'} width={'170px'} style={{ margin: '40px 0', borderRadius: '16px' }} alt='profile_pic' />
      <div className='job-ctr'>
        <p className='profile-name'>HI! I'M <span style={{ color: 'rgba(47, 240, 147, 0.871)' }}>RAGHAV KHANNA</span></p>
        <p className='profile-job'>Frontend Developer</p>
      </div>
      <br></br>
      <div className='contact-ctr'>
        <p className='profile-email'>raghavkhanna468@gmail.com</p>
        <p className='profile-mobile'>9455225055</p>
      </div>
      <div className='social-media-icons-ctr'>
        <a href='https://www.linkedin.com/in/15-rk/'>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '10px', borderRadius: '5px', border: '1px solid black', height: '26px', backgroundColor: 'grey' }}>
                <img src={LinkedInIcon} alt='linkedIn icon' color='grey' />
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
      <button onClick={handleDownload} className='cv-btn'>
          Download CV
      </button>
    </div>
  );
}

export default SocialMediaCard;
