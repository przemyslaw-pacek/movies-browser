import { fetchData } from "../../common/fetchData";

export const fetchPopularMovies = (currentPage) =>
  fetchData("movie/popular", { page: currentPage });
