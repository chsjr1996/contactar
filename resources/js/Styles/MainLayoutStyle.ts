import styled from "styled-components";

import device from "@Config/device";

export const ChildrenContainer = styled.div`
  margin-top: 30px;

  @media ${device.mobileL} {
    margin-top: 0;
  }
`;
