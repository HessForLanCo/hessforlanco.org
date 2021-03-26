import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { color } from '../theme';

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
  padding: 0.5em 2em;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => (
    (props.secondary && color.primary) ||
    (props.cta && color.cta) ||
    color.primary
  )};
  border-radius: 2px;
  font-size: 1rem;
  font-weight: ${props => (props.cta && !props.secondary ? '600' : 'initial')};
  text-transform: ${props => props.cta ? 'uppercase' : null};
  text-align: center;
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
