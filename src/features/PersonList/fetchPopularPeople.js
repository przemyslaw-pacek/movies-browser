import axios from "axios";
import { url_base, url_key } from "../../common/api";

export const fetchPopularPeople = (currentPage) =>
  axios
    .get(`${url_base}/person/popular${url_key}&page=${currentPage}`)
    .then((response) => response.data.results);
