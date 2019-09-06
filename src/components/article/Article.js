import React, { Fragment } from 'react';
import './Article.scss';
import { Link } from 'react-router-dom';

const Article = ({ article, link }) => {
  const { title, urlToImage, description } = article;

  return (
    <Fragment>
      {article !== null && (
        <div className="article">
          <div className="article-inner">
            <h3 className="article-title">{title}</h3>
            <div className="article-body">
              <img
                src={urlToImage}
                alt="Article item"
                className="article-image"
              />
              <p className="article-description">{description}</p>
              <Link
                className="link"
                to={link ? link : `/articles/${article.id}`}>
                More >
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Article;
