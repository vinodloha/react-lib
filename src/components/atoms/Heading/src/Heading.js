/**
 *
 * Heading
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Heading.style';

const Heading = ({ children, type }) => {
  const HeadingType = type;
  return <HeadingType className={styles.default}>{children}</HeadingType>;
}

Heading.defaultProps = {
  inheritedStyles: '',
  variant: '',
  className: '',
  type: 'H1'
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inheritedStyles: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.string
};

const styledHeading = styled(Heading)`
  ${styles};
`;
export default styledHeading;

export { Heading as HeadingVanilla };
