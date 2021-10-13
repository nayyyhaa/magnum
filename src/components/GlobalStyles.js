import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #c99df1;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 90%;
        margin: auto;
    }
    
    a {
        text-decoration: none;
    }

    img {
        display: block;
    }

    #logo {
        font-family: 'Abril Fatface', cursive;
        cursor: pointer;
        color: #654ee2;
    }

    h2 {
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #9d79ff;
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0;

    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
`;

export default GlobalStyles;
