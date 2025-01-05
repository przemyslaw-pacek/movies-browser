import { fetchData } from "../fetchData";

interface FetchSearchResultsProps {
  query: string | null;
  isMoviesPage: boolean;
  currentPage: number;
}

export const fetchSearchResults = ({
  query,
  isMoviesPage,
  currentPage,
}: FetchSearchResultsProps) =>
  fetchData(`search/${isMoviesPage ? "movie" : "person"}`, {
    query,
    page: currentPage,
  });
