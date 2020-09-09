import { css } from 'styled-components';

export default css`
  border: 0;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  height: 40px;

  ${props => props.variant === 'primary' && `
    background-color: ${props.theme.ColorBackgroundButtonPrimaryBase};
    color: ${props.theme.ColorFontButtonPrimaryBase};
    &:hover, :active{
      background-color: ${props.theme.ColorBackgroundButtonPrimaryActive};
    }
  `};

  ${props => props.variant === 'secondary' && `
    background-color: ${props.theme.ColorBackgroundButtonSecondaryBase};
    color: ${props.theme.ColorFontButtonSecondaryBase};
    &:hover, :active{
      background-color: ${props.theme.ColorBackgroundButtonSecondaryActive};
    }
  `};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
