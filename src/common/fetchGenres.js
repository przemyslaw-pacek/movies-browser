import axios from "axios";
import { url_base, url_key } from "./api";

export const fetchGenres = () =>
  axios
    .get(`${url_base}/genre/movie/list${url_key}`)
    .then((response) => response.data.genres);
