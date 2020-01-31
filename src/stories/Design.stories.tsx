import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Color from '../components/Design/Color';
import theme from '../theme';

storiesOf('Design System', module)
  .add('Color', () => (
    <section style={{ fontFamily: 'Proxima Sans' }}>
      <h1>Primary</h1>
      <h2>Blue</h2>
      <Color colors={theme.colors.primary} />
      <h1>Neutral</h1>
      <h2>Ash</h2>
      <Color colors={theme.colors.neutral.ash} />
      <h2>Charcoal</h2>
      <Color colors={theme.colors.neutral.charcoal} />
      <h1>Supporting</h1>
      <h2>Red</h2>
      <Color colors={theme.colors.supporting.red} />
      <h2>Teal</h2>
      <Color colors={theme.colors.supporting.teal} />
      <h2>Yellow</h2>
      <Color colors={theme.colors.supporting.yellow} />
    </section>
  ));
