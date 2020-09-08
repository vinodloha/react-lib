/**
 *
 * Heading
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Heading.style';

const Heading = ({ children, type, className }) => {
  const HeadingType = type;
  return <HeadingType className={className}>{children}</HeadingType>;
}

Heading.defaultProps = {
  inheritedStyles: '',
  variant: '',
  className: '',
  type: 'h1'
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inheritedStyles: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

const styledHeading = styled(Heading)`
  ${styles};
`;
export default styledHeading;

export { Heading as HeadingVanilla };
