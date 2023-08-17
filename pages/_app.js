import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/layout'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.scss'
import Background from '../components/background';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  );
}

export default MyApp
