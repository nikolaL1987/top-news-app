import React, { useContext, useState } from 'react';
import './HeaderCountrySelect.scss';
import countries from '../../../utils/Countries';

import NewsContext from '../../../context/news/newsContext';

const HeaderCountrySelect = () => {
  const newsContext = useContext(NewsContext);

  const { setLanguage, disableLanguage } = newsContext;

  const [active, setActive] = useState(null);

  return (
    <div className="country-select">
      {countries.map(country => (
        <button
          className={active == country.value ? 'active' : ''}
          key={country.value}
          disabled={disableLanguage ? 'disable' : false}
          onClick={() => (
            setLanguage(country.value), setActive(country.value)
          )}>
          {country.label}
        </button>
      ))}
    </div>
  );
};

export default HeaderCountrySelect;
