import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SubContainer = styled.div`
  width: 420px;
  height: 500px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 5px 1px #ccc;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const Submit = styled.button.attrs(() => ({
  type: "submit",
  className: "btn btn-primary w-100",
}))``;
