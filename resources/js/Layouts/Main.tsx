import React from "react";

import * as S from "@Style/MainLayoutStyle";
import Header from "@Component/Header";

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
}
