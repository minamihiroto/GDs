import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer,UserBlock } from "../components/layout";
import { TheButton } from "../components/parts";

const Main = styled.main`
display:flex;
align-items:center;
flex-wrap:wrap;
max-width: 1440px;
height: 1200px;
margin:0 auto;
padding-top:80px;

& .button{
  margin:0 auto;
}
`;

const GdsShow = styled.div`
width:840px;
background: #ffffff;
text-align: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 0px 24px 24px 24px;
position:relative;

& .triangle{
  width: 0;
	height: 0;
  border-bottom: 164px solid transparent;
  border-left: 480px solid #0094E8;
}

& .date{
  position:absolute;
  top:28px;
  left:18px;
  color:#ffffff;
}

& .date-sub{
  top:64px;
}

& .content{
  padding: 48px 40px 28px;
  line-height:38px;
}

& .gds-rate{
  text-align:right;
  & h3,h2{
    display:inline;
  }
}

`;

const Show: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <GdsShow className="mr-40 ml-40">
          <div className="triangle"></div>
          <h1 className="date fs-32">2021年3月6日</h1>
          <h1 className="date date-sub fs-32">開催</h1>
          <h1 className="fs-36 gds-color">企画職を目指している22卒でGDしましょう</h1>
          <p className="content fs-20">あああああああああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。ああああああああああああ
          あああああああああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。あああああああああああああああああああああああ
          あああああああああああああああああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。ああああああああああああ
          あああああああああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。ああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。ああああああああああああ
          あああああああああああああああああああああああああああああああああああああああああ、ああああああああああああああああああああああああああああああああああああ。ああああああ
          </p>
          <div className="gds-rate mr-40 mb-40">
            <h3 className="fs-20">募集人数：</h3>
            <h2 className="fs-32">4/5</h2>
          </div>
        </GdsShow>
        <UserBlock />
        <div className="button"><TheButton name="応募する" /></div>
      </Main>
      <Footer />
    </>
  );
};

export default Show;
