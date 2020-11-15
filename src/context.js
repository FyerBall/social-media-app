import React, { useEffect, useState } from 'react';
import { data } from './data';
export const FeedContext = React.createContext();

export default function GuruProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feeds, setFeed] = useState(data);
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
    setIsSorted(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [feeds]);
  return (
    <FeedContext.Provider value={{ feeds, isLoading, getNewest, getOldest }}>
      {children}
    </FeedContext.Provider>
  );
}
