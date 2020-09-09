import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';

import { GlobalStyle } from '../src/styles/global';
import themeObj from '../src/styles/theme';

addDecorator(withA11y);
addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themeObj}>{storyFn()}</ThemeProvider>
  </>
))
