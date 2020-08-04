import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width:100%;
  height:50px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  top: 0;
  left:0;
  z-index: 5;

  & div{
    width: 0;
	  height: 0;
	  border-bottom: 50px solid transparent;
    border-left: 1200px solid #0094E8;
  }
  
  & a{
    position: absolute;
    top: 7.5px;
    left: 3%;
    color: white;
    font-weight: 700;
    font-size: 30px;
    text-decoration: none;
  }

  & input{
    position: absolute;
    width: 275px;
    height: 19px;
    left: 135px;
    top: 13px;  
    border-radius: 9.5px;
    border-width: 1px;
    border-color: black;
    border-style: solid;

    &:focus{
      outline: 0;
    }
  }
`;


const Header = () => {
  return (
    <HeaderBar>
      <div></div>
      <a href="/">GDs</a>
      <input type="text" placeholder="検索" />
    </HeaderBar>
  )
};

export default Header;