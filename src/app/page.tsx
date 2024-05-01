"use client";

import Intro from "./components/intro";
import Works from "./components/works";
import Projects from "./components/projects";
import Educations from "./components/educations";
import NavBar from "./nav";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { getPortfolio } from "@/fetch";
import useStore from "@/store";
import Loading from "./components/common/loading";

const Home = observer(() => {
  const { globalStore } = useStore();
  const { loading, setLoading, setPortfolio } = globalStore;

  useEffect(() => {
    onload();
  }, []);

  const onload = async () => {
    setLoading(true);
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    const p = await getPortfolio();
    setPortfolio(p);

    setLoading(false);
  };

  return (
    <div className="box-border mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0 select-none cursor-default">
      {loading && <Loading />}
      <div className="lg:grid lg:gap-4 lg:grid-cols-3">
        <NavBar />
        <article className="col-span-2 py-24">
          <Intro />
          <Projects />
          <Works />
          <Educations />
        </article>
      </div>
    </div>
  );
});

export default Home;
