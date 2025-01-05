import { fetchData } from "../../common/fetchData";

export const fetchPersonDetails = (id: number) => fetchData(`person/${id}`);
export const fetchPersonCredits = (id: number) =>
  fetchData(`person/${id}/movie_credits`);
