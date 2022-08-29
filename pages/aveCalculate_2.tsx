import React, { ReactNode, useEffect, useState } from 'react';
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
                <tr className="flex flex-col">
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2"
                    />
                    <div className="">
                      <span className="text-gray-900 text-md mx-1.5 pt-3 flex">
                        円
                      </span>
                    </div>
                  </td>
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2 mt-4"
                    />

                    <span className="text-gray-900 text-md mx-1.5 pt-7 flex">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2 mt-4"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-7 flex">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2 mt-4"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-7 flex">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2 mt-4"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-7 flex">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row">
                    <input
                      type="number"
                      className="bg-gray-100 border-b-2 border-gray-400 text-gray-900 text-md 
                      focus:outline-none w-full pt-3 pl-2 mt-4"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-7 flex">
                      円
                    </span>
                  </td>
                </tr>
              </table>

              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 font-normal rounded text-md px-5 py-3 mt-5 w-full"
              >
                平均値を計算する
              </button>
            </form>
            <div className="mt-5 p-2 bg-slate-500">
              <p>result</p>
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
