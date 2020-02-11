import * as React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Adam Mescher</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://use.typekit.net/dfi0mui.css" />
    <meta name="description" content="Personal portfolio website for Adam Mescher, a developer in Denver, Colorado" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </NextHead>
);

export default Head;
