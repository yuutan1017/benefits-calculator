import React from 'react';
import { Link as Scroll } from 'react-scroll';

export const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center border-t-2 pt-5 mr-24 md:mr-96 mb-3">
      <ul className="flex flex-wrap items-center text-sm sm:mb-0 font-bold">
        <li className="mr-4 sm:mr-8">
          <Scroll to="methodCalculate" duration={500} offset={50} smooth>
            <div className="text-[#13184d] sm:text-lg cursor-pointer">
              計算方法
            </div>
          </Scroll>
        </li>
        <li className="mr-4 sm:mr-8">
          <Scroll to="aboutWork" duration={500} offset={50} smooth>
            <div className="text-[#13184d] sm:text-lg cursor-pointer">
              就労について
            </div>
          </Scroll>
        </li>
        <li className="sm:mr-16">
          <Scroll to="contact" duration={500} offset={50} smooth>
            <div className="text-[#13184d] sm:text-lg cursor-pointer">
              お問い合わせ
            </div>
          </Scroll>
        </li>
      </ul>
    </header>
  );
};
