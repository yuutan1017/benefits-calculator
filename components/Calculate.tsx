import React from 'react';

export const Calculate = () => {
  return (
    <>
      <div className="flex flex-col p-3">
        <h1 className="text-xl font-bold">育児休業給付金　計算ツール</h1>
        <div className="grid grid-cols-2 mt-4">
          <div className="p-3">
            <input className='w-full rounded' placeholder="金額" />
            <input className="mt-2 w-full rounded" placeholder="金額" />
            <input className="mt-2 w-full rounded" placeholder="金額" />
            <input className="mt-2 w-full rounded" placeholder="金額" />
            <input className="mt-2 w-full rounded" placeholder="金額" />
            <input className="mt-2 w-full rounded" placeholder="金額" />
          </div>
          <div className="flex justify-center items-center min-w-screen">
            <p>result</p>
          </div>
        </div>
      </div>
    </>
  );
};
