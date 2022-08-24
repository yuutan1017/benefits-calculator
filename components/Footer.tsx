import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full h-12 flex justify-center items-center border-t-4 pt-4">
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About me
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            github
          </a>
        </li>
        <li>
          <a href="#" className="mr-6 hover:underline md:mr-6">
            Contact
          </a>
        </li>
        <li>
          <p>copyright@yutan</p>
        </li>
      </ul>
    </footer>
  );
};
