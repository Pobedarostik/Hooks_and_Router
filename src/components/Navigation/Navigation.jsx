import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => (
  <div className={s.nav}>
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.active_link}>
        Головна
      </NavLink>

      <NavLink to="/phone" className={s.link} activeClassName={s.active_link}>
        PhoneBook
      </NavLink>

      <NavLink to="/feed" className={s.link} activeClassName={s.active_link}>
        FeedBack
      </NavLink>

      <NavLink to="/search" className={s.link} activeClassName={s.active_link}>
        SearchPhoto
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
