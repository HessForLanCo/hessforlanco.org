import styled from '@emotion/styled';

import BaseLayout from './BaseLayout';

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 2 1 auto;
  padding: 10px;
`;

const ImageContainer = styled.div`
  flex: 1 0 auto;
  max-width: 33vw;
  img {
    max-width: 100%;
  }
`;

export default function TwoColumnImageLayout({ imageUrl, children, ...props }) {
  return (
    <BaseLayout {...props}>
      <LayoutContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
        <ImageContainer>
          <img src={imageUrl} />
        </ImageContainer>
      </LayoutContainer>
    </BaseLayout>
  );
}
