import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LeetCode</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <meta name="description" content="LeetCode website clone" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
