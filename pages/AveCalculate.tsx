import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';

const AveCalculate = () => {
  const [one, setOne] = useState<string>('300000');
  const [two, setTwo] = useState<string>('290000');
  const [three, setThree] = useState<string>('314000');
  const [four, setFour] = useState<string>('324000');
  const [five, setFive] = useState<string>('285000');
  const [six, setSix] = useState<string>('305000');

  // const averageData: number[] = [];
  // console.log(averageData);

  const handlePushCalculate = () => {
    const data: number[] = [];
    data.push(parseInt(one));
    data.push(parseInt(two));
    data.push(parseInt(three));
    data.push(parseInt(four));
    data.push(parseInt(five));
    data.push(parseInt(six));

    const total = data.reduce((sum, ele) => sum + ele);
    const average = Math.round(total / data.length);
    // averageData.push(average);

    return average;
  };

  return (
    <>
      <Layout>
        <h1 className="text-xl font-bold">6ヶ月の平均給与</h1>
        <div className="w-11/12 my-2 bg-gray-200">
          <div className="mx-6 py-1">
            <form className="mt-7">
              <input
                type="number"
                value={one}
                onChange={(e) => setOne(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 placeholder:text-right"
                placeholder="円"
              />
              <input
                type="number"
                value={two}
                onChange={(e) => setTwo(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
                placeholder="円"
              />
              <input
                type="number"
                value={three}
                onChange={(e) => setThree(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
                placeholder="円"
              />
              <input
                type="number"
                value={four}
                onChange={(e) => setFour(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
                placeholder="円"
              />
              <input
                type="number"
                value={five}
                onChange={(e) => setFive(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
                placeholder="円"
              />
              <input
                type="number"
                value={six}
                onChange={(e) => setSix(e.target.value)}
                className="bg-gray-100 border-b-2 border-gray-500 text-gray-800 text-sm focus:outline-none block w-full p-2 mt-4 placeholder:text-right"
                placeholder="円"
              />
              <button
                type="button"
                onClick={handlePushCalculate}
                className="focus:outline-none text-white bg-green-700 font-normal rounded text-md px-5 py-3 mt-5 w-full"
              >
                平均値を計算する
              </button>
            </form>
            <div className="mt-5 p-2 bg-slate-500">
              <p id='ans'>{ }</p>
            </div>
            <div className="mt-5 mb-3">
              <Link href="/">
                <a>topに戻る</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AveCalculate;
