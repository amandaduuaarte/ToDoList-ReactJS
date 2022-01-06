import styled from 'styled-components'

export const Content = styled.div`
  display:flex; 
  height:10rem;
  width:105rem;
  padding: 0 10rem;
  justify-content:space-between;

  img{
    height:2.5rem;
    width:7.5rem;
    margin-top:4rem;
    margin-left:10rem;
  }

  button{
    background: var(--purple);
    margin-top:3.73rem;
    width: 12.188rem;
    height:3rem;
    border:none;
    border-radius:1.25rem;
    color: var(--gray-50);
    font-family: 'Inter', sans-serif;
    font-weight:600;
    
    cursor:pointer;
  }
`;