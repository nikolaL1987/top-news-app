import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../article/Article';
import Spinner from '../layout/Spinner';

import NewsContext from '../../context/news/newsContext';

let API_KEY = '5bef04c4c3e344139881babf6990d912';

const Category = ({
  match: {
    params: { category }
  }
}) => {
  const newsContext = useContext(NewsContext);
  const { language, setDisableLanguage } = newsContext;

  const [isLoading, setIsLoading] = useState(false);

  const [categoryNews, setCategoryNews] = useState({
    categoryNews: null
  });

  useEffect(() => {
    setDisableLanguage();
    const fecthCategory = async () => {
      setIsLoading(true);
      const response = await axios(
        `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&apiKey=${API_KEY}`
      );

      setCategoryNews(response.data);
      setIsLoading(false);
    };

    fecthCategory();
    // eslint-disable-next-line
  }, [language]);

  return (
    <Fragment>
      {categoryNews !== null && !isLoading ? (
        <div className="row">
          {categoryNews.articles &&
            categoryNews.articles.map(article => (
              <Article
                key={article.id}
                article={article}
                link={`/categories/${article.source.id}`}
              />
            ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Category;
