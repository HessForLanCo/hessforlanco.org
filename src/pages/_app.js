import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
