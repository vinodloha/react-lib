import React from 'react';
import { render, screen } from '@testing-library/react';

import { ButtonVanilla } from '../index';

describe('<Button />', () => {
  const testMessage = 'Test Message'
  beforeEach(() => {
    render(<ButtonVanilla>{testMessage}</ButtonVanilla>);
  });

  test('should render with test message', () => {
    expect(screen.getByText(testMessage)).toBeTruthy()
  });
});
