import React from 'react';
import avatar from '../assets/alex-suprun.jpg';
function People() {
  return (
    <>
      <div className='people'>
        <div className='people__container'>
          <img src={avatar} alt='' />
          <span className='people__name'>name</span>
        </div>
        <div className='people__container'>
          <img src={avatar} alt='' />
          <span className='people__name'>name</span>
        </div>
        <div className='people__container'>
          <img src={avatar} alt='' />
          <span className='people__name'>name</span>
        </div>
        <div className='people__container'>
          <img src={avatar} alt='' />
          <span className='people__name'>name</span>
        </div>
        <div className='people__container'>
          <img src={avatar} alt='' />
          <span className='people__name'>name</span>
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
}

export default People;
