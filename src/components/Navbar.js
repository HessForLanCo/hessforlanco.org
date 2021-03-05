import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Button from './Button';

import { size, color } from '../theme';

import logoImage from '../static/img/HessForController.svg';
const logoImageAlt = "Hess for Controller logo";

const socialLinks = [
  {
    icon: faFacebookF,
    url: 'https://www.facebook.com/HessForLanCo/'
  },
  {
    icon: faTwitter,
    url: '#'
  }
];

const Nav = styled.nav`
  height: ${size.navbarHeight}px;
  padding: 4px;
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
  margin-right: 32px;
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

      <CTAButtonContainer>
        <Button cta asLink href="#">Donate</Button>
      </CTAButtonContainer>

      <NavSocialIcons>
        {socialLinks.map(link => (
          <SocialIconLink key={link.url} href={link.url}>
            <FontAwesomeIcon icon={link.icon} />
          </SocialIconLink>
        ))}
      </NavSocialIcons>
    </Nav>
  );
}
