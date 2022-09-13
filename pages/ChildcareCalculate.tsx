import React, { useState } from 'react';

import { Layout } from '../components/Layout';
import { InitialSentence } from '../components/InitialSentence';
import { CalculateSentence } from '../components/CalculateSentence';

import type { setChildcareInputs } from '../types/type';

const ChildcareCalculate = () => {
  const [data, setData] = useState<setChildcareInputs>({
    grossIncome: 300000,
    netIncome: 230000,
    dailyWage: 12000,
  });
  const [payment, setPayment] = useState({
    sixMonth: 0,
    afterSixMonth: 0,
    makeMoney: 0,
  });
  const sixPayment = payment.sixMonth.toLocaleString();
  const totalPayment = (payment.sixMonth * 6).toLocaleString();
  const afterSixPayment = payment.afterSixMonth.toLocaleString();
  const totalYearPayment = (
    payment.sixMonth * 6 +
    payment.afterSixMonth * 6
  ).toLocaleString();
  const makeMoney = payment.makeMoney.toLocaleString();
  const workingDays = Math.floor(payment.makeMoney / data.dailyWage);
  const differencePayment = (comparison: number) => comparison - data.netIncome;

  const [visible, setVisible] = useState<boolean>(false);

  const calculateDailyWage = () => {
    const eightyPer = (data.grossIncome / 100) * 80;
    const sixSevenPer = (data.grossIncome / 100) * 67;
    const fiftyPer = (data.grossIncome / 100) * 50;
    if (!visible) setVisible(!visible);
    setPayment({
      ...payment,
      sixMonth: sixSevenPer,
      afterSixMonth: fiftyPer,
      makeMoney: eightyPer - sixSevenPer,
    });
  };

  return (
    <>
      <Layout>
        <section>
          <InitialSentence />

          <section className="flex flex-col mx-4 mt-4">
            <form className="py-5 mt-6 rounded-lg bg-gray-200 border-2 border-[#39497C]">
              <p className="text-xs text-blue-800">
                ※設定を変更し計算してみましょう※
              </p>
              <div className="flex flex-row justify-center mt-4">
                <label htmlFor="grossIncome">毎月の総支給額</label>
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
                <label htmlFor="netIncome">1日あたりの給与</label>
                <input
                  id="dailyWage"
                  type="number"
                  defaultValue={data.dailyWage}
                  className="border-b-2 border-gray-400 w-32 ml-2 pl-2 outline-none"
                  onChange={(e) => {
                    setData({ ...data, dailyWage: parseInt(e.target.value) });
                  }}
                />
                <span className="pl-1">円</span>
              </div>
              <div className="flex flex-row justify-center mt-8">
                <button
                  type="button"
                  className="rounded w-40 bg-[#1E2678] py-1 font-light text-white outline-none"
                  onClick={calculateDailyWage}
                >
                  計算する
                </button>
              </div>
            </form>
            <div
              className={`flex flex-col justify-center mt-10 ${
                visible ? 'visible' : 'hidden'
              } border-t-2 border-[#1E2678] text`}
            >
              <p className="mt-8 text-left mb-2">◆月々の支給額</p>
              <table className="bg-gray-200 border-gray-300 text-sm mb-5">
                <thead className="bg-[#1E2678] text-white">
                  <tr>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      期間
                    </th>
                    <th className="py-2 border border-gray-500 text-xs">
                      毎月の支給額
                    </th>
                    <th className="py-2 border border-gray-500 text-xs">
                      手取りとの差額
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-3 border border-gray-400">６ヶ月まで</th>
                    <th className="py-2 border border-gray-400">
                      {sixPayment}円
                    </th>
                    <th
                      className={`${
                        differencePayment(payment.sixMonth) < 0
                          ? 'text-red-600'
                          : ''
                      } py-2 border border-gray-400`}
                    >
                      {differencePayment(payment.sixMonth).toLocaleString()}円
                    </th>
                  </tr>
                  <tr>
                    <th className="py-3 border border-gray-400">
                      ６ヶ月経過後
                    </th>
                    <th className="py-2 border border-gray-400">
                      {afterSixPayment}円
                    </th>
                    <th
                      className={`${
                        differencePayment(payment.sixMonth) < 0
                          ? 'text-red-600'
                          : ''
                      } py-2 border border-gray-400`}
                    >
                      {differencePayment(
                        payment.afterSixMonth
                      ).toLocaleString()}
                      円
                    </th>
                  </tr>
                </tbody>
              </table>
              <p className="text-left mb-2 mt-4">◆支給額の合計</p>
              <table className="bg-gray-200 border-gray-300 text-sm mb-5">
                <thead className="bg-[#1E2678] text-white">
                  <tr>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      ６ヵ月
                    </th>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      １２ヶ月
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-4 border border-gray-400">
                      {totalPayment}円
                    </th>
                    <th className="py-4 border border-gray-400">
                      {totalYearPayment}円
                    </th>
                  </tr>
                </tbody>
              </table>
              <p className="text-left mb-2 mt-4">◆就労する場合</p>
              <div className="text-xs mb-3 mt-2">
                <div className="flex flex-row items-end ">
                  <p className="mr-2 text-gray-600">減額されず働ける日数は</p>
                  <p className="text-2xl font-bold text-[#0f144b]">{workingDays}日</p>
                  <p className="ml-2 text-gray-600">です</p>
                </div>
              </div>
              <div className="text-xs mb-2">
                <div className="flex flex-row items-end">
                  <p className="mr-2 text-gray-600">減額されず稼げる金額は</p>
                  <p className="text-2xl font-bold text-[#0f144b]">{makeMoney}円</p>
                  <p className="ml-2 text-gray-600">です</p>
                </div>
              </div>
            </div>
          </section>

          <CalculateSentence />
        </section>
      </Layout>
    </>
  );
};

export default ChildcareCalculate;
