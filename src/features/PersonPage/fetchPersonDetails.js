import { fetchData } from "../../common/fetchData";

export const fetchPersonDetails = (id) => fetchData(`person/${id}`);
export const fetchPersonCredits = (id) =>
  fetchData(`person/${id}/movie_credits`);
