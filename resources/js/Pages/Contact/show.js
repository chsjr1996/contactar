import React from "react";

import MainLayout from "../../Layouts/Main";
import * as S from "../../Styles/ContactPageStyle";

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
