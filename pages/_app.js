import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/layout'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import '../styles/globals.scss'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  );
}

export default MyApp
