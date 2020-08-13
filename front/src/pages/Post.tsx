import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header, Footer } from "../components/layout";
import { TheButton } from "../components/parts";

const Main = styled.main`
display:flex;
align-items:center;
flex-direction:column;
max-width: 1440px;
height: 1200px;
justify-content: center;
`;

const PostContainer = styled.div`
text-align:center;
background: #ffffff;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding:40px 80px;
border-radius: 24px;
margin-bottom:40px;

& h1{
 font-size:32px;
 font-weight:400;
 margin-bottom:24px;
}

& input,textarea{
  vertical-align: middle;
  border-width: 1px;
  border-style: solid;
  border-radius:8px;
  font-size:24px;
  margin-bottom:24px;
  &:focus {
    outline: 0;
  }
}

& .title-input{
  width: 800px;
}

& .date-input{
  width:200px;
}

& .member-input{
  width: 80px;
}

& textarea{
  height: 400px;
  width: 800px;
}
`;

const Post: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <PostContainer>
          <h1>タイトル</h1>
          <input type="text" className="title-input"/>
          <h1>内容</h1>
          <textarea></textarea>
          <h1>開催日時</h1>
          <input type="date" className="date-input"/>
          <h1>募集人数</h1>
          <div className="fs-20"><input type="number" className="member-input"/>人</div>
        </PostContainer>
        <TheButton name="投稿する"/>
      </Main>
      <Footer />
    </>
  );
};

export default Post;
