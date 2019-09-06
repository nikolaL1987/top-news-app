import React from 'react';
import './HeaderNav.scss';
import HeaderNav from './HeaderNav';
import HeaderCountrySelect from './HeaderCountrySelect';
import SearchFilter from '../../news/SearchFilter';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-inner">
          <HeaderNav />
          <SearchFilter />
          <HeaderCountrySelect />
        </div>
      </header>
    </div>
  );
};

export default Header;
