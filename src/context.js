import React, { useEffect, useState } from 'react';
import { data } from './data';
import { db } from './firebase';
export const FeedContext = React.createContext();

export default function GuruProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [newest, setNewest] = useState();
  const [isSorted, setIsSorted] = useState(true);

  // Methods
  const getNewest = () => {
    const newest = feeds.sort((a, b) => {
      let dateA = new Date(a.feed.created),
        dateB = new Date(b.feed.created);
      return dateB - dateA;
    });
    console.log(newest);
    setNewest(newest);
  };

  const getOldest = () => {
    const newest = feeds.sort((a, b) => {
      let dateA = new Date(a.feed.created),
        dateB = new Date(b.feed.created);
      return dateA - dateB;
    });
    console.log(newest);
    setNewest(['']);
  };

  // const sortByDate = () => {
  //   if () {

  //   } else {

  //   }

  // }

  useEffect(() => {
    db.collection('feeds').onSnapshot((snapshot) => {
      // every time a new thing (feed) added, the code will fire
      setFeeds(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <FeedContext.Provider value={{ feeds, isLoading, getNewest, getOldest }}>
      {children}
    </FeedContext.Provider>
  );
}
