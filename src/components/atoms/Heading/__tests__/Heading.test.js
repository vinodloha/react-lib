import React from 'react';
import { render, screen } from '@testing-library/react';

import { HeadingVanilla } from '../src/index';

describe('<Heading />', () => {
  const testMessage = 'Test Message'
  beforeEach(() => {
    render(<HeadingVanilla>{testMessage}</HeadingVanilla>);
  });

  test('should render with test message', () => {
    expect(screen.getByText(testMessage)).toBeTruthy()
  });
});
