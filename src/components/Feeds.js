import React, { useContext } from 'react';

import { FeedContext } from '../context';

import Sort from './Sort';
import Feed from './Feed';
function Feeds() {
  const { feeds, isLoading } = useContext(FeedContext);

  return (
    <section className='feed'>
      <Sort />

      {isLoading ? (
        // TODO:Loading Component
        'loading...'
      ) : (
        <div className='card'>
          {feeds.map((feed, id) => (
            <Feed key={id} {...feed} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Feeds;
