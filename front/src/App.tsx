import React from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./Routes";

// グローバルスタイル
const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
