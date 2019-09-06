import React, { Fragment, useContext, useEffect } from 'react';
import Article from '../article/Article';
import Spinner from '../layout/Spinner';

import NewsContext from '../../context/news/newsContext';

const News = () => {
  const newsContext = useContext(NewsContext);

  const {
    news,
    getNews,
    filtered,
    loading,
    language,
    setDisableLanguage
  } = newsContext;

  useEffect(() => {
    getNews();
    setDisableLanguage();

    // eslint-disable-next-line
  }, [language]);

  return (
    <div className="row">
      {news !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map(article => (
                <Article key={article.id} article={article} />
              ))
            : news.articles.map(article => (
                <Article key={article.id} article={article} />
              ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default News;
