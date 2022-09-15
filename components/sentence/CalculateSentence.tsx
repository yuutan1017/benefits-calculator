import React from 'react';

export const CalculateSentence = (): JSX.Element => {
  return (
    <>
      <section className="text-left border-t-2 border-[#1E2678] mt-8">
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
          <p className="mt-5">&lt;6ヶ月以降&gt;</p>
          <div className="mt-2">
            <p>・育児休業開始から181日目以降</p>
            <p className="font-bold">
              （休業開始時賃金日額<sup>※1</sup> ×支給日数<sup>※2</sup>）× 50%
            </p>
          </div>
        </div>
        <div className="mt-5 text-gray-500 text-xs">
          <p>
            ※1：育児休業開始前（産休を取った場合は産休開始前）6ヶ月間の賃金を180で割った額
          </p>
          <p>※2：通常は30日</p>
        </div>
      </section>
    </>
  );
};
