import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { TheButton } from "../parts";

const SearchblockStyle = styled.div`
  width:300px;
  height: 500px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 24px 24px 24px 24px;
  position:relative;
  padding: 16px 32px;
  position:absolute;

  & h2{
    text-decoration-line: underline;
  }
`;

const SearchBlock: FunctionComponent = () => {
  return (
    <>
      <SearchblockStyle className="ml-80">
        <h1 className="fs-36 mb-20">条件を絞る</h1>
        <h2 className="fs-28 mb-12 mt-16">職種</h2>
        <p className="mb-8">営業職</p>
        <p className="mb-8">エンジニア職</p>
        <p className="mb-8">企画・マーケティング</p>
        <h2 className="fs-28 mb-12 mt-16">開催日程</h2>
        <p className="mb-8">1週間以内</p>
        <p className="mb-8">休日</p>
        <p className="mb-8">24時間以内</p>
        <h2 className="fs-28 mb-12 mt-16">キーワード</h2>
        <p className="mb-8">23年卒</p>
        <p className="mb-8">OB開催</p>
        <p>初心者</p>
        <dd className="ta-c mt-48">
          <TheButton name="検索" />
        </dd>
      </SearchblockStyle>
    </>
  );
};

export default SearchBlock;