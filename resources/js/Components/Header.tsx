import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import * as S from "@Style/HeaderComponentStyle";

export default function Header() {
  return (
    <S.Header>
      <InertiaLink href='/'>
        <S.AppIcon />
      </InertiaLink>
      <InertiaLink href='/'>
        <S.AppTitle>Contactar</S.AppTitle>
      </InertiaLink>
    </S.Header>
  );
}
