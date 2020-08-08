import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { Link } from "react-router-dom";
import { TheButton, TheInput } from "../components/parts";

const Main = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 800px;
  background: #f0f0f0;
  max-width: 1440px;
  margin: 0 auto;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 400px;
  padding: 30px;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  & .rTitle h1,p {
    display: inline;
  }

  & a{
    color: black;
    &:hover {
      opacity: 0.75;
    }
  }
`;

const Register: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <RegisterContainer>
          <div className="rTitle mb-20">
            <h1>GDs</h1>
            <p>新規登録</p>
          </div>
          <TheInput type="text" className="mb-20" placeholder="お名前" />
          <TheInput type="text" className="mb-20" placeholder="メールアドレス" />
          <TheInput type="text" className="mb-20" placeholder="パスワード" />
          <TheInput type="text" className="mb-20" placeholder="パスワード確認" />
          <div className="mb-20">
            <Link to="/">利用規約</Link>に同意の上ご登録ください。
          </div>
          <TheButton className="mb-20" name="同意して新規登録する" />
          <Link to="/login">ログインはこちら</Link>
        </RegisterContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Register;
