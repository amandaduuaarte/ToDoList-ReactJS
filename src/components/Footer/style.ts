import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 10rem;
  justify-content: center;

  div {
    width: 70rem;
    height: 0.063rem;
    border-top: 1px solid #414052;
    margin-bottom: 3.688rem;
    text-align: center;

    @media (max-width: 900px) {
      padding: 0;
      width: 50rem;
    }

    p {
      padding-top: 1.25rem;
      color: var(--gray-50);
      font-family: "Inter", sans-serif;
      font-weight: 300;
      font-size: 1rem;
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
`;
