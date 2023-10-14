"use client";

import { styled } from "styled-components";
import Intro from "./components/intro";
import Works from "./components/works";
import Projects from "./components/projects";
import Educations from "./components/educations";
import NavBar from "./nav";
import { observer } from "mobx-react";
import ScrollTopButton from "./components/common/scrollTop";
import { useEffect } from "react";

const Home = observer(() => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Main>
      <NavBar />
      <Components>
        <Intro />
        <Works />
        <Projects />
        <Educations />
      </Components>
      <ScrollTopButton />
    </Main>
  );
});

export default Home;

const Main = styled.section`
  margin: 0 auto;
  max-width: 1000px;
`;
const Components = styled.section`
  margin-top: 50px;
  display: block;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
