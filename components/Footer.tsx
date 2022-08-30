import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full h-14 flex justify-center items-center border-t-4 pt-5 mb-7">
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0">
        <li>
          <a href="#" className="mr-4 hover:underline sm:mr-8 sm:text-lg">
            About me
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline sm:mr-8 sm:text-lg">
            github
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline sm:mr-8 sm:text-lg">
            Contact
          </a>
        </li>
        <li>
          <p className='sm:text-lg font-light'>copyright@yutan</p>
        </li>
      </ul>
    </footer>
  );
};
