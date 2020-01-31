import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout/index';
import Color from '../components/Design/Color';
import theme from '../theme';

const Brand: NextPage = () => (
  <Layout>
    <h1>Color</h1>
    <h2>Primary</h2>
    <section>
      <Color text="Blue" colors={theme.colors.primary} fonts={{ dark: theme.colors.primary[800], light: theme.colors.primary[200] }} />
    </section>
    <h2>Neutral</h2>
    <Color text="Ash" colors={theme.colors.neutral.ash} fonts={{ dark: theme.colors.neutral.ash[600], light: theme.colors.neutral.ash[200] }} style={{ color: theme.colors.neutral.ash[200] }} />
    <Color text="Charcoal" colors={theme.colors.neutral.charcoal} fonts={{ dark: theme.colors.neutral.charcoal[600], light: theme.colors.neutral.charcoal[200] }} style={{ color: theme.colors.neutral.charcoal[200] }} />
    <h2>Supporting</h2>
    <Color text="Red" colors={theme.colors.supporting.red} fonts={{ dark: theme.colors.supporting.red[800], light: theme.colors.supporting.red[200] }} style={{ color: theme.colors.supporting.red[200] }} />
    <Color text="Green" colors={theme.colors.supporting.green} fonts={{ dark: theme.colors.supporting.green[800], light: theme.colors.supporting.green[200] }} style={{ color: theme.colors.supporting.green[200] }} />
    <Color text="Gold" colors={theme.colors.supporting.gold} fonts={{ dark: theme.colors.supporting.gold[800], light: theme.colors.supporting.gold[200] }} style={{ color: theme.colors.supporting.gold[200] }} />
    <Color text="Lavender" colors={theme.colors.supporting.lavender} fonts={{ dark: theme.colors.supporting.lavender[800], light: theme.colors.supporting.lavender[200] }} style={{ color: theme.colors.supporting.lavender[200] }} />
  </Layout>
);

export default Brand;
