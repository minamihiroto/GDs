import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Introduce from './Introduce';
import GdBox from './GdBox';
import UserBox from './UserBox';

const Body = styled.div`
  padding: 150px 0 100px;
`;

class Top extends Top.Component {
  render() {
    return (
      <>
        <Header />
        <Body>
          
        </Body>
        <Footer />
      </>
    )
  }
}

export default Top;