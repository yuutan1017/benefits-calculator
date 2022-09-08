import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav className="w-screen">
        <div className='flex flex-row justify-center items-center my-3'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>contact</button>
        </div>
      </nav>
    </header>
  );
};
