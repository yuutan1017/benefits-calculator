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

  const [average, setAverage] = useState<number>();
  const [copy, setCopy] = useState<boolean>(false);

  const handleCalculate = (): void => {
    let localTotal = 0;
    for (let [key, value] of Object.entries(allState)) {
      localTotal += value;
    }
    setAverage(Math.floor((localTotal / 180) * 30));
  };

  const handleCopy = (ave: any) => {
    navigator.clipboard.writeText(ave);
    setCopy(true);
    setTimeout(() => setCopy(false), 3000);
  };

  return (
    <>
      <Layout>
        <section className="mt-6 w-10/12 md:w-96">
          <p className="text-lg font-bold">
            こちらの計算結果を毎月の総支給額に入力してください
          </p>
          <p className="mt-3 text-xs text-gray-500">
            ※計算内容は、休業開始時賃金日額 × 支給日数(30日) となります
          </p>
        </section>
        <section className="mt-4 mb-2 bg-gray-300 md:w-96 w-10/12 border-t-2 ">
          <form className="mt-6 mx-10 pb-3">
            <table className="w-full">
              <tbody>
                <tr className="flex flex-col">
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 h-10">
                    <input
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          firstInput: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-1">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          secondInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
                    />
                    <span className="text-gray-900  text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          thirdInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          fourthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          fifthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
                    />
                    <span className="text-gray-900 text-md mx-1.5 pt-2">
                      円
                    </span>
                  </td>
                  <td className="flex flex-row bg-gray-50 border-b-2 border-stone-400 mt-4 h-10">
                    <input
                      type="number"
                      onChange={(e) =>
                        setAllState({
                          ...allState,
                          sixthInput: parseInt(e.target.value),
                        })
                      }
                      className=" text-gray-900 text-md focus:outline-none w-full pl-2"
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
                      className="focus:outline-none text-white bg-[#1E2678] font-normal rounded text-md py-3 mt-4 w-full"
                    >
                      平均値を計算する
                    </button>
                  </td>
                  <td>
                    <div className="flex flex-row mt-5 p-2 bg-gray-50 border-b-2 border-stone-400">
                      <p className="w-full">{average}</p>
                      <span className="text-gray-900 text-md">円</span>
                    </div>
                  </td>
                  <td className="flex justify-center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy(average);
                      }}
                      className="focus:outline-none text-white bg-yellow-500 rounded text-sm p-2 mt-4 mr-5"
                    >
                      {copy ? 'Copied!!' : 'コピーする'}
                    </button>
                    <div className="focus:outline-none text-white bg-yellow-500 rounded text-sm p-2 mt-4 ml-5">
                      <Link href="/">
                        <a>topに戻る</a>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default AveCalculate;
