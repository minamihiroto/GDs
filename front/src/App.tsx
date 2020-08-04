// import React from 'react';
// import styled from 'styled-components';

// const Body = styled.div`
//   padding: 150px 0 100px;
//   background: #F0F0F0;
// `;

// const LoginBox = styled.div`
//   width:400px;
//   background:white;
//   margin: 0 auto;
//   padding: 30px;
//   text-align: center;
//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

//   & div{
//     margin-bottom: 30px;

//     & h1,p{
//       display: inline;
//     }
//   }
  
//   & input{
//     width: 280px;
//     height: 30px;
//     vertical-align:middle;
//     padding: 0;
//     margin-bottom: 20px;
//     background: #fAfAfA;
//     border-color: #DDDDDD;
//     border-width: 1px;
//     border-style: solid;
      
//     &:focus{
//       outline: 0;
//     }
//   }
  
//   & button{
//     display: block;
//     padding: 10px 30px;
//     color: white;
//     margin: auto;
//     border: none;
//     cursor: pointer;
//     font-size:15px;

//     &:focus{
//       outline: 0;
//     }
    
//     &:hover{
//       opacity: 0.75;
//     }
//   }
  
//   & .login_btn{
//     background: #0094E8;
//     border-radius: 46px;
//   }
  
//   & .login_sns_btn{
//     border-radius: 17px;
//     width: 200px;
//     margin-bottom: 20px;
    
//     &.-t{
//       background: #00acee;
//     }

//     &.-f{
//       background: #3b5998;
//     }
//   }
  
//   & hr {
//     margin: 20px auto;
//     width:300px;
//   }
  
//   & a{
//     display:block;
//     color:black;
//     margin-bottom:5px;

//     &:hover{
//       opacity: 0.75;
//     }
//   }
//   `;



// function App() {
//   return (
//     <>
//       <Header>
//         <div></div>
//         <a href="/">GDs</a>
//         <input type="text" placeholder="検索" />
//       </Header>
//       <Body>
//         <LoginBox>
//           <div>
//             <h1>GDs</h1>
//             <p>ログイン</p>
//           </div>
//           <input type="text" placeholder="メールアドレス" />
//           <input type="text" placeholder="パスワード" />
//           <button className="login_btn">ログイン</button>
//           <hr />
//           <button className="login_sns_btn -t">twitterでログイン</button>
//           <button className="login_sns_btn -f">facebookでログイン</button>
//           <a href="/">パスワードを忘れた方</a>
//           <a href="/">アカウントを持っていない方</a>
//         </LoginBox>
//       </Body>
//       <Footer>

//       </Footer>
//     </>
//   );
// }

// export default App;