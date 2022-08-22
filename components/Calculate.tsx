import React from 'react';

export const Calculate = () => {
  return (
    <div className='flex flex-col w-full my-auto'>
      <h1 className="text-4xl font-bold">育児休業給付金　計算ツール</h1>

      <div className="">
        <p>開始月の前6ヶ月の給与の平均</p>
        <p>総支給額 // 出勤予定日 * 欠勤日数 = 欠勤単価</p>
        <p>総支給 - 欠勤単価 = 給与支給額</p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};
