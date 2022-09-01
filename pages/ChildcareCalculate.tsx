import React from 'react';
import { Layout } from '../components/Layout';

const ChildcareCalculate = () => {
  return (
    <>
      <Layout>
        <section>
          <h1 className="text-xl font-bold">
            あなたの育児休業給付金、自動で計算します。
          </h1>
          <section className="mx-6 mt-5 text-left">
            <div className='text-md'>
              <p>&lt;初月から6ヵ月まで&gt;</p>
              <p className="mt-1">
                ・育児休業開始から180日： （休業開始時賃金日額 × 支給日数
                <sup>※2</sup>）× 67%
              </p>
              <p className="mt-2">&lt;6ヵ月以降&gt;</p>
              <p className="mt-1">
                ・育児休業開始から181日目以降：（休業開始時賃金日額 × 支給日数
                <sup>※2</sup>）× 50%
              </p>
            </div>
            <div className="mt-2 text-stone-500 text-sm">
              <p>
                ※1：育児休業開始前（産休を取った場合は産休開始前）6カ月間の賃金を180で割った額
              </p>
              <p>※2：通常は30日</p>
            </div>
          </section>
          <article className="flex flex-col py-4 mx-8 mt-6 bg-gray-200">
            <div className="flex flex-row justify-center">
              <span>毎月の額面給与</span>
              <input
                className="border-b-2 border-indigo-400 w-32 ml-2"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-center mt-4">
              <span>開始日程</span>
              <input
                type="date"
                required
                className="border-b-2 border-indigo-400 w-32 ml-2"
              />
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default ChildcareCalculate;
