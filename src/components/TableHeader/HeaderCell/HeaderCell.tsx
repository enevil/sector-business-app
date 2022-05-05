import React from 'react';
import cn from 'classnames';
import css from './HeaderCell.module.css';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import HeaderCellProps from './HeaderCell.props';
import useAppDispatch from '../../../redux/useAppDispatch';
import { setSortType } from '../../../redux/postsSlice';

export default function HeaderCell({
  active, title, sortBy, className,
}: HeaderCellProps) {
  const dispatch = useAppDispatch();

  return (
    <th
      onClick={() => {
        dispatch(setSortType(sortBy));
      }}
      className={cn(className, css.th, { [css.active]: active })}
    >
      <span>{title}</span>
      <ArrowIcon />
    </th>
  );
}
