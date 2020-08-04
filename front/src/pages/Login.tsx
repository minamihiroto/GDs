import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { Link } from "react-router-dom";
import { TheSnSButton } from "../components/parts";

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

  .mb-20 {
    margin-bottom: 20px;
  }

  & div {
    margin-bottom: 30px;

    & h1,
    p {
      display: inline;
    }
  }

  & input {
    width: 280px;
    height: 30px;
    vertical-align: middle;
    padding: 0;
    margin-bottom: 20px;
    background: #fafafa;
    border-color: #dddddd;
    border-width: 1px;
    border-style: solid;

    &:focus {
      outline: 0;
    }
  }

  .login_btn {
    padding: 10px 30px;
    background: #0094e8;
    border-radius: 46px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 15px;

    &:focus {
      outline: 0;
    }

    &:hover {
      opacity: 0.75;
    }
  }

  & .login_sns_btn {
    border-radius: 17px;
    width: 200px;
    margin-bottom: 20px;

    &.-t {
      background: #00acee;
    }

    &.-f {
      background: #3b5998;
    }
  }

  & a {
    display: block;
    color: black;
    margin-bottom: 5px;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 1000px;
  background: #f0f0f0;
`;

const LoginStyle = styled.div``;

const Login: FunctionComponent = () => {
  return (
    <LoginStyle>
      <Header />
      <Main>
        <LoginContainer>
          <div>
            <h1>GDs</h1>
            <p>ログイン</p>
          </div>
          <input type="text" placeholder="メールアドレス" />
          <input type="text" placeholder="パスワード" />
          <button className="login_btn mb-20">ログイン</button>
          <TheSnSButton className="mb-20" name="Twitterでログイン" color="#00acee"/>
          <TheSnSButton className="mb-20" name="Facebookでログイン" color="#3b5998"/>
          <a href="/">パスワードを忘れた方</a>
          <Link to="/register">アカウントを持っていない方</Link>
        </LoginContainer>
      </Main>
      <Footer />
    </LoginStyle>
  );
};

export default Login;
