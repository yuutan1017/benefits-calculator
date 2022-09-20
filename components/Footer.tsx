import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center border-t-2 pt-5 mb-7">
      <ul className="flex flex-wrap items-center text-sm text-gray-700 sm:mb-0">
        <li className='mr-4 sm:mr-8'>
          <Link href="https://yuutan1017-ylog.com/" prefetch={false}>
            <a className="text-gray-500 hover:underline hover:text-blue-400">
              About Me
            </a>
          </Link>
        </li>
        <li className='mr-4 sm:mr-8'>
          <Link href="https://github.com/yuutan1017/paternity-leave" prefetch={false}>
            <a className="text-gray-500 hover:underline hover:text-blue-400">
              Github
            </a>
          </Link>
        </li>
        <li className='ml-6'>
          <p className="sm:text-lg font-light text-gray-500">copyright@yuutan</p>
        </li>
      </ul>
    </footer>
  );
};
