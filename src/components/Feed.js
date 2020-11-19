import React, { Fragment, useContext, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SmsIcon from '@material-ui/icons/Sms';
import Moment from 'react-moment';
import { FeedContext } from '../context';
import { Link } from 'react-router-dom';

function Feed() {
  const { feeds, isLoading, getNewest, getOldest } = useContext(FeedContext);

  return (
    <section className='feed'>
      <div className='feed__header'>
        <h3>Feed</h3>
        <div className='feed__cta'>
          <p>Sort By</p>
          <select>
            <option value='newest' onSelect={() => console.log('Clicked')}>
              newest
            </option>
            <option value='oldest' onClick={() => console.log('Clicked')}>
              oldest
            </option>
            <option value='all' onClick={() => console.log('Clicked')}>
              all
            </option>
          </select>
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
              <Link to={`/profile/${id}`} key={id}>
                <div className='card__img'>
                  <img className='card__image' src={img} alt={name} />
                </div>
                <div className='card__footer'>
                  <div className='card__person'>
                    <img className='card__avatar' src={avatar} alt={name} />
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
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Feed;
