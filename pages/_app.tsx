import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/modal.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
