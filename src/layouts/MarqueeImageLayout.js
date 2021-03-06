import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BaseLayout from './BaseLayout';
import { color, size, breakpoints } from '../theme';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  left: 50%;
  bottom: 0;
  padding: 48px;
  color: ${props => props.lightBackground ? color.onLightBackground : color.onDarkBackground};
  text-shadow: 5px 5px 10px ${color.shadow};
  h1, h2 {
    margin: 0.25em 0;
  }
  @media (max-width: ${breakpoints.med}px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  margin: 16px 13%;
  max-width: 1536px;
`;

export default function MarqueeImageLayout({ imageUrl, imageAlt, title, subtitle, lightBackground, children, ...props }) {
  return (
    <BaseLayout {...props}>
      <LayoutContainer>
        <ImageContainer>
          <img src={imageUrl} alt={imageAlt} />
          <TitleContainer lightBackground={lightBackground}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
          </TitleContainer>
        </ImageContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </LayoutContainer>
    </BaseLayout>
  );
}

MarqueeImageLayout.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lightBackground: PropTypes.bool
};
