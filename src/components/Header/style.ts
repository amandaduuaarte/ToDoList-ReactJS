import styled from 'styled-components'

export const Content = styled.div`
  display:flex; 
  flex-wrap:wrap;
  height:10rem;
  width:105rem;
  padding: 0 10rem;
  justify-content:space-between;

  @media(max-width:900px){
    flex-direction:column;
    align-content:center; 
    height: 7.75rem;
    width:19.75rem;
   
  }

  img{
    height:2.5rem;
    width:7.5rem;
    margin-top:4rem;
    margin-left:10rem;
    @media(max-width:900px){
      margin-left:1.5rem;
      margin-top:3rem;
    }
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

    @media(max-width:900px){
      margin-top:2.8rem;
      width: 9rem;
      height:3rem;
      margin-left:1.4rem;
    }
  }
`;