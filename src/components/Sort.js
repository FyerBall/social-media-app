import React from 'react';

function Sort() {
  return (
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
  );
}

export default Sort;
