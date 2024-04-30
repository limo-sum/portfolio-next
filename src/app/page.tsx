"use client";

import Intro from "./components/intro";
import Works from "./components/works";
import Projects from "./components/projects";
import Educations from "./components/educations";
import NavBar from "./nav";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { getEducations, getProjects, getWorks } from "@/fetch";
import useStore from "@/store";

const Home = observer(() => {
  const { globalStore } = useStore();
  const { loading, setLoading, setWorks, setProjects, setEducations } =
    globalStore;

  useEffect(() => {
    onload();
  }, []);

  const onload = async () => {
    setLoading(true);
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    const w = await getWorks();
    setWorks(w);
    const p = await getProjects();
    setProjects(p);
    const e = await getEducations();
    setEducations(e);

    setLoading(false);
  };

  return (
    <div className="box-border mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0">
      {loading && (
        <div className="fixed top-0 left-0 z-10 bg-white h-full w-full">
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <div
              className="content-center h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></div>
          </div>
        </div>
      )}
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
