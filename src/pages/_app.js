import { Global, css } from '@emotion/react';
import { size } from '../theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: ${size.primaryFont}px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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
