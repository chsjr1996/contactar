import React from "react";
import ReactNotification from "react-notifications-component";

import * as S from "@Style/MainLayoutStyle";
import Header from "@Component/Header";

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <ReactNotification />
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
}

export default MainLayout;
