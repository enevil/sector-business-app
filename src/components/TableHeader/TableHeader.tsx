import React from 'react';
import cn from 'classnames';
import css from './TableHeader.module.css';
import { TableHeaderProps } from './TableHeader.props';
import HeaderCell from './HeaderCell/HeaderCell';
import useAppSelector from '../../redux/useAppSelector';
import { SortCategory } from '../../redux/postsSlice';

interface TableHeaderCell {
  title: string,
  target: SortCategory
}

export default function TableHeader({ className }: TableHeaderProps) {
  const { sortBy } = useAppSelector((reducer) => reducer.posts);

  const tableHeaderData: TableHeaderCell[] = [
    { title: 'ID', target: 'id' },
    { title: 'Заголовок', target: 'title' },
    { title: 'Описание', target: 'body' },
  ];

  return (
    <thead className={cn(css.container, className)}>
      <tr className={css.tr}>
        {tableHeaderData.map((i) => (
          <HeaderCell
            key={i.target}
            title={i.title}
            active={i.target === sortBy}
            sortBy={i.target}
          />
        ))}
      </tr>
    </thead>
  );
}
