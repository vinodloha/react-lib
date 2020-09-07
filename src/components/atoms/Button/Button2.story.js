import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '.'

export const Button2 = () => (
  <Button>Test</Button>
);

Button2.story = {
  decorators: [withKnobs],
};
