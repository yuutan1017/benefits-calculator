import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { Layout } from '../components/Layout';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
