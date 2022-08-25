import React, { useEffect, useState, useRef, RefObject } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';

const AveCalculate = () => {
  const [one, setOne] = useState<string>("");
  const [two, setTwo] = useState<string>("");
  const [three, setThree] = useState<string>("");
  const [four, setFour] = useState<string>("");
  const [five, setFive] = useState<string>("");
  const [six, setSix] = useState<string>("");

  let data: number[] = [];
  const handlePushCalculate = () => {
    data.push(parseInt(one));
    data.push(parseInt(two));
    data.push(parseInt(three));
    data.push(parseInt(four));
    data.push(parseInt(five));
    data.push(parseInt(six));
    console.log(data);
  };

  return (
    <>
      <Layout>
        <h1 className="text-xl font-bold">6ヶ月の平均給与</h1>
        <div className="w-11/12 my-2 bg-gray-200">
          <div className="mx-6 py-1">
            <form className="mt-8">
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
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-normal rounded text-md px-5 py-3 mt-5 w-full"
              >
                平均値を計算する
              </button>
            </form>
            <div className="mt-5 p-2 bg-slate-500">
              <p>dummy</p>
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
