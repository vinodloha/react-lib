/**
 *
 * Button
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Button.style';

const Button = ({ children, type }) => <button type={type} className={styles.default}>{children}</button>;

Button.defaultProps = {
  inheritedStyles: '',
  variant: '',
  className: '',
  type: 'button'
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inheritedStyles: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['', 'primary', 'secondary'])
};

const styledButton = styled(Button)`
  ${styles};
`;
export default styledButton;

export { Button as ButtonVanilla };
