import React from 'react';
import cn from 'classnames';
import css from './BodyRow.module.css';
import BodyRowProps from './BodyRow.props';

export default function BodyRow({
  _id, title, description, className,
}: BodyRowProps) {
  return (
    <tr className={cn(className, css.tr)}>
      <td>{_id}</td>
      <td>{title}</td>
      <td>{description}</td>
    </tr>

  );
}
