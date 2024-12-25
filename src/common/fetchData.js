import axios from "axios";

const url_base = "https://api.themoviedb.org/3";
const url_key = "?api_key=f72df20bf68647ff7dff3bdb20c36c7f&language=en-US";

export const fetchData = (path, params = {}) =>
  axios
    .get(`${url_base}/${path}${url_key}`, { params })
    .then((response) => response.data);

export const fetchGenres = () =>
  fetchData("genre/movie/list").then((data) => data.genres);
