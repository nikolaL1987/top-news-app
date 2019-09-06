import React, { useReducer, useState } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import { GET_NEWS, FILTER_NEWS, CLEAR_FILTER, NEWS_ERROR } from '../types';

let API_KEY = '5bef04c4c3e344139881babf6990d912';

const NewsState = props => {
  const initalState = {
    news: null,
    filtered: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(NewsReducer, initalState);
  const [language, setLanguage] = useState('gb');
  const [disableLanguage, setDisableLanguage] = useState(false);
  // Get Top News

  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=${API_KEY}`
      );
      response.data.articles.forEach((item, i) => (item.id = uuid(i)));

      dispatch({
        type: GET_NEWS,
        payload: response.data
      });
    } catch (err) {
      dispatch({
        type: NEWS_ERROR,
        payload: err.message
      });
    }
  };

  // Filter News
  const filterNews = text => {
    dispatch({
      type: FILTER_NEWS,
      payload: text
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        filtered: state.filtered,
        loading: state.loading,
        error: state.error,
        getNews,
        filterNews,
        clearFilter,
        language,
        setLanguage,
        disableLanguage,
        setDisableLanguage
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
