import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

const Index: NextPage = () => (
  <Layout>
    <main>
      <Hero />
      <About />
      <Footer />
    </main>
  </Layout>
);

export default Index;
