import type { NextPage } from 'next';

import { Navbar } from '../components/Navbar';
import { AboutWorkSentence } from '../components/sentence/AboutWorkSentence';
import { CalculateSentence } from '../components/sentence/CalculateSentence';
import { InitialSentence } from '../components/sentence/InitialSentence';
import Contact from './Contact';
import BenefitsCalculate from './BenefitsCalculate';

const Home: NextPage = () => {
  return (
    <div className="w-11/12 md:w-8/12">
      <Navbar />
      <InitialSentence />
      <BenefitsCalculate />
      <CalculateSentence />
      <AboutWorkSentence />
      <Contact />
    </div>
  );
};

export default Home;
