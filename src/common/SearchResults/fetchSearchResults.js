import { fetchData } from "../fetchData";

export const fetchSearchResults = (query, isMoviesPage, currentPage) => {
  const path = `search/${isMoviesPage ? "movie" : "person"}`;
  return fetchData(path, { query, page: currentPage });
};
