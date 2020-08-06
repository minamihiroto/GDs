import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer, GdsBlock, UserBlock } from "../components/layout";
import { Link } from "react-router-dom";

const Main = styled.main`
  padding-top:100px;
  
  & .section-t{
    text-decoration-line: underline;
  }

  & > h1{
    text-align:center;
  }

`;

const Introduce = styled.div`
  display:flex;
  align-items:baseline;
  justify-content:space-around;
`;

const IntroduceBox = styled.div`
  text-align:center;

  & img{
    width:360px;
    height:360px;
  }

  & .Introduce-3{
    width:260px;
  }

  & .Introduce-t{
    width:400px
  }

`;

const GdsBlocks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const UserBlocks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <h2 className="gds-color mt-20 mb-80 ml-80 fs-36 section-t">GDsとは？</h2>
        <h1 className="gds-color mb-80 fs-48">全国の就活生とグループディスカッションを。</h1>
        <Introduce className="mb-160">
          <IntroduceBox>
            <img src={`${process.env.PUBLIC_URL}/Introduce-1.png`} />
            <div className="Introduce-t">
              <h1 className="gds-color fs-28 mb-12">オンライン完結</h1>
              <p>全てのグループディスカッションが月額550円で行えます。ご自身の希望のテーマでグループディスカッションのルームを作成できます。もちろん、他のユーザーの作成したルームに参加することもできます。</p>
            </div>
          </IntroduceBox>
          <IntroduceBox>
            <img src={`${process.env.PUBLIC_URL}/Introduce-2.png`} />
            <div className="Introduce-t">
              <h1 className="gds-color fs-28 mb-12">就活仲間</h1>
              <p>グループディスカッション内で出会ったユーザーと知り合い、就活情報の交換をすることができます。それに加えてOBの方などともお知り合いになれるチャンスがあり、多様な人脈を形成できるでしょう。</p>
            </div>
          </IntroduceBox>
          <IntroduceBox>
            <img src={`${process.env.PUBLIC_URL}/Introduce-3.png`} className="Introduce-3" />
            <div className="Introduce-t">
              <h1 className="gds-color fs-28 mb-12">新たな発見</h1>
              <p>グループディスカッションにおいてあらゆる人の考え方を参考にできるでしょう。レビュー機能も備ているので、FBによりご自身の能力向上方法や、必要としている知識も見つかるはずです。</p>
            </div>
          </IntroduceBox>
        </Introduce>
        <h2 className="gds-color mt-20 mb-80 ml-80 fs-36 section-t">新着のGD募集</h2>
        <GdsBlocks>
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
        </GdsBlocks>
        <div className="ta-c mb-16 mt-16"><Link to="/" className="black">もっと見る</Link></div>
        <h2 className="gds-color mt-80 mb-80 ml-80 fs-36 section-t">注目のユーザー</h2>
        <UserBlocks>
          <UserBlock />
          <UserBlock />
          <UserBlock />
          <UserBlock />
        </UserBlocks>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
