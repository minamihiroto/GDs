import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer, UserBlock } from "../components/layout";
import { Link } from "react-router-dom";

const Main = styled.main`
padding-top:100px;
display:flex;
flex-direction:column;
align-items:center;
max-width: 1440px;
margin: 0 auto;

`;

const Follow: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <UserBlock />
        <UserBlock />
        <UserBlock />
        <UserBlock />
        <UserBlock />
      </Main>
      <Footer />
    </>
  );
};

export default Follow;
