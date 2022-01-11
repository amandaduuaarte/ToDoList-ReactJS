import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #181820;

    --purple: #AC6DDE;
    --gray-750 : #414052;
    --gray-850: #272733;
    --gray-900: #21212B;
    --gray-50:#F5F5F6;

  }

  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background:var(--background);
    -webkit-font-smoothing:antialiased;
    font-family: 'Inter', sans-serif;
  }

  .react-modal-overlay{
  background:rgba(0,0,0,0.5);
  position:fixed;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
}
.react-modal-content{
  max-width:576px;
  background:#21212B;
  position:relative;
  border-radius:1.25rem;
  height:37.313rem;
  width:36rem;
  display:flex;
  @media(max-width:900px){
    width:21rem;
    height: 37.313rem;
  }
}
.react-modal-close{
  position:absolute;
  right:1.5rem;
  top:1.5rem;
  border:0;
  background:transparent;
  cursor:pointer;

  transition:filter 0.2s;
  &:hover{
    filter:brightness(0.9);
  }
`;