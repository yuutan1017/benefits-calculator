import React from 'react';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  return (
    <header>
      <nav className="flex flex-row justify-center mt-8">
        <div className="mr-4 border-b-2">
          <Scroll to="methodCalculate" duration={700} offset={50} smooth>
            計算方法
          </Scroll>
        </div>
        <div className="ml-4 border-b-2">
          <Scroll to="aboutWork" duration={700} offset={50} smooth>
            育休中の就労について
          </Scroll>
        </div>
      </nav>
    </header>
  );
};
