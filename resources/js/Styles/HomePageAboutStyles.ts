import styled from "styled-components";

import device from "@Config/device";

export const Container = styled.div`
  padding: 5px;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding: 15px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 5px 1px #ccc;
  background-color: white;

  @media ${device.mobileL} {
    margin-top: 0;
    border: 0;
    box-shadow: unset;
  }
`;

export const Title = styled.h1`
  font-size: 22px;

  @media ${device.mobileL} {
    margin-top: 30px;
  }
`;

export const Text = styled.p``;

export const GithubFork = styled.a.attrs(() => ({
  href: "https://github.com/chsjr1996/contactar",
  target: "_blank",
}))`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #333333;
  color: white;
  padding: 5px 15px;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;
