import React from "react";

import * as S from "../Styles/MainLayoutStyle";
import Header from "../Components/Header";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
}
