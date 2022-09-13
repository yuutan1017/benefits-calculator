import type { NextPage } from 'next';
import { Link as Scroll } from 'react-scroll';

import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { AboutWorkSentence } from '../components/sentence/AboutWorkSentence';
import { CalculateSentence } from '../components/sentence/CalculateSentence';
import { InitialSentence } from '../components/sentence/InitialSentence';
import Main from './Main';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-11/12 md:w-8/12">
        <section>
          <InitialSentence />
        </section>
        <section>
          <Navbar />
          <Main />
        </section>
        <section id="methodCalculate">
          <CalculateSentence />
        </section>
        <section id="aboutWork">
          <AboutWorkSentence />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
