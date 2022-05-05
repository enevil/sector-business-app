import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import css from './Searchbar.module.css';
import SearchbarProps from './Searchbar.props';
import { ReactComponent as LoopIcon } from './loupe.svg';
import { setSearchString } from '../../redux/postsSlice';
import useAppDispatch from '../../redux/useAppDispatch';

export default function Searchbar({ className }: SearchbarProps) {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchString(value));
  }, [dispatch, value]);

  return (
    <div className={cn(className, css.container)}>
      <input
        value={value}
        onInput={(e) => { setValue(e.currentTarget.value); }}
        placeholder="Поиск"
        className={css.input}
      />
      <LoopIcon className={css.icon} />
    </div>

  );
}
