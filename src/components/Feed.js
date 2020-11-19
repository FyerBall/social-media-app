import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SmsIcon from '@material-ui/icons/Sms';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

function Feed({ id, name, avatar, img }) {
  return (
    <Link className='feeds' to={`/profile/${id}`} key={id}>
      <div className='card__img'>
        <img className='card__image' src={img} alt={name} />
      </div>
      <div className='card__footer'>
        <div className='card__person'>
          <Avatar className='card__avatar' alt={name} src={avatar} />
          <div className=''>
            <h4 className='card__name'>{name}</h4>
            <small className='card__date'>
              {/* <Moment fromNow>{created}</Moment> */}
            </small>
          </div>
        </div>
        <div className='card__icons'>
          <span>
            <FavoriteIcon className='favIcon' />
            {/* {fav} */}
          </span>
          <span>
            <SmsIcon className='comIcon' />
            {/* {comments} */}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Feed;
