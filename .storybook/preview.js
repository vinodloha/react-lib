import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/styles/global';
import themeObj from '../src/styles/theme';

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themeObj}>{storyFn()}</ThemeProvider>
  </>
))
