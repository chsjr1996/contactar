import React from "react";

import MainLayout from "@Layout/Main";
import * as S from "@Style/ContactPageStyle";

export default function Show() {
  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>I'm contact page</S.Title>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}
