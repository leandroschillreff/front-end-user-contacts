import { ReactNode } from 'react';

interface IBaseTitleProps {
  tag: string;
  className: string;
  children: ReactNode;
}

export const BaseTitle = ({ tag, className, children }: IBaseTitleProps) => (
  <>
    {tag === 'h1' && <h1 className={className}>{children}</h1>}
    {tag === 'h2' && <h2 className={className}>{children}</h2>}
    {tag === 'h3' && <h3 className={className}>{children}</h3>}
    {tag === 'h4' && <h4 className={className}>{children}</h4>}
  </>
);
