import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/Carousel';
import Article from '../article/Article';
import Spinner from '../layout/Spinner';
import categories from '../../utils/Categories';

import NewsContext from '../../context/news/newsContext';

let API_KEY = '5bef04c4c3e344139881babf6990d912';

const Categories = () => {
  const newsContext = useContext(NewsContext);
  const { language, setDisableLanguage } = newsContext;

  const [categoryNews, setCategoryNews] = useState({
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: []
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisableLanguage();
    const fecthCategories = async () => {
      setIsLoading(true);
      await Promise.all(
        categories.map(async category => {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${language}&category=${category.value}&apiKey=${API_KEY}`
          );

          setCategoryNews(categoryNews => ({
            ...categoryNews,
            [category.value]: response.data.articles
          }));
        })
      );
      setIsLoading(false);
    };

    fecthCategories();
    // eslint-disable-next-line
  }, [language]);
  return (
    <Fragment>
      {!isLoading ? (
        Object.keys(categoryNews).map(category => {
          return (
            <Fragment key={category}>
              <Link
                className="link link-categories"
                to={`/categories/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
              <Fragment>
                <Carousel>
                  {categoryNews[category].map(article => (
                    <Article
                      key={article.id}
                      article={article}
                      link={`/categories/${article.source.id}`}
                    />
                  ))}
                </Carousel>
              </Fragment>
            </Fragment>
          );
        })
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Categories;
