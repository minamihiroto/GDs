import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width:100%;
  height:100px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  top: 0;
  left:0;

  & div{
    width: 0;
	  height: 0;
	  border-bottom: 100px solid transparent;
    border-left: 1000px solid #0094E8;
  }
  
  & a{
    position: absolute;
    top: 17.5px;
    left: 5%;
    color: white;
    font-weight: 500;
    font-size: 55px;
    text-decoration: none;
  }

  & input{
    position: absolute;
    width: 378px;
    height: 38px;
    left: 270px;
    top: 28px;
    border-radius: 19px;
  }
`;

const Body = styled.div`
  padding-top: 150px;

  & div{
    display: flex;
    width: 820px;
    height: 70px;
    margin: 50px auto;
    justify-content: space-between;

    & h2{
      display: inline;
    }

    & input{
      width: 550px;
      height: 50px;
      display:inline;
      vertical-align:middle;
      padding: 0;
      margin-top:8px;
      border-radius: 9px;
    }
  }

  & .btn{
    display: block;
    padding: 10px 30px;
    color: white;
    margin: 20px auto;
    border: none;
    cursor: pointer;
    font-size:20px;

    &:hover{
      opacity: 0.75;
    }
  }

  & .login_btn{
    background: #0094E8;
    border-radius: 46px;
  }

  & .login_sns_btn{
    background: #DB5959;
    border-radius: 17px;
  }

  & hr {
    margin: 50px auto;
    width:1000px;
    }

  & a{
    color:black;
    text-align: center;
    margin-bottom:20px;
  }
`;

const Footer = styled.footer`
  background: #6D6D6D;
  height:400px;
`;

function App() {
  return (
    <>
      <Header>
        <div></div>
        <a href="/">GDs</a>
        <input type="text"/>
      </Header>
      <Body>
        <div>
          <h2>メールアドレス</h2>
          <input type="text" />
        </div>
        <div>
          <h2>パスワード</h2>
          <input type="text" />
        </div>
        <button className="login_btn btn">ログイン</button>
        <hr/>
        <button className="login_sns_btn btn">twitterでログイン</button>
        <button className="login_sns_btn btn">facebookでログイン</button>
        <a href="/">アカウントを持っていない方</a>
      </Body>
      <Footer>

      </Footer>
    </>
  );
}

export default App;