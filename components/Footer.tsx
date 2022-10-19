import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center border-t-2 pt-5 mb-7">
      <ul className="flex flex-wrap items-center text-sm text-gray-700 sm:mb-0">
        <li className="ml-6">
          <p className="sm:text-lg font-light text-gray-500">
            Copyright © {new Date().getFullYear()} Yuta N.
          </p>
        </li>
      </ul>
    </footer>
  );
};
