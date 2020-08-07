import React from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./Routes";

// グローバルスタイル
const GlobalStyle = createGlobalStyle`
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

.mt-16{
    margin-top:16px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-48{
    margin-top:48px;
}

.mt-80 {
  margin-top: 80px;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-12 {
  margin-bottom: 12px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-80 {
  margin-bottom: 80px;
}

.mb-160 {
  margin-bottom: 160px;
}

.ml-12{
    margin-left:12px;
}

.ml-80{
    margin-left:80px;
}

.mr-20{
    margin-right:20px;
}

.mr-80{
    margin-right:80px;
}

.mr-320{
    margin-right:320px;
}

.gds-color{
    color: #0094E8;
}

.fs-48{
    font-size:48px;
}

.fs-36{
    font-size:36px;
}

.fs-28{
    font-size:28px;
}

.fs-20{
    font-size:20px;
}

.fs-16{
    font-size:16px;
}

.dp-bl{
    display:block;
}

.dp-in{
    display:inline;
}

.ta-c{
    text-align:center;
}

.ta-r{
    text-align:right;
}

.black{
    color:#000000;
}

.white{
    color:#ffffff;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
