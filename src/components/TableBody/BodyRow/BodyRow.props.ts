import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface BodyRowProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  _id: number;
  title: string;
  description: string;
}
