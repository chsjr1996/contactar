import React from "react";

import Header from "../Components/Header";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
