"use client";

import { styled } from "styled-components";
import { theme } from "../styles/theme";
import { observer } from "mobx-react";
import useStore from "../store/index";
import Menu from "./components/menu";
import isPropValid from "@emotion/is-prop-valid";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import profile_image from "./images/profile_image.jpg";

const SideNavBar = observer(() => {
  const { globalStore } = useStore();
  const { loading, menus, currentMenu, setCurrentMenu } = globalStore;
  return (
    <SideNav>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          style={{
            borderRadius: 30,
            backgroundColor: theme.colors.background,
          }}
        />
      ) : (
        <Image
          src={profile_image}
          alt="profile"
          width={150}
          height={150}
          priority={true}
        />
      )}
      {menus.map((menu: Menu) => {
        const prop = { current: menu.title === currentMenu };
        return (
          <SideTitle key={menu.title}>
            <Menu targetId={menu.title}>
              <SideTitleH1 {...prop} onClick={() => setCurrentMenu(menu.title)}>
                {menu.title}
              </SideTitleH1>
            </Menu>
          </SideTitle>
        );
      })}
    </SideNav>
  );
});
export default SideNavBar;

const SideNav = styled.aside`
  position: fixed;
  padding: 30px;
  width: 210px;
  border-right: ${() => theme.colors.background} 1px solid;
  height: 100%;
  li {
    list-style: none;
  }
  h1 {
    font-size: 24px;
  }
  img {
    margin-bottom: 20px;
    border-radius: 30px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SideTitle = styled.li``;
const SideTitleH1 = styled.h1.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  color: ${(prop: any) => (prop?.current ? theme.colors.gray9 : "#000000")};
`;
