import { observable, action } from "mobx";

export const globalStore = observable({
  menus: [
    { title: "INTRO" },
    { title: "PROJECTS" },
    { title: "WORKS" },
    { title: "EDUCATIONS" },
  ],
  currentMenu: "INTRO",
  loading: true,

  intro: {
    name: "",
    email: "",
    introduction: [],
    skills: [],
  },
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
  setPortfolio: action(async (m: any) => {
    globalStore.intro = m.intro;
    globalStore.works = m.works;
    globalStore.projects = m.projects;
    globalStore.educations = m.educations;
  }),
});
