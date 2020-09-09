/**
 *
 * Button
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Button.style';

const Button = ({ children, className, type }) => <button type={type} className={className}>{children}</button>;

Button.defaultProps = {
  inheritedStyles: '',
  variant: '',
  className: '',
  type: 'button'
};

Button.propTypes = {
  /**
   * Apply styled component's dynamic classes, don't overwrite.
   */
  className: PropTypes.string,
  /**
   * Body of the component
   */
  children: PropTypes.node.isRequired,
 /**
   * CSS overwrites from parent component
   */
  inheritedStyles: PropTypes.string,
  /**
   * Type of Button component, can be one of ['button', 'reset', 'submit']
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Style variation  of Button component, can be one of ['', 'primary', 'secondary']
   */
  variant: PropTypes.oneOf(['', 'primary', 'secondary'])
};

const styledButton = styled(Button)`
  ${styles};
`;
export default styledButton;

export { Button as ButtonVanilla };
