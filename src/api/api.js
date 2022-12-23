const ping = async () => {
  const url = process.env.REACT_APP_API_URL;
  fetch(url);
};

const getSeries = async () => {
  const url = `${process.env.REACT_APP_API_URL}/series`;
  const data = await fetch(url).then((r) => r.json());
  return data;
};

const api = {
  ping,
  getSeries,
};

export default api;
