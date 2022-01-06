import styled from 'styled-components'

export const Contatiner = styled.div`
  display:flex;
  justify-content:center;
  margin: 3.813rem 0 11.063rem 0 ;
  

  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:70rem;
    height:17.25rem;
    border-radius:1.25rem;


    head{
      display:flex;
      flex-direction:row;
      height: 4.375rem;
      background:var(--gray-750);
     
      border-top-left-radius:1.25rem;
      border-top-right-radius:1.25rem;

      img:first-child{
        height:1.875rem;
        width: 1.875rem;
       margin:1.25rem;
      }

      h2{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size:1rem;
        color:var(--gray-50);
        align-self:start;
        padding: 1.75rem 0;
      }

      img{
        margin-left:50rem;
      }
    }

    main{
      height: 9.188rem;
      text-align:start;
      background: var(--gray-900);
      color:var(--gray-50);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      padding:1.25rem ;
    }

    footer{
      height:3.688rem;
      color:var(--gray-50);
      background:var(--gray-750);
      text-align:center;
      padding:1.25rem 0;
      font-family: 'Inter', sans-serif;
      font-weight:300;
      border-bottom-left-radius:1.25rem;
      border-bottom-right-radius:1.25rem;
    }
  }
`;
