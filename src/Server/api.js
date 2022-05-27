// request da api com id
const api = "https://api.kanye.rest/";

async function getApiById() {
  const response = await fetch(api)
    .then((data) => data.json());
  return response;
};

export default getApiById;
