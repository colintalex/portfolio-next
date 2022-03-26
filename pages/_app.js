import Layout from '../components/layout'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css'
import Background from '../components/background';

function MyApp({ Component, pageProps }) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
