import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import avatar from '../assets/alex-suprun.jpg';
import cardImg from '../assets/card.jpg';
import SmsIcon from '@material-ui/icons/Sms';
function Feed() {
  return (
    <section className='feed'>
      <div className='feed__header'>
        <h3>Feed</h3>
        <div className='feed__cta'>
          <button onClick={() => console.log('Newest Clicked')}>Newest</button>
          <button onClick={() => console.log('Oldest Clicked')}>Oldest</button>
          <button onClick={() => console.log('All Clicked')}>All</button>
        </div>
      </div>

      <div className='card'>
        <div className='card__img'>
          <img className='card__image' src={cardImg} alt='' />
        </div>
        <div className='card__footer'>
          <div className='card__person'>
            <img className='card__avatar' src={avatar} alt='' />
            <h4 className='card__name'>Willie Brandt</h4>
          </div>
          <div className='card__icons'>
            <span>
              <FavoriteIcon className='favIcon' />
              235
            </span>
            <span>
              <SmsIcon className='comIcon' />
              894
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feed;
