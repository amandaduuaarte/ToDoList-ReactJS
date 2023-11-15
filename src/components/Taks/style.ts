import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3.813rem 0 11.063rem 0;

  @media (max-width: 900px) {
    margin: 1.5rem 0 2rem 0;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 79rem;
  height: 17.25rem;
  border-radius: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 900px) {
    height: 22.5rem;
    width: 21rem;
    margin-bottom: 0.25rem;
  }
`;

export const InnerHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.375rem;
  background: var(--gray-750);
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;

  @media (max-width: 900px) {
    height: 3rem;
  }

  & img:first-child {
    height: 1.875rem;
    width: 1.875rem;
    margin: 1.25rem;

    @media (max-width: 900px) {
      margin: 0.9rem;
    }
  }

  & h2 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: var(--gray-50);
    align-self: start;
    padding: 1.75rem 0;

    @media (max-width: 900px) {
      padding: 1rem 0;
    }
  }
`;

export const InnerImg = styled.img`
  margin-left: 65rem;
`;

export const InnerMain = styled.main`
  height: 9.188rem;
  text-align: start;
  background: var(--gray-900);
  color: var(--gray-50);
  font-family: "Inter", sans-serif;
  font-weight: 400;
  padding: 1.25rem;

  @media (max-width: 900px) {
    height: 17.75rem;
  }
`;

export const InnerFooter = styled.footer`
  height: 3.688rem;
  color: var(--gray-50);
  background: var(--gray-750);
  text-align: center;
  padding: 1.25rem 0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
`;
