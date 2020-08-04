import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import LoginBox from './LoginBox';

const Body = styled.div`
  padding: 150px 0 100px;
  background: #F0F0F0;
`;



class Login extends React.Component{
  render() {
    return (
      <>
        <Header />
        <Body>
          <LoginBox />
        </Body>
        <Footer />
      </>
    )
  }
}

export default Login;