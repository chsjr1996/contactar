import styled from "styled-components";

import device from "@Config/device";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 30px);

  @media ${device.mobileL} {
    min-height: auto;
    height: 100%;
  }
`;

export const SubContainer = styled.div`
  width: 500px;
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
`;

export const Submit = styled.button.attrs(() => ({
  type: "submit",
  className: "btn btn-primary w-100 font-weight-bold",
}))``;
