import React, { useState } from 'react';

import { Layout } from '../components/Layout';
import { today } from '../components/today';
import { InitialSentence } from '../components/InitialSentence';
import { CalculateSentence } from '../components/CalculateSentence';

import type { setChildcareInputs } from '../types/type';
import type { setEndDate } from '../types/type';

const ChildcareCalculate = () => {
  let { year, month, day } = today();
  const [data, setData] = useState<setChildcareInputs>({
    startYear: year,
    startMonth: month,
    startDay: day,
    childCount: 1,
    grossIncome: 300000,
    netIncome: 230000,
    checkedOverSixMonth: false,
  });
  const [endData, setEndDate] = useState<setEndDate>({
    year: '',
    month: '',
    day: '',
  });
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeCheckBox = () => {
    data.checkedOverSixMonth = !data.checkedOverSixMonth;
  };

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

  const calculateDailyWage = () => {
    if (!visible) setVisible(!visible);
    judgeOverSixMonth();
  };

  return (
    <>
      <Layout>
        <section>
          <InitialSentence />

          <section className="flex flex-col mx-4 mt-8">
            <form className="py-5 mt-6 bg-gray-300 border-t-4 border-[#39497C]">
              <div className="flex flex-row justify-center mt-2">
                <label htmlFor="startDate">開始日程</label>
                <input
                  id="startDate"
                  type="date"
                  defaultValue={`${data.startYear}-${data.startMonth}-${data.startDay}`}
                  className="border-b-2 border-gray-400 w-32 ml-2 outline-none"
                  onChange={dateSprit}
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
                  className="rounded w-40 bg-[#39497C] py-1 font-light text-white outline-none"
                  onClick={calculateDailyWage}
                >
                  計算する
                </button>
              </div>
            </form>
            <div
              className={`flex flex-col justify-center mt-8 mb-10 ${
                visible ? 'visible' : 'hidden'
              } border-t-2 border-[#39497C]`}
            >
              <div className="text-sm flex flex-row my-5">
                <div className="flex flex-row items-end">
                  <p className="mr-2">月々もらえる金額は</p>
                  <p className="text-2xl">
                    {((data.grossIncome / 100) * 67).toLocaleString()}円
                  </p>
                  <p className="ml-2">です。</p>
                </div>
              </div>
              <table className="bg-gray-100 border-gray-300 text-sm">
                <thead className="bg-slate-400 border-b border-[#39497C]">
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
                </tbody>
              </table>
            </div>
          </section>

          <CalculateSentence />
        </section>
      </Layout>
    </>
  );
};

export default ChildcareCalculate;
