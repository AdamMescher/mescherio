import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: NextPage = () => (
  <Layout>
    <main>
      <Hero />
      <About />
      <Contact email="admescher@gmail.com" />
      <Footer />
    </main>
  </Layout>
);

export default Index;
