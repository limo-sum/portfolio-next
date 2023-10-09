"use client";

import { useState } from "react";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import Menu from "./components/menu";
import { observer } from "mobx-react";
import useStore from "../store/index";
import Popup from "./components/common/popup";
import isPropValid from "@emotion/is-prop-valid";

const NavBar = observer(() => {
  const { globalStore } = useStore();
  const { menus, currentMenu, setCurrentMenu } = globalStore;
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const prop = { opened: openMenu };
  return (
    <Nav>
      <NavLogo>
        <Link href={"/"}>LEE JIYUN</Link>
      </NavLogo>
      <NavMenu {...prop}>
        {menus.map((menu: Menu) => {
          const menuProp = { ...prop, current: currentMenu === menu.title };
          return (
            <NavTitle
              key={menu.title}
              {...menuProp}
              onClick={() => setCurrentMenu(menu.title)}
            >
              <Menu targetId={menu.title}>
                <span>{menu.title}</span>
              </Menu>
            </NavTitle>
          );
        })}
      </NavMenu>
      <NavIcons {...prop}>
        <li
          onClick={() => {
            navigator.clipboard
              .writeText("limosum@naver.com")
              .then(() => handleCopy());
          }}
        >
          <FontAwesomeIcon icon={copied ? faCheck : (faEnvelope as IconProp)} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithubAlt as IconProp} />
        </li>
      </NavIcons>
      <NavToggle onClick={() => setOpenMenu(!openMenu)}>
        <FontAwesomeIcon icon={faBars as IconProp} />
      </NavToggle>
      <Popup msgType="success" message="복사되었습니다" visible={copied} />
    </Nav>
  );
});
export default NavBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  padding: 0 24px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: ${() => theme.colors.background};
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLogo = styled.div`
  font-size: 24px;
  a {
    margin-left: 10px;
    font-weight: bolder;
    color: ${() => theme.colors.lake};
  }
`;

const NavMenu = styled.ul.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  display: flex;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: ${(prop: any) => (prop?.opened ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
`;
const NavTitle = styled.li.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  padding: 8px 12px;
  span {
    background-color: ${(prop: any) =>
      prop?.current ? theme.colors.background : theme.colors.lake};
    color: ${(prop: any) =>
      prop?.current ? theme.colors.lake : theme.colors.background};
    border: 1px solid
      ${(prop: any) =>
        prop?.current ? theme.colors.lake : theme.colors.background};
    padding: 3px 6px;
  }
  span:hover {
    background-color: ${() => theme.colors.background};
    color: ${() => theme.colors.lake};
    border: 1px solid ${() => theme.colors.lake};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    span {
      display: block;
      width: 100%;
    }
  }
`;

const NavIcons = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  display: flex;
  font-size: 24px;
  color: white;
  li {
    padding: 8px 12px;
    width: 52px;
    list-style: none;
    color: ${() => theme.colors.lake};
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: ${(prop: any) => (prop?.opened ? "flex" : "none")};
    justify-content: center;
    width: 100%;
  }
`;

const NavToggle = styled.a`
  display: none;
  position: absolute;
  right: 30px;
  font-size: 24px;
  color: ${() => theme.colors.lake};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
