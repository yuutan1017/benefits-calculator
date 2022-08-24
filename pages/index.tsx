import type { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { Links } from '../components/Links';

const Home: NextPage = () => {
  return (
    <Layout>
      <Links />
    </Layout>
  );
};

export default Home;
