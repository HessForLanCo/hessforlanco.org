import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

const titlePrefix = "Chris Hess for Lancaster County Controller";

export default function BaseLayout({ titleSuffix, children }) {
  const title = titleSuffix ? `${titlePrefix} - ${titleSuffix}` : titlePrefix;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#ffffff" />
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
