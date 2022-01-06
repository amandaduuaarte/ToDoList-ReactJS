import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;

  color: var(--gray-50);
  font-family: 'Inter', sans-serif;
  padding: 0 3rem 3rem 3rem;
  

  img{
    height:0.875rem;
    width:0.875rem;
    align-self:end;
  }
  h2{
    font-weight: 600;
    margin-top:5rem;
    font-size:1.625rem;
    align-self:start;
    padding-bottom: 2.75rem;
  }

  input{
    padding-bottom:1.875rem;
    border:none;
    background: #272733;
    color:#777777;
    padding-left:1.5rem;
    padding-top:1.25rem;
    width: 30rem;
    border-radius:1.25rem;
    margin-bottom:1.25rem;
    font-size:1rem;
  }
  input[type="text"] {
    height:14rem;
    padding-bottom:12.438rem;
  }
   button[type="submit"]{
     height:4rem;
     width: 30rem;
     background: var(--purple);
     border:none;
     border-radius:1.25rem;
     color: var(--gray-50);
     font-size:1rem;
   }
 

`;