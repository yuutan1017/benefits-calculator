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
        <div className="mt-6 mb-2 text-left">
          赤ちゃんが産まれる時にもらえるお金や育児休業給付金をもらう条件など
          <br />
          詳しく知りたい方はこちらをご覧ください。
        </div>
        <div className="text-[12px] text-gray-500">
          <div className="flex flex-row hover:text-blue-400">
            <Link href="https://ninps.com/workstyle/work/archives/29">
              <a>
                参考 ：
                育児休業給付金とは？申請・計算方法や延長できるケースまで、どこよりもわかりやすく解説
              </a>
            </Link>
          </div>
        </div>
      </article>
      <section className="mx-4 mt-5 text-left border-t-2 border-[#39497C]">
        <div className="flex flex-row">
          <span className='font-bold text-xl text-end mr-2 mt-4 text-yellow-500'>|</span>
          <h2 className="mt-4 text-xl">計算方法について</h2>
        </div>
        <div className="text-sm">
          <p className="mt-3">&lt;初月から6ヶ月まで&gt;</p>
          <p className="mt-1">
            ・育児休業開始から180日
            <br />
            <div className="font-bold">
              （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 67%
            </div>
          </p>
          <p className="mt-1">&lt;6ヶ月以降&gt;</p>
          <p className="mt-1">
            ・育児休業開始から181日目以降
            <br />
            <div className="font-bold">
              （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 50%
            </div>
          </p>
        </div>
        <div className="mt-3 text-gray-500 text-xs">
          <p>
            ※1：育児休業開始前（産休を取った場合は産休開始前）6ヶ月間の賃金を180で割った額
          </p>
          {/* <Link href="/AveCalculate">
            <p className="w-52 hover:font-bold hover:text-gray-900 hover:cursor-pointer">
              －－&gt;平均賃金の計算はこちらから
            </p>
          </Link> */}
          <p className="mt-1">※2：通常は30日</p>
        </div>
        <div className="flex flex-row">
          <span className='font-bold text-xl text-end mr-2 mt-4 text-yellow-500'>|</span>
          <h2 className="mt-4 text-xl">育休中の就労について</h2>
        </div>
      </section>
    </>
  );
};
