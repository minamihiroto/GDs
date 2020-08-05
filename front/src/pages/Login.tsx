import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { Link } from "react-router-dom";
import { TheSnSButton, TheButton, TheInput } from "../components/parts";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background: #f0f0f0;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 400px;
  padding: 30px;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & .lTitle h1,p {
    display: inline;
  }

  & a{
    display: block;
    color: black;
    &:hover {
      opacity: 0.75;
    }
  }

  & hr{
    width: 300px;
    margin: 0;
  }
`;

const Login: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <LoginContainer>
          <div className="lTitle mb-20">
            <h1>GDs</h1>
            <p>ログイン</p>
          </div>
          <TheInput type="text" className="mb-20" placeholder="メールアドレス" />
          <TheInput type="text" className="mb-20" placeholder="パスワード" />
          <TheButton className="mb-20" name="ログイン" />
          <hr />
          <TheSnSButton className="mb-20 mt-20" name="Twitterでログイン" color="#00acee"/>
          <TheSnSButton className="mb-20" name="Facebookでログイン" color="#3b5998"/>
          <Link to="/" className="mb-8">パスワードを忘れた方</Link>
          <Link to="/register">アカウントを持っていない方</Link>
        </LoginContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Login;
