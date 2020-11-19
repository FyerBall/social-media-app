import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { FeedContext } from '../context';

function Profile() {
  const { feeds } = useContext(FeedContext);
  console.log(feeds);

  const { slug } = useParams();
  // needed to parse the id otherwise we will get undefined
  const feed = feeds.find((item) => item.id === parseInt(slug));

  const { avatar, name, bio } = feed;

  return (
    <div className='profile'>
      <header>
        <div className='profile__header'>
          <img
            className='card__avatar profile__avatar'
            src={avatar}
            alt={name}
          />
          <h3>{name}</h3>
        </div>
        <p className='bio'>{bio}</p>
        <div className='divider'></div>
      </header>
      {/* Feed?? maybe */}
    </div>
  );
}

export default Profile;
