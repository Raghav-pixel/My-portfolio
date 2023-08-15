import React from 'react';
import './Experience.css';
import ProgressBar from '../../containers/ProgressBar/ProgressBar';

const Experience = () => {
  return (
    <div className='exp-ctr'>
        <h3 className='exp'>SKILLS</h3>
        <div className='experience-ctr'>
            <ProgressBar language={'ReactJs'} percentage={'80%'} />
            <ProgressBar language={'Nodejs'} percentage={'75%'} />
            <ProgressBar language={'Javascript'} percentage={'90%'} />
            <ProgressBar language={'HTML'} percentage={'90%'} />
            <ProgressBar language={'CSS'} percentage={'75%'} />
        </div>
    </div>
  );
}

export default Experience;
