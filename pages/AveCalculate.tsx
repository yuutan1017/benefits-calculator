import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const AveCalculate: FC = () => {
  return (
    <Layout>
      <h1 className="text-xl font-bold">6ヶ月の平均給与</h1>
      <div className="w-11/12 my-2 bg-gray-200">
        <div className="mx-9 py-1">
          <div className="mt-8">
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 placeholder:text-right"
              placeholder="円"
            />
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
              placeholder="円"
            />
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
              placeholder="円"
            />
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
              placeholder="円"
            />
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
              placeholder="円"
            />
            <input
              type="text"
              className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
              placeholder="円"
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-normal rounded text-md px-5 py-3 mt-5 w-full"
            >
              計算する
            </button>
            <div className="mt-5 p-2 bg-slate-500">
              <p>result&copy</p>
            </div>
            <div className="mt-5 mb-3">
              <Link href="/">
                <a>topに戻る</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AveCalculate;