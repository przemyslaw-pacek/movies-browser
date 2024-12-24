import { fetchData } from "../../common/fetchData";

export const fetchMovieDetails = (id) => fetchData(`movie/${id}`);
export const fetchMovieCredits = (id) => fetchData(`movie/${id}/credits`);
