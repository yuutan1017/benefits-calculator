import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full h-10 flex justify-center items-center border-t-2 pt-5 mb-7">
      <ul className="flex flex-wrap items-center text-sm text-gray-700 sm:mb-0">
        <li>
          <Link href="https://yuutan1017-ylog.com/">
            <a className="mr-4 hover:underline sm:mr-8 sm:text-lg">About Me</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/yuutan1017/paternity-leave">
            <a className="mr-4 hover:underline sm:mr-8 sm:text-lg">Github</a>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <a className="mr-4 hover:underline sm:mr-8 sm:text-lg">Contact</a>
          </Link>
        </li>
        <li>
          <p className="sm:text-lg font-light">copyright@yutan</p>
        </li>
      </ul>
    </footer>
  );
};
