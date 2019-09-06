import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-items">
        <li className="navigation-item">
          <NavLink exact activeClassName="active" to="/">
            Top News
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink exact activeClassName="active" to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
