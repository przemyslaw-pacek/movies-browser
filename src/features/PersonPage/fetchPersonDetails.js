import axios from "axios";
import { url_base, url_key } from "../../common/api";

export const fetchPersonDetails = (id) =>
  axios
    .get(`${url_base}/person/${id}${url_key}`)
    .then((response) => response.data);

export const fetchPersonCredits = (id) =>
  axios
    .get(`${url_base}/person/${id}/movie_credits${url_key}`)
    .then((response) => response.data);
