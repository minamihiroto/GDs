import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import RegisterBox from './RegisterBox';

const Body = styled.div`
  padding: 150px 0 100px;
  background: #F0F0F0;
`;

class Register extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body>
          <RegisterBox />
        </Body>
        <Footer />
      </>
    )
  }
}

export default Register;