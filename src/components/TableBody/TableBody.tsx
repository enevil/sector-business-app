import React, { useEffect, useMemo } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import css from './TableBody.module.css';
import TableBodyProps from './TableBody.props';
import BodyRow from './BodyRow/BodyRow';
import useAppSelector from '../../redux/useAppSelector';
import useAppDispatch from '../../redux/useAppDispatch';
import { fetchPosts } from '../../redux/postsSlice';

export default function TableBody({ className }: TableBodyProps) {
  const { filteredPosts } = useAppSelector((reducer) => reducer.posts);
  const dispatch = useAppDispatch();
  const { page } = useParams();

  const currentPage = useMemo(() => {
    if (page && filteredPosts.length) {
      return filteredPosts.slice((+page - 1) * 10, +page * 10);
    }
    return filteredPosts;
  }, [page, filteredPosts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <tbody className={cn(css.container, className)}>
      {currentPage.map((i) => <BodyRow key={i.id} _id={i.id} title={i.title} description={i.body} />)}
    </tbody>
  );
}
