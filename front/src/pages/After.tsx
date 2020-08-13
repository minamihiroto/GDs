import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer, UserReview } from "../components/layout";
import { Link } from "react-router-dom";

const Main = styled.main`
max-width: 1440px;
padding:100px 0;
margin: 0 auto;
text-align:center;
`;

const UserReviews = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const After: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="fs-36 mb-20">〇〇グループチャットが終了しました。</h1>
        <h3 className="fs-20 mb-40">参加メンバーのレビューをお願いします。</h3>
        <UserReviews className="mb-40">
          <UserReview />
          <UserReview />
          <UserReview />
          <UserReview />
        </UserReviews>
        <Link to="/">トップページに戻る</Link>
      </Main>
      <Footer />
    </>
  );
};

export default After;
