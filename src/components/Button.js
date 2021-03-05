import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { size, color } from '../theme';

const StyledButton = styled.button`
  font-family: inherit;
  background-color: ${props => (
    (props.secondary && color.lightBackground) ||
    (props.cta && color.cta) ||
    color.primary
  )};
  color: ${props => (
    (props.secondary && color.primary) ||
    (props.cta && color.onCta) ||
    color.onPrimary
  )};
  padding: ${props => props.secondary ? '9px 37px' : '12px 40px'}; 
  border: ${props => props.secondary ? `3px solid ${color.primary}` : 'none'};
  border-radius: 2px;
  font-size: ${size.fontPrimary}px;
  font-weight: ${props => props.cta ? '600' : 'initial'};
  cursor: pointer;
  &:hover {
    background-color: ${props => (
      (props.secondary && color.primaryLighter) ||
      (props.cta && color.ctaDark) ||
      color.primaryLight
    )};
  }
`;

const StyledButtonLink = StyledButton.withComponent('a');

export default function Button({ asLink, secondary, cta, children, ...props }) {
  const Component = asLink ? StyledButtonLink : StyledButton;
  return (
    <Component cta={cta} secondary={secondary} {...props}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  cta: PropTypes.bool,
  asLink: PropTypes.bool
};
