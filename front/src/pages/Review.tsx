import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer} from "../components/layout";
import { Link } from "react-router-dom";

const Main = styled.main`
padding:100px 0px;
width:800px;
display:flex;
flex-direction:column;
max-width: 1440px;
margin: 0 auto;

& dd{
  display:flex;
  align-items:center;
  & img{
    height:100px;
    width:100px;
    border-radius: 50%;
    background-position: center center;
    border: 1px solid #f0f0f0;
  }
}
& p{
  line-height: 150%
}
`;

const Review: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <dd className="mb-20">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`}/>
          <h1 className="fs-36 ml-20">藤本　幸子</h1>
        </dd>
        <p className="fs-20 mb-40">関西の私立大学に通う3年生です。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        <dd className="mb-20">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <h1 className="fs-36 ml-20">松木　快斗</h1>
        </dd>
        <p className="fs-20 mb-40">あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        <dd className="mb-20">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <h1 className="fs-36 ml-20">岡部　美優</h1>
        </dd>
        <p className="fs-20 mb-40">あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        <dd className="mb-20">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <h1 className="fs-36 ml-20">中嶋　覚</h1>
        </dd>
        <p className="fs-20 mb-40">あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        <dd className="mb-20"> 
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <h1 className="fs-36 ml-20">村上　涼</h1>
        </dd>
        <p className="fs-20 mb-40">あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
      </Main>
      <Footer />
    </>
  );
};

export default Review;
