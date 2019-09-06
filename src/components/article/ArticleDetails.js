import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

import NewsContext from '../../context/news/newsContext';

const ArticleDetails = ({
  match: {
    params: { id }
  }
}) => {
  const newsContext = useContext(NewsContext);
  const { news, setDisableLanguage } = newsContext;

  const article = news && news.articles.find(article => article.id == id);
  useEffect(() => {
    setDisableLanguage(true);

    // eslint-disable-next-line
  }, [id]);

  return (
    <Fragment>
      {article !== null ? (
        <div className="article article-details">
          <h3 className="article-title">{article.title}</h3>
          <img
            src={article.urlToImage}
            alt="Article"
            className="article-image"
          />
          <div className="article-content">{article.content}</div>
          <Link className="link" to="/">
            Back to list
          </Link>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ArticleDetails;
