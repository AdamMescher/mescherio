import * as React from 'react';
import { NextPage } from 'next';
import Hero from '../components/Hero';
import About from '../components/About';

const Index: NextPage = () => (
  <main>
    <Hero />
    <About />
  </main>
);

export default Index;
