import axios from "axios";
const MY_ACCESS_KEY = "BUqEmomTG7T1vLBnVUi4F4sAZAHb-r9RCsxNJ7SWWvI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${MY_ACCESS_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";


async function fetchPhotos(
  searchTerm: SearchTerm,
  page: Page
):Promise<ImageObjResponseType> {
  const result = await axios.get("/search/photos", {
    params: {
      auto: "format",
      page: page,
      per_page: 21,
      query: searchTerm,
    },
  });
  return result.data;
}

export default fetchPhotos;
