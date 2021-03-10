import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

import opengraphLogo from '../static/img/HessForController-opengraph-logo-1113x640.jpg';
const opengraphLogoWidth = 1113;
const opengraphLogoHeight = 640;

const titlePrefix = "Chris Hess for Lancaster County Controller";
const description = "The official website of the campaign to elect Chris Hess as Lancaster County Controller";

export default function BaseLayout({ titleSuffix, children }) {
  const title = titleSuffix ? `${titlePrefix} - ${titleSuffix}` : titlePrefix;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:image" content={opengraphLogo} />
        <meta property="og:image:width" content={opengraphLogoWidth} />
        <meta property="og:image:height" content={opengraphLogoHeight} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#365fcb" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Navbar />

      {children}

    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  titleSuffix: PropTypes.string
};
