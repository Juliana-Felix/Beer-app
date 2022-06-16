import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.punkapi.com/v2/beers",
});
