import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GdsblockStyle = styled.div`
  width:760px;
  height: 200px;
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
    display:block;
    position:absolute;
    top:128px;
    left:16px;
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

  & .gds-rate{
    position:absolute;
    top:156px;
    left:600px;
    & h3,h2{
      display:inline;
    }
  }

`;

const GdsBlock: FunctionComponent = () => {
  return (
    <>
      <GdsblockStyle className="mb-40">
        <div className="triangle"></div>
        <h1 className="date fs-20">2021年3月6日</h1>
        <Link to="/" className="gds-title fs-28 gds-color">企画職を目指している22卒でGDしましょう</Link>
        <Link to="/" className="gds-name">
          <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
          <p className="fs-20 ml-12">山田　太郎</p>
        </Link>
        <div className="gds-rate">
          <h3 className="fs-16">募集人数：</h3>
          <h2 className="fs-28">4/5</h2>
        </div>
      </GdsblockStyle >
    </>
  );
};

export default GdsBlock;
