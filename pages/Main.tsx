import React, { useState } from 'react';
import Link from 'next/link';

import type { Payment, setChildcareInputs } from '../types/type';

const Main = () => {
  const [data, setData] = useState<setChildcareInputs>({
    grossIncome: 550000,
    netIncome: 430000,
    dailyWage: 8200,
  });
  const [payment, setPayment] = useState<Payment>({
    sixMonth: 0,
    afterSixMonth: 0,
    toSixMakeMoney: 0,
    toAfterSixMakeMoney: 0,
  });
  const sixPayment = Math.floor(payment.sixMonth);
  const totalPayment = Math.floor(payment.sixMonth * 6);
  const afterSixPayment = Math.floor(payment.afterSixMonth);
  const totalYearPayment = Math.floor(
    payment.sixMonth * 6 + payment.afterSixMonth * 6
  );
  const sixMakeMoney = Math.floor(payment.toSixMakeMoney);
  const afterSixMakeMoney = Math.floor(payment.toAfterSixMakeMoney);
  const sixWorkingDays = Math.floor(sixMakeMoney / data.dailyWage);
  const afterSixWorkingDays = Math.floor(afterSixMakeMoney / data.dailyWage);
  const differencePayment = (comparison: number) => comparison - data.netIncome;

  const [visible, setVisible] = useState<boolean>(false);
  const [upperLimit, setUpperLimit] = useState<boolean>(true);

  const calculateDailyWage = () => {
    const eightyPer = (data.grossIncome / 100) * 80;
    let sixSevenPer = (data.grossIncome / 100) * 67;
    let fiftyPer = (data.grossIncome / 100) * 50;
    let toMakeMoneySix = eightyPer - sixSevenPer;
    let toMakeMoneySixAfter = eightyPer - fiftyPer;
    if (sixSevenPer >= 305721) {
      sixSevenPer = 305721;
      fiftyPer = 228150;
      if (upperLimit) setUpperLimit(!upperLimit);
    } else {
      if (!upperLimit) setUpperLimit(!upperLimit);
    }
    if (!visible) setVisible(!visible);
    setPayment({
      ...payment,
      sixMonth: sixSevenPer,
      afterSixMonth: fiftyPer,
      toSixMakeMoney: toMakeMoneySix,
      toAfterSixMakeMoney: toMakeMoneySixAfter,
    });
  };

  return (
    <>
      <section className="flex flex-col">
        <form className="py-5 mt-5 rounded-lg bg-gray-200 border-2 border-[#39497C]">
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
          } border-t-2 border-[#1E2678]`}
        >
          <p className="mt-12 text-left mb-2">◆月々の支給額</p>
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
                  {sixPayment.toLocaleString()}円
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
                <th className="py-3 border border-gray-400">６ヶ月経過後</th>
                <th className="py-2 border border-gray-400">
                  {afterSixPayment.toLocaleString()}円
                </th>
                <th
                  className={`${
                    differencePayment(payment.sixMonth) < 0
                      ? 'text-red-600'
                      : ''
                  } py-2 border border-gray-400`}
                >
                  {differencePayment(payment.afterSixMonth).toLocaleString()}円
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
                  {totalPayment.toLocaleString()}円
                </th>
                <th className="py-4 border border-gray-400">
                  {totalYearPayment.toLocaleString()}円
                </th>
              </tr>
            </tbody>
          </table>
          <p className="text-left mb-2 mt-4">◆就労する場合</p>
          {upperLimit ? (
            <table className="bg-gray-200 border-gray-300 text-sm mb-5">
              <thead className="bg-[#1E2678] text-white">
                <tr>
                  <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                    期間
                  </th>
                  <th className="py-2 border border-gray-500 text-xs">
                    就労できる日数
                  </th>
                  <th className="py-2 border border-gray-500 text-xs">
                    減額されず稼げる金額
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="py-3 border border-gray-400">６ヶ月まで</th>
                  <th className="py-2 border border-gray-400">
                    {sixWorkingDays}日
                  </th>
                  <th className="py-2 border border-gray-400">
                    {sixMakeMoney.toLocaleString()}円
                  </th>
                </tr>
                <tr>
                  <th className="py-3 border border-gray-400">６ヶ月経過後</th>
                  <th className="py-2 border border-gray-400">
                    {afterSixWorkingDays}日
                  </th>
                  <th className="py-2 border border-gray-400">
                    {afterSixMakeMoney.toLocaleString()}円
                  </th>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="mt-3 text-sm text-left">
              支給額が上限額に達している為、就労できません
            </p>
          )}
          <div className="text-[12px] text-gray-500 mt-10 text-left">
            <p>※こちらの計算結果はあくまで概算となりますので、</p>
            <Link href="/AveCalculate">
              <a className="hover:text-blue-400">
                より正確に計算したい場合は毎月の総支給額の欄を休業開始時賃金日額
                × 30日で計算してみて下さい。
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
