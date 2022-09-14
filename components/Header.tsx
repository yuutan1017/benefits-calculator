import React from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  return (
    <header className="w-full flex justify-center items-center border-t-2 pt-5 mr-20 md:mr-96 ">
      <ul className="flex flex-wrap items-center text-sm sm:mb-0 font-bold">
        <li>
          <Scroll to="methodCalculate" duration={500} offset={50} smooth>
            <a className="mr-4 text-[#13184d] underline sm:mr-8 sm:text-lg">
              計算方法
            </a>
          </Scroll>
        </li>
        <li>
          <Scroll to="aboutWork" duration={500} offset={50} smooth>
            <div className="mr-4 text-[#13184d] underline sm:mr-8 sm:text-lg">
              就労について
            </div>
          </Scroll>
        </li>
        <li>
          <Link href="/Contact">
            <a className="text-[#13184d] underline sm:mr-16 sm:text-lg">
              お問い合わせ
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
