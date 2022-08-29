import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';

const AveCalculate_2 = () => {
  return (
    <article>
      <Layout>
        <h1 className="text-xl font-bold">6ヶ月の平均給与</h1>
        <section className="w-11/12 my-2 bg-gray-200">
          <div className="mx-6 py-1">
            <form className="mt-7">
              <table className="w-full">
                <tbody>
                  <tr className="flex flex-col">
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 mt-4 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 mt-4 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 mt-4 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 mt-4 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                    <td className="flex flex-row bg-gray-50 border-b-2 border-gray-400 mt-4 h-10">
                      <input
                        type="number"
                        className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                      />
                      <span className="text-gray-900 text-md mx-1.5 pt-2">
                        円
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 font-normal rounded text-md px-5 py-3 mt-5 w-full"
              >
                平均値を計算する
              </button>
            </form>
            <div className="flex flex-row mt-5 p-2 bg-gray-50 border-b-2 border-gray-600">
              <p className="w-full">result</p>
              <span className="text-gray-900 text-md">円</span>
            </div>
            <div className="mt-5 mb-3">
              <Link href="/">
                <a>topに戻る</a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </article>
  );
};

export default AveCalculate_2;
