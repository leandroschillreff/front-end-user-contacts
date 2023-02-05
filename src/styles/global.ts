import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* --color-primary: #FF577F; */
    --color-primary: #6328A4;
    /* --color-primary-focus: #FF427F; */
    --color-primary-focus: #5E4D80;
    /* --color-primary-negative: #59323F; */
    --color-primary-negative: #5E4D80;
    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-gray-0: #F8F9FA;

    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  body {
    background: var(--color-gray-4);
  };

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
