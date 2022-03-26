import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
    @media (max-width: 1300px) {
      font-size: 60%;
    }
  }

  body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: inherit;

    &:hover {
      background-color: #23d997;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 3.5rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;

