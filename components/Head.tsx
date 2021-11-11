import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => (
    <NextHead>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hobby app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Find-A-Hobby</title>
    </NextHead>
);

export default Head;