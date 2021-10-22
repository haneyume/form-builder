import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from '../components/AppContext';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Form Builder</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </AppProvider>
  );
}
