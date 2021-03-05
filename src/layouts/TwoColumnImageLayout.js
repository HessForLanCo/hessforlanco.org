import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BaseLayout from './BaseLayout';

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 2 1 auto;
  padding: 16px;
  margin-bottom: 48px;
`;

const ImageContainer = styled.div`
  flex: 1 0 auto;
  max-width: 40vw;
  img {
    max-width: 100%;
  }
`;

export default function TwoColumnImageLayout({ imageUrl, imageAlt, children, ...props }) {
  return (
    <BaseLayout {...props}>
      <LayoutContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
        <ImageContainer>
          <img src={imageUrl} alt={imageAlt} />
        </ImageContainer>
      </LayoutContainer>
    </BaseLayout>
  );
}

TwoColumnImageLayout.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
