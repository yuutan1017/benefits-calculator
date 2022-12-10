import React, { useState } from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

import type { Payment, setChildcareInputs } from '../types/type';

const BenefitsCalculate = () => {
  //総支給、手取り、日当
  const [data, setData] = useState<setChildcareInputs>({
    grossIncome: 300000,
    netIncome: 230000,
  });
  //支給額と月々に稼げる金額
  const [payment, setPayment] = useState<Payment>({
    sixMonth: 0,
    afterSixMonth: 0,
    sixMonthBenefits: 0,
    afterSixMonthBenefits: 0,
  });

  //計算するボタン押したら表示する
  const [calResultVisible, setCalResultVisible] = useState<boolean>(false);
  //育児休業給付金が上限を超えたら表示を切り替える
  const [upperLimit, setUpperLimit] = useState<boolean>(false);

  //月々の支給額を四捨五入する
  const sixMonthPayment = Math.floor(payment.sixMonth);
  const afterSixMonthPayment = Math.floor(payment.afterSixMonth);
  const totalPayment = Math.floor(payment.sixMonth * 6);
  const totalYearPayment = Math.floor(totalPayment + afterSixMonthPayment * 6);

  const base = data.grossIncome / 100;
  let eighty = base * 80;
  let sixSeven = base * 67;
  let fifty = base * 50;

  const calculateDailyWage = () => {
    if (sixSeven >= 305721) {
      sixSeven = 305721;
      fifty = 228150;
      setUpperLimit(true);
    } else {
      setUpperLimit(false);
    }
    setCalResultVisible(true);
    setPayment({
      ...payment,
      sixMonth: sixSeven,
      afterSixMonth: fifty,
      sixMonthBenefits: eighty - sixSeven,
      afterSixMonthBenefits: eighty - fifty,
    });
  };

  return (
    <>
      <section className="flex flex-col">
        <section className="mt-5">
          <form
            method="POST"
            className="py-5 rounded-lg bg-gray-200 border-2 border-[#39497C]"
          >
            <p className="text-xs text-blue-800">
              ※設定を変更し計算してみましょう※
            </p>
            <div className="flex flex-row justify-center mt-3 p-1">
              <label htmlFor="grossIncome">毎月の総支給額</label>
              <input
                id="grossIncome"
                type="number"
                defaultValue={data.grossIncome}
                className="border-b-2 border-gray-400 w-32 pl-2 outline-none mx-1"
                onChange={(e) => {
                  setData({ ...data, grossIncome: parseInt(e.target.value) });
                }}
              />
              <span>円</span>
            </div>
            <div className="flex flex-row justify-center mt-4">
              <label htmlFor="netIncome">毎月の手取り額</label>
              <input
                id="netIncome"
                type="number"
                defaultValue={data.netIncome}
                className="border-b-2 border-gray-400 w-32 pl-2 outline-none mx-1"
                onChange={(e) => {
                  setData({ ...data, netIncome: parseInt(e.target.value) });
                }}
              />
              <span>円</span>
            </div>
            <Scroll
              href="results"
              to="results"
              duration={500}
              offset={-10}
              smooth
            >
              <div className="flex flex-row justify-center mt-8">
                <button
                  type="button"
                  className="rounded w-40 bg-[#1E2678] py-2 font-light text-white outline-none"
                  onClick={calculateDailyWage}
                >
                  計算する
                </button>
              </div>
            </Scroll>
          </form>
        </section>
        <section className="mt-10">
          <div id="results"></div>
          <div
            className={`flex flex-col justify-center border-t-2 border-[#1E2678] ${
              calResultVisible ? 'visible' : 'hidden'
            }`}
          >
            <div className="mt-10 mb-2 text-left">
              <p>◆月々の支給額</p>
            </div>
            <table className="bg-gray-200 border-gray-300 text-sm">
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
                  <th className="py-3 border border-gray-400">６ヵ月まで</th>
                  <td className="py-2 border border-gray-400 font-bold">
                    {sixMonthPayment.toLocaleString()}円
                  </td>
                  <td
                    className={`${
                      payment.sixMonth - data.netIncome < 0
                        ? 'text-red-600'
                        : ''
                    } py-2 border border-gray-400 font-bold`}
                  >
                    {(payment.sixMonth - data.netIncome).toLocaleString()}円
                  </td>
                </tr>
                <tr>
                  <th className="py-3 border border-gray-400">６ヵ月以降</th>
                  <td className="py-2 border border-gray-400 font-bold">
                    {afterSixMonthPayment.toLocaleString()}円
                  </td>
                  <td
                    className={`${
                      payment.sixMonth - data.netIncome < 0
                        ? 'text-red-600'
                        : ''
                    } py-2 border border-gray-400 font-bold`}
                  >
                    {(payment.afterSixMonth - data.netIncome).toLocaleString()}
                    円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-gray-600 mt-8 text-left text-xs">
              ※上限額（６ヵ月まで） 305,329円
              <br />
              ※上限額（６ヵ月経過後） 227,850円 となります
            </div>
            <div className="mt-10 mb-2 text-left">
              <p>◆支給額の合計</p>
            </div>
            <table className="bg-gray-200 border-gray-300 text-sm mb-5">
              <thead className="bg-[#1E2678] text-white">
                <tr>
                  <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                    ６ヵ月
                  </th>
                  <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                    1年
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 border border-gray-400 font-bold">
                    {totalPayment.toLocaleString()}円
                  </td>
                  <td className="py-4 border border-gray-400 font-bold">
                    {totalYearPayment.toLocaleString()}円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 mb-2 text-left">
              <p>◆減額されず就労する場合</p>
            </div>
            {upperLimit ? (
              <div className="mt-3  text-sm text-left text-red-600 font-bold">
                <p>※支給額が上限額に達している為、就労できません</p>
              </div>
            ) : (
              <table className="bg-gray-200 border-gray-300 text-sm">
                <thead className="bg-[#1E2678] text-white">
                  <tr>
                    <th className="md:w-40 w-24 py-2 border border-gray-500 text-xs">
                      期間
                    </th>
                    <th className="py-2 border border-gray-500 text-xs">
                      月々に得られる金額
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-3 border border-gray-400">６ヵ月まで</th>
                    <td className="py-2 border border-gray-400 font-bold">
                      {Math.floor(payment.sixMonthBenefits).toLocaleString()}円
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 border border-gray-400">６ヵ月以降</th>
                    <td className="py-2 border border-gray-400 font-bold">
                      {payment.afterSixMonthBenefits.toLocaleString()}円
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <div className="text-gray-600 mt-8 text-left text-xs">
              <Link href="/AveCalculate">
                <a className="hover:text-blue-400">
                  ※こちらの計算結果はあくまで概算となりますので、
                  より正確に計算したい場合は毎月の総支給額の欄をこちらで計算してみて下さい。
                </a>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default BenefitsCalculate;
