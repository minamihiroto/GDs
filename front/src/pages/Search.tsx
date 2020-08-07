import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer, GdsBlock, SearchBlock} from "../components/layout";
import { Link } from "react-router-dom";

const Main = styled.main`
  padding-top:100px;

  & .section-t{
    text-decoration-line: underline;
  }

  & input{
    width:640px;
    height:40px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius:40px;
    font-size:24px;
    &:focus{
      outline: 0;
    }
  }

`;

const GdsBlocks = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Search: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <h2 className="gds-color mt-20 mb-80 ml-80 fs-36 section-t">GD検索ページ</h2>
        <dd className="ta-c mb-80">
          <input type="text" placeholder="検索"/>
        </dd>
        <SearchBlock />
        <GdsBlocks className="mr-80">
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
          <GdsBlock />
        </GdsBlocks>
        <dd className="ta-r mr-320 mb-80">
          <Link to="/search">{'＜'} 1 2 3...13 14 15 {'＞'}</Link>
        </dd>
      </Main>
      <Footer />
    </>
  );
};

export default Search;
