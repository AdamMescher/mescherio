import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';
import { ThemeProvider } from 'styled-components';

addDecorator(story => (
    <ThemeProvider theme={theme}>
        {story()}
    </ThemeProvider>
))

configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);