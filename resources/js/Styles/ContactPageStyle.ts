import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
`;

export const SubContainer = styled.div`
  width: 500px;
  height: 570px;
  margin: 0 auto;
  padding: 15px;
  overflow-y: scroll;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 5px 1px #ccc;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const Submit = styled.button.attrs(() => ({
  type: "submit",
  className: "btn btn-primary w-100 font-weight-bold",
}))``;
