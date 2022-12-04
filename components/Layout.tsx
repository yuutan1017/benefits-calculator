import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Head>
        <meta
          name="description"
          content="就労した場合の育児休業給付金を自動で計算するツール"
        ></meta>
      </Head>
      <main className="flex flex-col flex-auto md:w-8/12 items-center justify-center text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
