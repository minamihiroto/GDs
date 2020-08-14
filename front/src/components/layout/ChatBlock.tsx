import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChatblockStyle = styled.div`
  width:760px;
  height: 240px;
  background: #ffffff;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 24px 24px 24px;
  position:relative;

  & .triangle{
    width: 0;
	  height: 0;
	  border-bottom: 100px solid transparent;
    border-left: 440px solid #0094E8;
  }

  & .date{
    position:absolute;
    top:20px;
    left:16px;
    color:#ffffff;
  }

  & .gds-title{
  position:relative;
  top:-8px;
  text-decoration: none;
  font-weight: bold;
  }

  & .gds-name{
    display:flex;
    align-items:center;
    position:absolute;
    top:172px;
    left:372px;
    text-decoration: none;
    & img,p{
      display:inline;
      color:#000000;
    }
    & img{
      height:52px;
      width:52px;
      border-radius: 50%;
      background-position: center center;
      border: 1px solid #f0f0f0;
    }
  }

`;

const ChatBlock: FunctionComponent = () => {
  return (
    <>
      <ChatblockStyle>
        <div className="triangle"></div>
        <h1 className="date fs-20">2021年3月6日</h1>
        <Link to="/" className="gds-title fs-28 gds-color">企画職を目指している22卒でGDしましょう</Link>
        <p className="fs-20 mt-12">誰々：あああああああああああああああああああああ...</p>
        <Link to="/" className="gds-name">
          <p className="fs-20 ml-12">メンバー：</p>
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="ml-12"/>
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="ml-12" />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="ml-12" />
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} className="ml-12" />
        </Link>
      </ChatblockStyle >
    </>
  );
};

export default ChatBlock;
