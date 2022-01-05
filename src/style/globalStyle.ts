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
`;