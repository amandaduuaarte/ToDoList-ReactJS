import styled from "styled-components";

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin: 0 20.4rem;
  color:var(--gray-50);

  h2{
    font-weight: 600;
    font-size:2.625rem;
  }

 
  div{
    display:flex;
    flex-direction:row;
    width: 32%;
    justify-content:space-between;
    margin-top:2.5rem;
    
    button{
    border:1px solid #414052;
    height: 3rem;
    width:12.188rem;
    border-radius:1.25rem;
    cursor:pointer;
    background:var(--gray-950);
    color:var(--gray-50);
    font-family: 'Inter', sans-serif;1
    font-weight: 600;

    :first-child{
      background:var(--gray-750);
      border:none;
    }
    }
  }

  
`;