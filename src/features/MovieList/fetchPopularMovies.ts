import { fetchData } from "../../common/fetchData";

export const fetchPopularMovies = (currentPage: number) =>
  fetchData("movie/popular", { page: currentPage });
