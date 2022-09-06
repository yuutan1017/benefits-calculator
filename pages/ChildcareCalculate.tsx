import React, { useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
import { today } from '../components/today';
import { setChildcareInputs } from '../types/type';
import { setEndDate } from '../types/type';

const ChildcareCalculate = () => {
  let { year, month, day } = today();
  const [data, setData] = useState<setChildcareInputs>({
    startYear: year,
    startMonth: month,
    startDay: day,
    childCount: 1,
    grossIncome: 300000,
    netIncome: 230000,
    checkedOverSixM: false,
  });

  const [endData, setEndDate] = useState<setEndDate>({
    year: '',
    month: '',
    day: '',
  });

  const judgeOverSixMonth = () => {
    const dt = new Date(
      parseInt(data.startYear),
      parseInt(data.startMonth),
      parseInt(data.startDay)
    );
    let year = dt.getFullYear();
    let month = dt.getMonth();
    let day = dt.getDate();
    if (month > 6) {
      month -= 6;
      year += 1;
    } else {
      month += 6;
    }
    setEndDate({
      ...endData,
      year: String(year),
      month: ('00' + month).slice(-2),
      day: ('00' + day).slice(-2),
    });
  };

  const dateSprit = (e: any) => {
    setData({
      ...data,
      startYear: e.target.value.split('-')[0],
      startMonth: e.target.value.split('-')[1],
      startDay: e.target.value.split('-')[2],
    });
  };

  const onChangeCheckBox = () => {
    data.checkedOverSixM = !data.checkedOverSixM;
  };
  const [visible, setVisible] = useState<boolean>(false);

  const calculateDailyWage = () => {
    if (!visible) setVisible(!visible);
    judgeOverSixMonth();
  };

  return (
    <>
      <Layout>
        <section>
          <article className="mx-4 mt-10">
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
          <section className="mx-4 mt-5 text-left border-t-2 border-indigo-600">
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
          <section className="flex flex-col mx-4">
            <form className="py-5 mt-6 bg-gray-300 border-t-2 border-indigo-600">
              <div className="flex flex-row justify-center mt-2">
                <label htmlFor="startDate">開始日程</label>
                <input
                  id="startDate"
                  type="date"
                  defaultValue={`${data.startYear}-${data.startMonth}-${data.startDay}`}
                  className="border-b-2 border-gray-400 w-32 ml-2 outline-none"
                  onChange={dateSprit}
                  required
                />
              </div>
              <div className="flex flex-row justify-center mt-4">
                <label htmlFor="childCount">出産予定の子供の数</label>
                <input
                  id="childCount"
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
                <label htmlFor="grossIncome">毎月の額面給与</label>
                <input
                  id="grossIncome"
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
                <label htmlFor="netIncome">毎月の手取り額</label>
                <input
                  id="netIncome"
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
                  className="rounded w-40 bg-indigo-600 py-1 font-light text-white"
                  onClick={calculateDailyWage}
                >
                  計算する
                </button>
              </div>
            </form>

            <div
              className={`flex flex-col justify-center ${
                visible ? 'visible' : 'hidden'
              }`}
            >
              <table className="my-10 bg-gray-100 border-gray-300 text-sm">
                <thead className="bg-slate-400 border-b border-indigo-400">
                  <tr>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      終了年月
                    </th>
                    <th className="py-2 border border-gray-500 text-xs">
                      毎月の支給額
                    </th>
                    <th className="py-2 border border-gray-500 text-xs">
                      合計の支給額
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-2 border border-gray-400">{`${endData.year}/${endData.month}/${endData.day}`}</th>
                    <th className="py-2 border border-gray-400">402000</th>
                    <th className="py-2 border border-gray-400">402000</th>
                  </tr>
                  <tr>
                    <th className="py-2 border border-gray-400">{`${
                      parseInt(data.startYear) + 1
                    }/${data.startMonth}/${data.startDay}`}</th>
                    <th className="py-2 border border-gray-400">402000</th>
                    <th className="py-2 border border-gray-400">402000</th>
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
