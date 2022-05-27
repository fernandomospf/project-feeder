// request da api
const api = "https://api.kanye.rest/";

async function getApi() {
  const resp = await fetch(api)
    .then((data) => data.json());
  return resp;
};

export default getApi;
