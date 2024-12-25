import { fetchData } from "../fetchData";

export const fetchSearchResults = (query, isMoviesPage, currentPage) =>
  fetchData(`search/${isMoviesPage ? "movie" : "person"}`, {
    query,
    page: currentPage,
  });
