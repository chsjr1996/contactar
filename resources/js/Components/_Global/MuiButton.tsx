import React from 'react';
import { Link } from '@inertiajs/react';
import { Button, ButtonProps } from '@mui/material';

type MuiButtonProps = {
  children: React.ReactNode;
  href?: string;
  externalHref?: boolean;
  target?: '_blank' | '_self';
} & ButtonProps;

const MuiButton: React.FC<MuiButtonProps> = ({
  children,
  href,
  externalHref,
  target = '_self',
  ...props
}): JSX.Element => {
  if (href && externalHref) {
    return (
      <a href={href} target={target}>
        <Button {...props}>{children}</Button>
      </a>
    );
  }

  if (href && !externalHref) {
    return (
      <Link href={href}>
        <Button {...props}>{children}</Button>
      </Link>
    );
  }

  return <Button {...props}>{children}</Button>;
};

export { MuiButton };
