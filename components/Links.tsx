import React, { FC } from 'react';
import Link from 'next/link';

export const Links: FC = () => {
  return (
    <>
      <div>
        <Link href="/childcareCalculate">
          Childcare
        </Link>
      </div>
      <div>
        <Link href="/aveCalculate">
          AveCalculate
        </Link>
      </div>
      <div>
        <Link href="/aveCalculate_2">
          AveCalculate_2
        </Link>
      </div>
    </>
  );
};
