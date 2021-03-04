import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { config, dom } from '@fortawesome/fontawesome-svg-core';

import { size } from '../theme';

/*
 * The below line comes from this GitHub issue to fix huge Fontawesome icons:
 *
 * https://github.com/FortAwesome/react-fontawesome/issues/410#issuecomment-787468285
 */
config.autoAddCss = false;

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: ${size.fontPrimary}px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  /*
   * The below line comes from this GitHub issue to fix huge Fontawesome icons:
   *
   * https://github.com/FortAwesome/react-fontawesome/issues/410#issuecomment-787468285
   */
  ${dom.css()}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
