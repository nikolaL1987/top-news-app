import {
  GET_NEWS,
  ADD_NEWS,
  FILTER_NEWS,
  CLEAR_FILTER,
  NEWS_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_NEWS:
    case ADD_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      };
    case FILTER_NEWS:
      return {
        ...state,
        filtered: state.news.articles.filter(article => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return article.title.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case NEWS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
