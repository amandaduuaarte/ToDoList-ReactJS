import styled from "styled-components";
import { colors } from "../../style/colors";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.background["blue-dark"]};
  width: 100px;
  height: 3rem;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${colors.background.blue};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.base["gray-100"]};
`;

export const ButtonText = styled.p`
  font-family: "Inter";
  font-size: 0.8rem;
  font-weight: 700;
`;
