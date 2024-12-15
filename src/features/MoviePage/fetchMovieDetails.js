import axios from "axios";
import { url_base, url_key } from "../../common/api";

export const fetchMovieDetails = (id) =>
  axios
    .get(`${url_base}/movie/${id}${url_key}`)
    .then((response) => response.data);

export const fetchMovieCredits = (id) =>
  axios
    .get(`${url_base}/movie/${id}/credits${url_key}`)
    .then((response) => response.data);
