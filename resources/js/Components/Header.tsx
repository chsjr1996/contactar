import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import * as S from "@Style/HeaderComponentStyle";

export default function Header() {
  return (
    <S.Header>
      <InertiaLink id="header-app-icon" href='/'>
        <S.AppIcon />
      </InertiaLink>
      <InertiaLink id="header-app-name" href='/'>
        <S.AppTitle>Contactar</S.AppTitle>
      </InertiaLink>
    </S.Header>
  );
}
