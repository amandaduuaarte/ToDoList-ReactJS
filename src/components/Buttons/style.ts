import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20.4rem;
  color: var(--gray-50);

  @media (max-width: 900px) {
    margin: 0 1rem;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 2.625rem;
    @media (max-width: 900px) {
      align-self: flex-start;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    width: 32%;
    justify-content: space-between;
    margin-top: 2.5rem;
    @media (max-width: 900px) {
      width: 98%;
    }

    button {
      border: 1px solid #414052;
      height: 3rem;
      width: 12.188rem;
      border-radius: 1.25rem;
      cursor: pointer;
      background: var(--gray-950);
      color: var(--gray-50);
      font-family: "Inter", sans-serif;
      font-weight: 600;

      :first-child {
        background: var(--gray-750);
        border: none;
      }
      @media (max-width: 900px) {
        width: 10rem;
        margin-right: 1rem;
      }
    }
  }
`;
