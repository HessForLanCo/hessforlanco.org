import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

import { color, breakpoints, zIndex } from '../theme';
import { donateUrl, socialLinks } from '../constants';

import logoImage from '../static/img/HessForController.svg';
const logoImageAlt = "Hess for Controller logo";

const Nav = styled.nav`
  font-size: 1rem;
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.small}px) {
    flex-wrap: wrap;
  }
`;

const NavHeader = styled.div`
  flex: 1 0 auto;
  img {
    height: 7rem;
    width: auto;
  }
  @media (max-width: ${breakpoints.small}px) {
    flex: 1 1 75%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.small}px) {
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: ${zIndex.navMenu};
    width: ${props => props.show ? '75%' : 0};
    transition: width 0.2s ease-in-out;
    padding-left: ${props => props.show ? '2rem' : 0};
    overflow: hidden;
    background-color: ${color.lightBackground};
    box-shadow: -5px 5px 15px ${color.shadow};
  }
`;

const MenuBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${zIndex.navMenuBackdrop};
  background-color: ${color.backdrop};
  display: ${props => props.show ? 'initial' : 'none'};
`;

const NavSocialIcons = styled.div`
  font-size: 2em;
  margin-right: 16px;
`;

const SocialIconLink = styled.a`
  display: inline-block;
  margin: 16px;
  color: inherit;
  &:hover {
    color: ${color.primary};
  }
`;

const MenuOpenButtonContainer = styled.div`
  display: none;
  @media (max-width: ${breakpoints.small}px) {
    display: initial;
  }
`;

const MenuOpenButton = styled.button`
  font-size: 3em;
  border: none;
  background-color: ${color.lightBackground};
  cursor: pointer;
  &:active, &:hover {
    background-color: ${color.hoverOnLightBackground};
  }
`;

const MenuCloseButtonContainer = styled(MenuOpenButtonContainer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const MenuCloseButton = styled(MenuOpenButton)`
  font-size: 2em;
`;

const CTAButtonContainer = styled.div`
  margin: 0 48px;
  @media (max-width: ${breakpoints.small}px) {
    margin: 16px auto 0 auto;
  }
`;

export default function Navbar() {
  const [ showMenu, setShowMenu ] = useState(false);
  return (
    <Nav>
      <NavHeader>
        <Link href="/">
          <a>
            <img src={logoImage} alt={logoImageAlt} />
          </a>
        </Link>
      </NavHeader>

      <NavMenu show={showMenu}>
        <MenuCloseButtonContainer>
          <MenuCloseButton onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </MenuCloseButton>
        </MenuCloseButtonContainer>

        <NavSocialIcons>
          {Object.entries(socialLinks).map(([key, link]) => (
            <SocialIconLink key={key} href={link.url}>
              <FontAwesomeIcon icon={link.icon} title={link.title} />
            </SocialIconLink>
          ))}
        </NavSocialIcons>
      </NavMenu>

      <MenuBackdrop show={showMenu} />

      <MenuOpenButtonContainer>
        <MenuOpenButton onClick={() => setShowMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuOpenButton>
      </MenuOpenButtonContainer>

      <CTAButtonContainer>
        <Button cta asLink href={donateUrl}>Donate Now</Button>
      </CTAButtonContainer>
    </Nav>
  );
}
