import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { Link } from "react-router-dom";
import { TheButton } from "../components/parts";

const Profile = styled.div`
  text-align:center;
  padding-top: 100px;
  max-width: 1440px;
  margin: 0 auto;
  
  & .user-photo{
    height:400px;
    width:400px;
    border-radius: 50%;
    background-position: center center;
    border: 1px solid #f0f0f0;
    }
  & .ff-link{
  
  }

  & .sns{
    dispaly: flex;
    padding-bottom:50px;

    & .twitter{
      height:80px;
      width:80px;
      background-position: center center;
      border: 1px solid #f0f0f0;
    }
    & .facebook{
      height:80px;
      width:80px;
      background-position: center center;
      border: 1px solid #f0f0f0;
    }
  }

  & .stars{
    display:flex;
    justify-content:space-around;
    padding:0 220px;
    & img{
      height:80px;
      width:80px;
    }
  }
  
  & .Ptext{
    width:600px;
    margin:48px auto;
    line-height: 200%
  }
}
`;

const User: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Profile>
        <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="user-photo" />
        <h1 className="fs-36 mt-48 mb-20">山田　太郎</h1>
        <div className="mt-48 mb-40 ff-link">
          <Link to="/" className="mr-12">フォロー：33人</Link>
          <Link to="/" className="ml-12">フォロワー：24人</Link>
        </div>
        <TheButton name="フォローする" />
        <div className="sns mt-48">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="twitter mr-40" />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="facebook ml-40" />
        </div>
        <div className="stars mb-20">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
        </div>
        <Link to="review">詳しいレビューを見る</Link>
          <p className="Ptext fs-20">関西の私立大学に通う3年生です。あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
      </Profile>
      <Footer />
    </>
  );
};

export default User;
