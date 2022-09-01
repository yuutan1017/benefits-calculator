import React, { FC } from 'react';
import Link from 'next/link';

export const Links: FC = () => {
  return (
    <>
      <div>
        <Link href="/ChildcareCalculate">
          Childcare
        </Link>
      </div>
      <div>
        <Link href="/AveCalculate">
          AveCalculate
        </Link>
      </div>
    </>
  );
};
