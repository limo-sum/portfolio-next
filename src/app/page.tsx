"use client";

import { styled } from "styled-components";
import Intro from "./components/intro";
import Works from "./components/works";
import Projects from "./components/projects";
import Educations from "./components/educations";
import SideNavBar from "./sidenav";
import NavBar from "./nav";
import { observer } from "mobx-react";
import ScrollTopButton from "./components/common/scrollTop";

const Home = observer(() => {
  return (
    <Main>
      <NavBar />
      <Contents>
        <SideNavBar />
        <Components>
          <Intro />
          <Works />
          <Projects />
          <Educations />
        </Components>
      </Contents>
      <ScrollTopButton />
    </Main>
  );
});

export default Home;

const Main = styled.section``;
const Contents = styled.div`
  margin-top: 52px;
  display: flex;
`;
const Components = styled.section`
  margin-left: 220px;
  display: block;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
