import { observable, action } from "mobx";

export const globalStore = observable({
  menus: [
    { title: "INTRO" },
    { title: "WORKS" },
    { title: "PROJECTS" },
    { title: "EDUCATIONS" },
  ],
  currentMenu: "INTRO",
  loading: true,

  intro: {},
  works: [],
  projects: [],
  educations: [],

  setMenus: action(async (m: never[]) => {
    globalStore.menus = m;
  }),
  setCurrentMenu: action(async (m: string) => {
    globalStore.currentMenu = m;
  }),
  setLoading: action(async (m: boolean) => {
    globalStore.loading = m;
  }),
  setIntro: action(async (m: any) => {
    globalStore.intro = m;
  }),
  setWorks: action(async (m: never[]) => {
    globalStore.works = m;
  }),
  setProjects: action(async (m: never[]) => {
    globalStore.projects = m;
  }),
  setEducations: action(async (m: never[]) => {
    globalStore.educations = m;
  }),
});
