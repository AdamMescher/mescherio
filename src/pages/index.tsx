import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Index: NextPage = () => (
  <Layout>
    <main>
      <Hero />
    </main>
  </Layout>
);

export default Index;
