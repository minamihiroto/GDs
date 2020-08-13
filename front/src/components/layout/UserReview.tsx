import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { TheButton } from "../parts";
import { Link } from "react-router-dom";

const UserreviewStyle = styled.div`
  width:484px;
  height: 260px;
  background: #ffffff;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 24px 24px 24px;
  position:relative;

  & p{
    width:400px;
  }

  & .triangle{
    width: 0;
	  height: 0;
	  border-bottom: 120px solid transparent;
    border-left: 140px solid #0094E8;
  }

  & .user-names{
    display:flex;
    align-items:center;
    position:absolute;
    top:10px;
    left:20px;
    text-decoration: none;
    
    & img,h1{
      display:inline;
      color:#000000;
    }
    & img{
      height:100px;
      width:100px;
      border-radius: 50%;
      background-position: center center;
      border: 1px solid #f0f0f0;
    }
  }

`;

const UserReview: FunctionComponent = () => {
  return (
    <>
      <UserreviewStyle className="mb-40 ta-c">
        <div className="triangle"></div>
        <Link to="/" className="user-names">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <h1 className="ml-12 fs-28">林　桜子</h1>
        </Link>
        <p className="dp-in">関西の私立大学に通う3年生
        です。〜〜〜〜〜〜〜〜。〜
        〜〜〜〜〜〜、〜〜〜〜〜〜〜〜〜〜〜〜〜
        〜〜〜〜〜〜、〜〜〜〜〜〜、...</p>
        <div className="mt-20"><TheButton name="レビューを書く" /></div>
      </UserreviewStyle>
    </>
  );
};

export default UserReview;
