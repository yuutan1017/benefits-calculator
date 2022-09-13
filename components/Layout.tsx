import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Head>
        <title>育児休業給付金　計算ツール</title>
      </Head>

      {/* <Header /> */}

      <main className="flex flex-col flex-auto md:w-screen items-center justify-center text-center w-96">
        {children}
      </main>

      <Footer />
    </div>
  );
};
