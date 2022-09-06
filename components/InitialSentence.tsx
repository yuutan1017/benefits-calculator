import React from 'react';
import Link from 'next/link';

export const InitialSentence = () => {
  return (
    <>
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
        <div className="text-sm">
          <p className="mt-3">&lt;初月から6ヶ月まで&gt;</p>
          <p className="mt-1">
            ・育児休業開始から180日：（休業開始時賃金日額<sup>※1</sup> ×
            支給日数
            <sup>※2</sup>）× 67%
          </p>
          <p className="mt-1">&lt;6ヶ月以降&gt;</p>
          <p className="mt-1">
            ・育児休業開始から181日目以降：（休業開始時賃金日額<sup>※1</sup> ×
            支給日数
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
    </>
  );
};

