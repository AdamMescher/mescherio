import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

const Index: NextPage = () => (
  <Layout>
    <main>
      <Hero />
      <About />
    </main>
  </Layout>
);

export default Index;
