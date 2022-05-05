import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SortCategory } from '../../../redux/postsSlice';

export default interface TableHeaderProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  title: string;
  active: boolean;
  sortBy: SortCategory
}
