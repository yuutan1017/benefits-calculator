import React, { useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
import { InputValue } from '../types/type';

const AveCalculate = () => {
  const [allState, setAllState] = useState<InputValue>({
    firstInput: 0,
    secondInput: 0,
    thirdInput: 0,
    fourthInput: 0,
    fifthInput: 0,
    sixthInput: 0,
  });

  const [average, setAverage] = useState<String>('');

  const handleCalculate = () => {
    let localTotal = 0;
    for (let [key, value] of Object.entries(allState)) {
      localTotal += value;
    }
    console.log(localTotal);
    setAverage(String(Math.floor(localTotal / 180)));
  };

  return (
    <>
      <Layout>
        <section className="mt-8">
          <h1 className="text-xl font-bold">休業開始時賃金を計算します。</h1>
          <h2>dammy</h2>
          <h3>dammy</h3>
          <h4>dammy</h4>
        </section>
        <section className="w-10/12 mt-8 mb-2 bg-gray-300  sm:w-96 border-t-2 border-indigo-600">
          <form className="mt-10 mx-8 pb-6">
            <table className="w-full">
              <tbody>
                <tr className="flex flex-col">
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 h-10">
                    <input
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          firstInput: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          secondInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          thirdInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          fourthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          fifthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-gray-500 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          sixthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pt-2 pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td>
                    <button
                      id="calculate"
                      type="button"
                      onClick={handleCalculate}
                      className="focus:outline-none text-white bg-indigo-600 font-normal rounded text-md py-3 mt-4 w-full"
                    >
                      平均値を計算する
                    </button>
                  </td>
                  <td>
                    <div className="flex flex-row mt-5 p-2 bg-gray-50 border-b-2 border-gray-600 ">
                      <p className="w-full">{average}</p>
                      <span className="text-gray-900 text-md">円</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
        <section>
          <div className="mt-3 mb-3">
            <Link href="/">
              <a>topに戻る</a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AveCalculate;
