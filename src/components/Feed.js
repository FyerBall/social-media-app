import React, { Fragment, useContext, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SmsIcon from '@material-ui/icons/Sms';
import Moment from 'react-moment';
import { FeedContext } from '../context';

function Feed() {
  const { feeds, isLoading, newest } = useContext(FeedContext);
  console.log(newest);

  return (
    <section className='feed'>
      <div className='feed__header'>
        <h3>Feed</h3>
        <div className='feed__cta'>
          <button onClick={() => console.log('Newest')}>Newest</button>
          <button onClick={() => console.log('Oldest Clicked')}>Oldest</button>
          <button onClick={() => console.log('All Clicked')}>All</button>
        </div>
      </div>

      {isLoading ? (
        // TODO:Loading Component
        'loading...'
      ) : (
        <div className='card'>
          {feeds.map((item) => {
            const {
              id,
              name,
              avatar,
              feed: { img, fav, comments, created },
            } = item;

            return (
              <Fragment key={id}>
                <div className='card__img'>
                  <img className='card__image' src={img} alt={name} />
                </div>
                <div className='card__footer'>
                  <div className='card__person'>
                    <img className='card__avatar' src={avatar} alt='' />
                    <div className=''>
                      <h4 className='card__name'>{name}</h4>
                      <small className='card__date'>
                        {/* {created.toLocaleString()} */}
                        <Moment fromNow>{created}</Moment>
                      </small>
                    </div>
                  </div>
                  <div className='card__icons'>
                    <span>
                      <FavoriteIcon className='favIcon' />
                      {fav}
                    </span>
                    <span>
                      <SmsIcon className='comIcon' />
                      {comments}
                    </span>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Feed;
