import React from "react";

import * as S from "@Style/MainLayoutStyle";
import Header from "@Component/Header";

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
}

export default MainLayout;
