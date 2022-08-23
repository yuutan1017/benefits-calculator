import React from 'react';
import Head from 'next/head';

export const Layout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center mx-5">
      <Head>
        <title>育児休業給付金　計算ツール</title>
      </Head>

      <main className="flex flex-col min-w-screen flex-auto items-center justify-center text-center">
        {children}
      </main>
    </div>
  );
};
