import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';

import { size, color } from '../theme';
import { donateUrl, socialLinks } from '../constants';

import logoImage from '../static/img/HessForController.svg';
const logoImageAlt = "Hess for Controller logo";

const Nav = styled.nav`
  height: ${size.navbarHeight}px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavHeader = styled.div`
  flex: 1 0 auto;
  height: 100%;
  img {
    height: 100%;
    width: auto;
  }
`;

const CTAButtonContainer = styled.div`
  margin: 0 48px;
`;

const NavSocialIcons = styled.div`
  font-size: ${size.fontLarge}px;
  margin-right: 16px;
`;

const SocialIconLink = styled.a`
  color: inherit;
  display: inline-block;
  margin: 16px;
  &:hover {
    color: ${color.primary};
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <Link href="/">
          <a>
            <img src={logoImage} alt={logoImageAlt} />
          </a>
        </Link>
      </NavHeader>

      <NavSocialIcons>
        {Object.entries(socialLinks).map(([key, link]) => (
          <SocialIconLink key={key} href={link.url}>
            <FontAwesomeIcon icon={link.icon} title={link.title} />
          </SocialIconLink>
        ))}
      </NavSocialIcons>

      <CTAButtonContainer>
        <Button cta asLink href={donateUrl}>Donate</Button>
      </CTAButtonContainer>
    </Nav>
  );
}
