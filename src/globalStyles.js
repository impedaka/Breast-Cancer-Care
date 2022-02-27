import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Futura', sans-serif;
    
  }
    body,
    h1,
    h2,
    h3,
    h4,
    p
     {
      margin: 0;
      opacity: 0.8;
    }
    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }img,
    picture {
      max-width: 100%;
      display: block;
    }
`;
