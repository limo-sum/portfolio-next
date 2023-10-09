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

  setMenus: action(async (m: never[]) => {
    globalStore.menus = m;
  }),
  setCurrentMenu: action(async (m: string) => {
    globalStore.currentMenu = m;
  }),
  setLoading: action(async (m: boolean) => {
    globalStore.loading = m;
  }),
});
