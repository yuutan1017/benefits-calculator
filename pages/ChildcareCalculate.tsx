import React, { useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
import { today } from '../components/today';
import { setChildcareInputs } from '../types/type';

const ChildcareCalculate = () => {
  const { year, month, day } = today();
  const [data, setData] = useState<setChildcareInputs>({
    date: `${year}-${month}-${day}`,
    childCount: 1,
    grossIncome: 300000,
    netIncome: 230000,
    checkedOverSixM: false,
  });
  const onChangeCheckBox = () => {
    data.checkedOverSixM = !data.checkedOverSixM;
  };

  const setChildcareCal = () => {
    console.log(data);
  };

  return (
    <>
      <Layout>
        <section>
          <article className="mx-6 mt-10">
            <h1 className="text-2xl font-bold">
              あなたの育児休業給付金、自動で計算します。
            </h1>
            <div className="text-md text-left mt-10">
              <p>
                労働者が子育てするために休業する場合、育児休業給付金が受け取れます。
              </p>
              <p>
                また、
                <b>育児休業期間中は社会保険料などの納付が免除されます。</b>
              </p>
            </div>
          </article>
          <section className="mx-6 mt-5 text-left border-t-2 border-indigo-400">
            <div className="text-md">
              <p className="mt-3">&lt;初月から6ヶ月まで&gt;</p>
              <p className="mt-1">
                ・育児休業開始から180日：（休業開始時賃金日額<sup>※1</sup> ×
                支給日数
                <sup>※2</sup>）× 67%
              </p>
              <p className="mt-1">&lt;6ヶ月以降&gt;</p>
              <p className="mt-1">
                ・育児休業開始から181日目以降：（休業開始時賃金日額<sup>※1</sup>{' '}
                × 支給日数
                <sup>※2</sup>）× 50%
              </p>
            </div>
            <div className="mt-3 text-stone-400 text-sm">
              <p>
                ※1：育児休業開始前（産休を取った場合は産休開始前）6ヶ月間の賃金を180で割った額
              </p>
              <Link href="/AveCalculate">
                <p className="w-52 hover:font-bold hover:text-gray-900 hover:cursor-pointer">
                  －－&gt;平均賃金の計算はこちらから
                </p>
              </Link>
              <p className="mt-1">※2：通常は30日</p>
            </div>
          </section>
          <section className="flex flex-col mx-6">
            <form className="py-5 mt-6 bg-gray-300 border-t-2 border-indigo-400">
              <div className="flex flex-row justify-center mt-2">
                <span>開始日程</span>
                <input
                  type="date"
                  defaultValue={data.date}
                  className="border-b-2 border-gray-400 w-32 ml-2 outline-none"
                  onChange={(e) => {
                    setData({ ...data, date: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="flex flex-row justify-center mt-4">
                <span>出産予定の子供の数</span>
                <input
                  type="number"
                  defaultValue={data.childCount}
                  className="border-b-2 border-gray-400 w-9 ml-2 pl-1 outline-none"
                  onChange={(e) => {
                    setData({ ...data, childCount: parseInt(e.target.value) });
                  }}
                  required
                />
                <span className="pl-1">人</span>
              </div>
              <div className="flex flex-row justify-center mt-4">
                <span>毎月の額面給与</span>
                <input
                  type="number"
                  defaultValue={data.grossIncome}
                  className="border-b-2 border-gray-400 w-32 ml-2 pl-2 outline-none"
                  onChange={(e) => {
                    setData({ ...data, grossIncome: parseInt(e.target.value) });
                  }}
                  required
                />
                <span className="pl-1">円</span>
              </div>
              <div className="flex flex-row justify-center mt-4">
                <span>毎月の手取り額</span>
                <input
                  type="number"
                  defaultValue={data.netIncome}
                  className="border-b-2 border-gray-400 w-32 ml-2 pl-2 outline-none"
                  onChange={(e) => {
                    setData({ ...data, netIncome: parseInt(e.target.value) });
                  }}
                  required
                />
                <span className="pl-1">円</span>
              </div>
              <div className="flex flex-row justify-center mt-4">
                <label htmlFor="check">所得期間が6ヶ月以上の方</label>
                <input
                  id="check"
                  type="checkbox"
                  className="w-4 ml-2"
                  onClick={onChangeCheckBox}
                />
              </div>
              <div className="flex flex-row justify-center mt-8">
                <button
                  type="button"
                  className="rounded w-40 bg-indigo-500 py-1 font-light text-white"
                  onClick={setChildcareCal}
                >
                  計算する
                </button>
              </div>
            </form>
            <div className="flex flex-col justify-center">
              <table className="my-10 bg-gray-100 border-gray-300 text-sm">
                <thead className="bg-slate-400 border-b border-indigo-400">
                  <tr>
                    <th className="py-2 border border-gray-500">年月</th>
                    <th className="py-2 border border-gray-500">
                      毎月の支給額
                    </th>
                    <th className="py-2 border border-gray-500">手取り額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-2 border border-gray-400">2022/10/17</th>
                    <th className="py-2 border border-gray-400">402000</th>
                    <th className="py-2 border border-gray-400">240000</th>
                  </tr>
                  <tr>
                    <th className="py-2 border border-gray-400">2022/10/17</th>
                    <th className="py-2 border border-gray-400">402000</th>
                    <th className="py-2 border border-gray-400">240000</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default ChildcareCalculate;
