import React, { useState } from 'react';

import { Layout } from '../components/Layout';
import { InitialSentence } from '../components/InitialSentence';
import { CalculateSentence } from '../components/CalculateSentence';

import type { setChildcareInputs } from '../types/type';

const ChildcareCalculate = () => {
  const [data, setData] = useState<setChildcareInputs>({
    childCount: 1,
    grossIncome: 300000,
    netIncome: 230000,
    checkedOverSixMonth: false,
  });
  const [payment, setPayment] = useState({ sixMonth: 0, afterSixMonth: 0 });
  let sixPayment = payment.sixMonth.toLocaleString();
  let totalPayment = (payment.sixMonth * 6).toLocaleString();
  let afterSixPayment = payment.afterSixMonth.toLocaleString();
  let AfterSixTotalPayment = (payment.afterSixMonth * 6).toLocaleString();
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeCheckBox = () => {
    data.checkedOverSixMonth = !data.checkedOverSixMonth;
  };

  const calculateDailyWage = () => {
    if (!visible) setVisible(!visible);
    setPayment({
      ...payment,
      sixMonth: (data.grossIncome / 100) * 67 * data.childCount,
      afterSixMonth: (data.grossIncome / 100) * 50 * data.childCount,
    });
  };

  return (
    <>
      <Layout>
        <section>
          <InitialSentence />

          <section className="flex flex-col mx-4 mt-4">
            <form className="py-5 mt-6 rounded-lg bg-gray-300 border-2 border-[#39497C]">
              <p className="text-xs text-blue-800">
                ※設定を変更し計算してみましょう※
              </p>
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
                  className="rounded w-40 bg-[#1E2678] py-1 font-light text-white outline-none"
                  onClick={calculateDailyWage}
                >
                  計算する
                </button>
              </div>
            </form>
            <div
              className={`flex flex-col justify-center mt-8 mb-10 ${
                visible ? 'visible' : 'hidden'
              } border-t-2 border-[#1E2678]`}
            >
              <div className="text-sm flex flex-row my-5">
                <div className="flex flex-row items-end">
                  <p className="mr-2">月々もらえる金額は</p>
                  <p className="text-2xl">{sixPayment}円</p>
                  <p className="ml-2">です。</p>
                </div>
              </div>
              <table className="bg-gray-100 border-gray-300 text-sm">
                <thead className="bg-slate-400 border-b border-[#1E2678]">
                  <tr>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      期間
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
                    <th className="py-2 border border-gray-400">6ヶ月間</th>
                    <th className="py-2 border border-gray-400">
                      {sixPayment}
                    </th>
                    <th className="py-2 border border-gray-400">
                      {totalPayment}
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 border border-gray-400">7ヶ月以降</th>
                    <th className="py-2 border border-gray-400">
                      {afterSixPayment}
                    </th>
                    <th className="py-2 border border-gray-400">
                      {AfterSixTotalPayment}
                    </th>
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
