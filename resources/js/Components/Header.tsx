import React from 'react';
import { Link } from '@inertiajs/react';
import * as S from '@Style/HeaderComponentStyle';

export default function Header() {
  return (
    <S.Header>
      <Link id="header-app-icon" href="/">
        <S.AppIcon />
      </Link>
      <Link id="header-app-name" href="/">
        <S.AppTitle>Contactar</S.AppTitle>
      </Link>
    </S.Header>
  );
}
