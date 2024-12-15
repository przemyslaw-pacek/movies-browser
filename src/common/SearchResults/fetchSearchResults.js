import axios from "axios";
import { url_base, url_key } from "../api";

export const fetchSearchResults = (query, isMoviesPage, currentPage) => {
  const urlParams = new URLSearchParams(url_key);

  urlParams.append("query", query);
  urlParams.append("page", currentPage);

  return axios
    .get(
      `${url_base}/search/${
        isMoviesPage ? "movie" : "person"
      }?${urlParams.toString()}`
    )
    .then((response) => response.data);
};
