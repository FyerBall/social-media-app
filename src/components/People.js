import React, { useContext } from 'react';
import { FeedContext } from '../context';
function People() {
  const { feeds } = useContext(FeedContext);
  return (
    <>
      <div className='people'>
        {feeds.map((people) => {
          const { id, name, avatar } = people;
          return (
            <div className='people__container' key={id}>
              <img src={avatar} alt='' />
              <h6 className='people__name'>{name.split(' ')[0]}</h6>
            </div>
          );
        })}
      </div>
      <div className='divider'></div>
    </>
  );
}

export default People;
