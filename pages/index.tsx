import type { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { Links } from '../components/Links';
import ChildcareCalculate from './ChildcareCalculate';

const Home: NextPage = () => {
  return (
    <Layout>
      <Links />
    </Layout>
  );
};

export default Home;
