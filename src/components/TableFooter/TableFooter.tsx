import React from 'react';
import cn from 'classnames';
import { Link, Navigate, useParams } from 'react-router-dom';
import css from './TableFooter.module.css';
import TableFooterProps from './TableFooter.props';
import useAppSelector from '../../redux/useAppSelector';

export default function TableFooter({ className }: TableFooterProps) {
  const { filteredPosts } = useAppSelector((reducer) => reducer.posts);
  const { page } = useParams();
  const availablePages = Math.ceil(filteredPosts.length / 10);

  if (!page) return <Navigate to="/page/1" />;

  return (
    <tfoot className={cn(className, css.container)}>
      <tr className={css.tr}>
        { +page > 1
          ? <td className={css.button}><Link to={`/page/${+page - 1}`}>Назад</Link></td>
          : <td className={cn(css.button, css.disabled)}>Назад</td>}
        <td className={css.pages}>
          {Array.from({ length: availablePages }, (_, i) => i + 1)
            .map((i) => <Link key={i} className={cn({ [css.active]: i === +page })} to={`/page/${i}`}>{i}</Link>)}
        </td>
        { +page < availablePages
          ? <td className={css.button}><Link to={`/page/${+page + 1}`}>Вперед</Link></td>
          : <td className={cn(css.button, css.disabled)}>Вперед</td>}
      </tr>
    </tfoot>
  );
}
