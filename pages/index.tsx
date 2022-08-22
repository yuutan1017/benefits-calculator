import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>育児休業給付金　計算ツール</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">育児休業給付金　計算ツール</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

        </div>
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-t">
        copyright@yutan1017
      </footer>
    </div>
  )
}

export default Home
