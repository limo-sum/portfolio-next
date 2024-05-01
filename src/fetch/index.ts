const API_URL = "https://z70otq9zy9.execute-api.us-east-1.amazonaws.com/prod/";

const getData = async (url: string) => {
  const res = await fetch(url, { method: "GET" });
  const r = await res.json();
  if (r?.message !== "OK") return;
  return r?.data;
};
export const getPortfolio = () => getData(`${API_URL}all`);
