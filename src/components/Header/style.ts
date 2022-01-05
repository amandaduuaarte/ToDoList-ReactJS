import styled from 'styled-components'

export const Content = styled.div`
  display:flex; 
  height:160px;
  width:1400px;
  padding: 0 160px;
  justify-content:space-between;

  img{
    height:40px;
    width:120px;
    margin-top:64px;
  }

  button{
    background: var(--purple);
    margin-top:60px;
    width: 195px;
    height:48px;
    border:none;
    border-radius:20px;
    color: var(--gray-50);
    font-family: 'Inter', sans-serif;
    font-weight:600;
    
    cursor:pointer;
  }
`;