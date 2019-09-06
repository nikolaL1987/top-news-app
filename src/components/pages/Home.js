import React, { useContext, Fragment } from 'react';
import News from '../news/News';
import NewsContext from '../../context/news/newsContext';
import Spinner from '../layout/Spinner';

const Home = () => {
  const newsContext = useContext(NewsContext);

  const { loading } = newsContext;

  return <Fragment>{!loading ? <News /> : <Spinner />}</Fragment>;
};

export default Home;
