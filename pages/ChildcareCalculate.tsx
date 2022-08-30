import React from 'react';
import { Layout } from '../components/Layout';

const ChildcareCalculate = () => {
  return (
    <>
      <Layout>
        <section>
          <h1 className="text-xl font-bold">育児休業給付金　計算ツール</h1>
          <section className="mx-6 mt-5">
            <p className="text-sm">
              ・育児休業開始から180日: [休業開始時賃金日額 ×
              支給日数（通常は30日）] × 67%
            </p>
            <p className="text-sm mt-2">
              ・育児休業開始から181日目以降: [休業開始時賃金日額 ×
              支給日数（通常は30日）] × 50%
            </p>
          </section>
          <article className="flex flex-col py-4 mx-8 mt-4 bg-gray-200">
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
                className="border-b-2 border-indigo-400 w-32 ml-2"
                type="text"
              />
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default ChildcareCalculate;
