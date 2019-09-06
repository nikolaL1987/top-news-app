import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import NewsCategories from './components/pages/NewsCategories';
import Category from './components/categories/Category';
import Header from './components/layout/header/Header';
import ArticleDetails from './components/article/ArticleDetails';
import NotFound from './components/layout/NotFound';

import NewsState from './context/news/NewsState';

const App = () => {
  return (
    <NewsState>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={NewsCategories} />
            <Route exact path="/categories/:category" component={Category} />
            <Route exact path="/categories/:id" component={ArticleDetails} />
            <Route exact path="/articles/:id" component={ArticleDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </NewsState>
  );
};

export default App;
