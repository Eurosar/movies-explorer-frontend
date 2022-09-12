import React from 'react';
import './NavTab.css';

const NavTab = ({ items, blockNameStyles }) => {
  return (
    <ul className={`nav__items nav__items_style_${blockNameStyles}`}>
      {items.map(item =>
        <li className={`nav__item item__${item.style}`}>
          {item.content}
        </li>
      )}
    </ul>
  );
};

export default NavTab;