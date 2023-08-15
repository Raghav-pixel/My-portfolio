import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ language, percentage }) => {
  return (
    <div className='lang-bar-ctr'>
      <div className='lang-per'>
          <span>{language}</span>
          <span>{percentage}</span>
      </div>
      <div className='progress-bar-ctr'>
          <div style={{ width: `${percentage}` }} className='progress-bar'></div>
      </div>
    </div>
  );
}

export default ProgressBar;