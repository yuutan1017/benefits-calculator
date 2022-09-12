import React from 'react';
import Link from 'next/link';

export const CalculateSentence = () => {
  return (
    <>
      <section className="mx-4 mt-8 text-left border-t-2 border-[#1E2678]">
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
              <b className="bg-[#FFF100] inline bg-gradient-to-b from-white">
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
            <p className="mt-8">
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

            <p className="mt-14">◆支給額の調整パターン</p>
            <div className="rounded-lg border-2 border-yellow-500 p-5 mt-5">
              <p className="p-1 text-gray-900">➀ 満額支給</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の１３％（または３０％）まで
              </p>
              <p className="p-1 mt-2 text-gray-900">➁ 支給額の調整</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の１３％（または３０％）超え、８０％未満
              </p>
              <p className="p-1 mt-2 text-gray-900">➂ 支給停止</p>
              <p className="ml-4 font-bold">
                → 給与額が、賃金月額の８０％を超える場合
              </p>
            </div>
            <div className="my-14">
              <p>
                ◆賃金月額を30万と仮定して就労した場合の育児休業給付金を計算してみましょう。
              </p>
              <div className="rounded-lg border-2 border-[#1E2678] p-5 mt-5">
                <p>➀ 36,000円の賃金が支払われた場合</p>
                <p className="ml-4 mt-2">36,000円は300,000円の12%ですので</p>
                <p className="ml-4">
                  →
                  <b className="bg-[#FFF100] inline bg-gradient-to-b from-white ml-1">
                    201,000円（全額）支給されます
                  </b>
                </p>
                <p className="mt-7">➁ 96,000円の賃金が支払われた場合</p>
                <p className="ml-4 mt-2">96,000円は300,000円の32%ですので</p>
                <p className="ml-4 mt-2">
                  240,000円（80%） - 96,000円（32%） =
                  <b className="bg-[#FFF100] inline bg-gradient-to-b from-white ml-1">
                    144,000円（48%）が支給されます
                  </b>
                </p>
                <p className="mt-7">
                  ➂ 240,000円（80%）以上の賃金が支払われた場合
                </p>
                <p className="ml-4">
                  →
                  <b className="bg-[#FFF100] inline bg-gradient-to-b from-white ml-1">
                    支給はありません
                  </b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
