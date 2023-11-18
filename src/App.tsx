import React from "react";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./style/globalStyle";

function App(): JSX.Element {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
