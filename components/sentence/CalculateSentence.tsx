import React from 'react';

export const CalculateSentence = (): JSX.Element => {
  return (
    <>
      <section
        id="methodCalculate"
        className="text-left border-t-2 border-[#1E2678] mt-8"
      >
        <div className="flex text-xl py-2 mt-8 mb-5">
          <div className="font-bold text-yellow-500 mr-2">
            <span>||</span>
          </div>
          <h2>計算方法</h2>
        </div>
        <div className="text-sm">
          <div>
            <p>&lt;初月から6ヶ月まで&gt;</p>
          </div>
          <div className="mt-2">
            <p>・育児休業開始から180日</p>
            <p className="font-bold">
              （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 67%
            </p>
          </div>
          <p className="mt-5">&lt;6ヵ月以降&gt;</p>
          <div className="mt-2">
            <p>・育児休業開始から181日目以降</p>
            <p className="font-bold">
              （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 50%
            </p>
          </div>
        </div>
        <div className="mt-5 text-gray-500 text-xs">
          <p>
            ※1：育児休業開始前（産休を取った場合は産休開始前）6ヵ月間の賃金を180で割った額
          </p>
          <p>※2：通常は30日</p>
        </div>

        <div className="mt-14 mb-8 text-sm">
          <p>◆休業開始直前の6ヵ月で180万円(1ヵ月30万)の賃金を得ていた場合</p>
          <div className="rounded-lg border-2 border-[#1E2678] p-5 mt-5">
            <p>➀育児休業開始から180日</p>
            <p className="ml-4 mt-2">10,000円×30日×0.67</p>
            <p className="ml-4">
              →
              <b className="bg-[#FFF100] inline bg-gradient-to-b from-white ml-1">
                201,000円支給されます
              </b>
            </p>
            <p className="mt-7">➁育児休業開始から181日以降</p>
            <p className="ml-4 mt-2">10,000円×30日×0.50</p>
            <p className="ml-4">
              →
              <b className="bg-[#FFF100] inline bg-gradient-to-b from-white ml-1">
                150,000円支給されます
              </b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
