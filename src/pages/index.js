import styled from '@emotion/styled';

import MarqueeImageLayout from '../layouts/MarqueeImageLayout';
import Button from '../components/Button';

import { donateUrl, volunteerUrl } from '../constants';
import { breakpoints } from '../theme';

import marqueeImage from '../static/img/ChrisChatting.jpg';
const marqueeImageAlt = "Chris chatting with another Lancaster County resident";

const Content = styled.main`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  h1, h2, h3, p {
    width: 100%;
    margin: 0.3em 0;
  }
`;

const CTAButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5em;
  a {
    margin: 0 1.25em;
  }
  @media (max-width: ${breakpoints.small}px) {
    flex-direction: column;
    a {
      margin: 0.5em 0;
    }
  }
`;

export default function Home() {
  return (
    <MarqueeImageLayout
      imageUrl={marqueeImage}
      imageAlt={marqueeImageAlt}
      title="Chris Hess"
      subtitle="The better choice for Lancaster County Controller"
    >
      <Content>
        <h2>Lancaster County has a choice for Controller for the first time in 20 years.</h2>
        <h3>Chris Hess is the better choice.</h3>
        <p>
          Lancaster County hasn&apos;t had a contested race for County Controller since 2001, but this year, Lancastrians will finally have a choice for Controller.  The choice is clear.  Chris Hess is the right person for the job of Lancaster County Controller.
        </p>
        <p>
          Chris is a lifelong resident of Lancaster County.  He loves our beautiful county and cares about the people who live here, and he wants to give back by serving as Lancaster County Controller.  Chris strongly believes that elected leaders need to put the people they represent <em>first</em>, not private interests.  He believes that politicians should be transparent and honest, that they should mean what they say.
        </p>
        <p>
          As Lancaster County Controller, Chris will put these principles into action.  He plans to use the power of the office of Controller to keep more of our hard-earned tax dollars right here in Lancaster County by fighting for policies that invest County dollars locally.  This will help put those tax dollars right back into Lancastrians&apos; pockets, while at the same time enriching our county through wise investments.
        </p>
        <p>
          Chris Hess is the better choice for Lancaster County Controller.  If you can, please volunteer or donate to Chris&apos;s campaign, and make sure to vote for Chris this November!  Your vote will help to ensure Lancaster County has a Controller who represents and fights for all Lancastrians.
        </p>
        <CTAButtonsContainer>
          <Button cta secondary asLink href={volunteerUrl} target="_blank" rel="noopener noreferrer">Volunteer with us</Button>
          <Button cta asLink href={donateUrl}>Donate</Button>
        </CTAButtonsContainer>
      </Content>
    </MarqueeImageLayout>
  );
}
