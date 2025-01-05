import { fetchData } from "../../common/fetchData";

export const fetchPopularPeople = (currentPage: number) =>
  fetchData("person/popular", { page: currentPage });
