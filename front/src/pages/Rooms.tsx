import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer, ChatBlock } from "../components/layout";

const Main = styled.main`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
max-width: 1440px;
height: 1000px;
margin:0 auto;
padding:100px 0;
text-align:center;

& .chatpagetitle{
  width:100%;
}

`;

const Rooms: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="fs-36 chatpagetitle">参加中のチャット一覧</h1>
        <ChatBlock />
        <ChatBlock />
        <ChatBlock />
      </Main>
      <Footer />
    </>
  );
};

export default Rooms;
