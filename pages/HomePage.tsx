import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Calculate } from '../components/Calculate';

export const HomePage = () => {
  return (
    <Layout>
      <Calculate />
      <Footer />
    </Layout>
  );
};
