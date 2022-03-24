import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*:not(i) {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button,
  input,
  select,
  textarea {
      border: 0;
      background-color: transparent;

      &:focus {
          outline: none;
          box-shadow: none;
      }
  }

  a,
  button {
      cursor: pointer;
  }


  ul,
  ol {
      padding-left: 0;
      list-style: none;
  }
`;
