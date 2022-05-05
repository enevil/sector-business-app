import React from 'react';
import { Outlet } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import css from './MainLayout.module.css';

export default function MainLayout() {
  return (
    <div className={css.container}>
      <Searchbar className={css.searchbar} />
      <Outlet />
    </div>
  );
}
