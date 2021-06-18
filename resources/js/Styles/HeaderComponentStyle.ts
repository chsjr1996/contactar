import styled from "styled-components";

import device from "@Config/device";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  box-shadow: 0px 2px 3px 1px #333;

  @media ${device.mobileL} {
    position: unset;
  }
`;

export const AppIcon = styled.img.attrs(() => ({
  src: "/img/contactar-small.png",
  alt: "Application icon",
}))`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 35px;
  height: 35px;
`;

export const AppTitle = styled.p`
  margin: 0;
  font-size: 22px;
  color: white;
`;
