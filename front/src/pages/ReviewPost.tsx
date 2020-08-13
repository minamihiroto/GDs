import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { TheButton } from "../components/parts";

const Main = styled.main`
display:flex;
align-items:center;
flex-direction:column;
max-width: 1440px;
height: 1100px;
justify-content: center;
`;

const ReviewPostContainer = styled.div`
text-align:center;
background: #ffffff;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding:40px 80px;
border-radius: 24px;
margin-bottom:40px;

& .stars{
  display:flex;
  justify-content:space-around;
  padding:0 50px;
  & img{
    height:80px;
    width:80px;
  }
}

& h1{
 font-size:32px;
 margin-bottom:24px;
}

& h2{
 font-size:28px;
 font-weight:400;
 margin-bottom:24px;
}

& textarea{
  height: 400px;
  width: 800px;
}
`;

const ReviewPost: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <ReviewPostContainer>
          <h1>山田　太郎さんのレビューを書く</h1>
          <h2>評価度</h2>
          <div className="stars mb-20">
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          </div>
          <h2>内容</h2>
          <textarea></textarea>
        </ReviewPostContainer>
        <TheButton name="投稿する" />
      </Main>
      <Footer />
    </>
  );
};

export default ReviewPost;
