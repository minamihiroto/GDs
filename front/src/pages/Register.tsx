import React, { FunctionComponent } from "react";
import styled from "styled-components";

const RegisterStyle = styled.div`
  width: 400px;
  background: white;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & div {
    margin-bottom: 20px;

    & h1,
    p,
    a {
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

  & button {
    display: block;
    padding: 10px 30px;
    color: white;
    margin: auto;
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

  & .Register_btn {
    background: #0094e8;
    border-radius: 46px;
    margin-bottom: 20px;
  }

  & hr {
    margin: 20px auto;
    width: 300px;
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

const Register: FunctionComponent = () => {
  return (
    <RegisterStyle>
      <div>
        <h1>GDs</h1>
        <p>新規登録</p>
      </div>
      <input type="text" placeholder="お名前" />
      <input type="text" placeholder="メールアドレス" />
      <input type="text" placeholder="パスワード" />
      <input type="text" placeholder="パスワード確認" />
      <div>
        <a href="/">利用規約</a>に同意の上ご登録ください。
      </div>
      <button className="Register_btn">同意して新規登録する</button>
      <a href="/">ログインはこちら</a>
    </RegisterStyle>
  );
};

export default Register;
