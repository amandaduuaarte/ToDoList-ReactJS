import styled from "styled-components";

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding: 0 160px;
  color:var(--gray-50);

  h2{
    font-weight: 600;
    font-size:42px;
  }

 
  div{
    display:flex;
    flex-direction:row;
    width: 35%;
    justify-content:space-between;
    margin-top:40px;
    
    button{
    border:1px solid #414052;
    height: 48px;
    width:195px;
    border-radius:20px;
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