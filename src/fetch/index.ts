const API_URL = "https://z70otq9zy9.execute-api.us-east-1.amazonaws.com/prod/";

const getData = async (url: string) => {
  const res = await fetch(url, { method: "GET" });
  const r = await res.json();
  if (r?.message !== "OK") return;
  return r?.data;
};
export const getAll = () => getData(`${API_URL}all`);
export const getIntro = async () => await getData(`${API_URL}intro`);
export const getWorks = () => getData(`${API_URL}works`);
export const getProjects = () => getData(`${API_URL}projects`);
export const getEducations = () => getData(`${API_URL}educations`);
