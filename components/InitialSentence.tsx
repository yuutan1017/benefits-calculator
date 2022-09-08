import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const InitialSentence = () => {
  return (
    <>
      <article className="mx-4 mt-16">
        <h1 className="text-2xl font-bold">
          あなたの育児休業給付金、自動で計算します。
        </h1>
        <div className="text-md text-left mt-12">
          <p>
            労働者が子育てするために休業する場合、育児休業給付金が受け取れます。
          </p>
          <p>
            また、
            <b className="border-b-4 border-yellow-400">
              育児休業期間中は社会保険料などの納付が免除されます。
            </b>
          </p>
        </div>
        <div className="mt-8 mb-2 text-left">
          赤ちゃんが産まれる時にもらえるお金や育児休業給付金をもらう条件など
          <br />
          詳しく知りたい方はこちらをご覧ください。
        </div>
        <div className="text-[12px] text-gray-500">
          <div className="flex flex-row hover:text-blue-400">
            <Link href="https://ninps.com/workstyle/work/archives/29">
              <a>
                参考 :
                育児休業給付金とは？申請・計算方法や延長できるケースまで、どこよりもわかりやすく解説
              </a>
            </Link>
          </div>
        </div>
      </article>
      <section className="mx-4 mt-8 text-left border-t-4 border-[#39497C]">
        <section>
          <div className="flex flex-row items-center text-center">
            <span className="font-bold text-xl text-center mr-2 mt-8 text-yellow-500">
              ||
            </span>
            <h2 className="mt-8 text-xl">計算方法について</h2>
          </div>
          <div className="text-sm">
            <p className="mt-5">&lt;初月から6ヶ月まで&gt;</p>
            <div className="mt-1">
              ・育児休業開始から180日
              <br />
              <p className="font-bold">
                （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 67%
              </p>
            </div>
            <p className="mt-3">&lt;6ヶ月以降&gt;</p>
            <div className="mt-1">
              ・育児休業開始から181日目以降
              <br />
              <p className="font-bold">
                （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 50%
              </p>
            </div>
          </div>
          <div className="mt-3 text-gray-500 text-xs">
            <p>
              ※1：育児休業開始前（産休を取った場合は産休開始前）6ヶ月間の賃金を180で割った額
            </p>
            <p className="mt-1">※2：通常は30日</p>
          </div>
        </section>

        <section>
          <div className="flex flex-row mt-16">
            <span className="font-bold text-xl text-center mr-2 text-yellow-500">
              ||
            </span>
            <h2 className="text-xl">育休中の就労について</h2>
          </div>
          <div className="text-sm mt-8">
            <p>
              育児休業中は本来、就労することは想定されていません。事業主側から求めに応じ、合意することで就労することはできますが、
            </p>
            <p>
              あくまで
              <b className="border-b-4 border-yellow-400">
                「臨時的かつ一時的」
              </b>
              なものでなくてはなりません。
            </p>
            <p className="mt-4">
              詳しく知りたい場合はお勤め先の人事やハローワークにてご確認下さい。
            </p>
            <div className="text-[12px] text-gray-500 mt-2">
              <div className="flex flex-row hover:text-blue-400">
                <Link href="https://we-love.gunma.jp/area/childcareleave-half">
                  <a>
                    参考 :
                    半育休の働き方とは？育休中に働く場合の収入や注意点を解説
                  </a>
                </Link>
              </div>
            </div>
            <p className='mt-8'>
              以上を踏まえて、就労できる日数や時間が下記のように決まっています。
            </p>
            <div className="mt-12">
              <p className="font-bold">・月10日以内の就労である</p>
              <p className="font-bold mt-3">
                ・月10日以上の就労の場合は、1ヶ月の就労時間が80時間以内であること
              </p>
              <p className="font-bold mt-3">
                ・「週◯回」「毎週◯曜日」など、定期的な就労でないこと
              </p>
              <p className="mt-12">
                以上の条件を満たしていないと、育休中でないとみなされ、育児休業給付金の支給が止まるおそれがあります。　
              </p>
              <p>なお、収入額によっては次のような支給の調整が行われます。</p>
            </div>

            <p className="mt-10">&lt;支給額の調整パターン&gt;</p>
            <div className="border-2 border-yellow-500 p-5 mt-5">
              <p className="p-1 text-gray-700">・満額支給</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の１３％（または３０％）まで
              </p>
              <p className="p-1 mt-2 text-gray-700">・支給額の調整</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の１３％（または３０％）超え、８０％未満
              </p>
              <p className="p-1 mt-2 text-gray-700">・支給停止</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の８０％を超える場合
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
