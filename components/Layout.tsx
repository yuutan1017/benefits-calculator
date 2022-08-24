import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';

export const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Head>
        <title>育児休業給付金　計算ツール</title>
      </Head>

      <main className="flex flex-col flex-auto w-screen items-center justify-center text-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};
