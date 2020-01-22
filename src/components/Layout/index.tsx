import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from '../Head/index';
import GlobalStyle from '../GlobalStyle';
import theme from '../../theme';

type Props = {
  children: any
};


const Layout: React.FunctionComponent<Props> = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <Head />
    <GlobalStyle />
    <main>{children}</main>
  </ThemeProvider>
);

export default Layout;
