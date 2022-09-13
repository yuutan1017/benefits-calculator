import React from 'react';

export const CalculateSentence = (): JSX.Element => {
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
      </section>
    </>
  );
};
