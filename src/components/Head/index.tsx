import * as React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Adam Mescher</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://use.typekit.net/dfi0mui.css" />
    <meta name="description" content="Personal portfolio website for Adam Mescher, a developer in Denver, Colorado" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css.map" />
  </NextHead>
);

export default Head;
