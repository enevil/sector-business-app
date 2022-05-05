import React from 'react';
import TableBody from '../../components/TableBody/TableBody';
import TableFooter from '../../components/TableFooter/TableFooter';
import TableHeader from '../../components/TableHeader/TableHeader';
import css from './Home.module.css';

export default function Home() {
  return (
    <table className={css.container}>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </table>
  );
}
