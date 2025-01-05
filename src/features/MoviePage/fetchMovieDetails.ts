import { fetchData } from "../../common/fetchData";

export const fetchMovieDetails = (id: number) => fetchData(`movie/${id}`);
export const fetchMovieCredits = (id: number) =>
  fetchData(`movie/${id}/credits`);
