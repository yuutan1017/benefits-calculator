import React from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const scroll = () => {
    window.scrollTo({
      behavior: 'smooth',
    });
  };
  return (
    <header className="w-full flex justify-center items-center border-t-2 pt-5 mr-24 md:mr-96 mb-3">
      <ul className="flex flex-wrap items-center text-sm sm:mb-0 font-bold">
        <li className="mr-4 sm:mr-8 text-[#13184d] sm:text-lg cursor-pointer">
          <Link to="methodCalculate" duration={500} offset={50} smooth>
            計算方法
          </Link>
        </li>
        <li className="mr-4 sm:mr-8 text-[#13184d] sm:text-lg cursor-pointer">
          <Link to="aboutWork" duration={500} offset={50} smooth>
            就労について
          </Link>
        </li>
        <li className="sm:mr-16 text-[#13184d] sm:text-lg cursor-pointer">
          <Link to="contact" duration={500} offset={50} smooth>
            お問い合わせ
          </Link>
        </li>
      </ul>
    </header>
  );
};
