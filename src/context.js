import React, { useEffect, useState } from 'react';
import { data } from './data';
export const FeedContext = React.createContext();

export default function GuruProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feeds, setFeed] = useState(data);
  const [newest, setNewest] = useState([]);
  // Methods
  const getNewest = () => {
    const newest = data.sort((a, b) => (a ? -1 : b ? 1 : 0));
    setFeed([]);
  };

  console.log('state', feeds);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // setNewest(getNewest());
  }, []);
  return (
    <FeedContext.Provider value={{ feeds, isLoading, newest }}>
      {children}
    </FeedContext.Provider>
  );
}
