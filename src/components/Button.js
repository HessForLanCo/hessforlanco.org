import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { size, color } from '../theme';

const StyledButton = styled.button`
  display: inline-block;
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
  font-size: ${size.fontPrimaryPx}px;
  font-weight: ${props => (props.cta && !props.secondary ? '600' : 'initial')};
  text-transform: ${props => props.cta ? 'uppercase' : null};
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
