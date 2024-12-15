import axios from "axios";
import { url_base, url_key } from "../../common/api";

export const fetchPopularMovies = (currentPage) =>
  axios
    .get(`${url_base}/movie/popular${url_key}&page=${currentPage}`)
    .then((response) => response.data.results);
