import { fetchData } from "../../common/fetchData";

export const fetchPopularPeople = (currentPage) =>
  fetchData("person/popular", { page: currentPage }).then(
    (data) => data.results
  );
