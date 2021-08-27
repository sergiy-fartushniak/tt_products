import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => (
  <ul className="Header__nav">
    <li className="Header__item">
      <NavLink className="Header__link button" exact to="/">
        Product List
      </NavLink>
    </li>
    <li className="Header__item">
      <NavLink className="Header__link button" to="/details">
        Product Details
      </NavLink>
    </li>
  </ul>
);
