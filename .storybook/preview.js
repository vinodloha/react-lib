import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Styles from '../src/styles/src/';

const GlobalStyle = Styles.GlobalStyle
const themeObj = Styles.Theme

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themeObj}>{storyFn()}</ThemeProvider>
  </>
))
