import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(key);
};

export const useReplaceQueryParameter = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();
  const isMoviesPage = pathname.startsWith("/movies");

  return ({ key, value, resetPage }) => {
    const searchParams = new URLSearchParams(search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    if (key === "query" && resetPage) {
      searchParams.set("page", "1");
    }

    const newPath = isMoviesPage
      ? value
        ? "/movies/search"
        : "/movies"
      : value
      ? "/people/search"
      : "/people";

    history.replace(`${newPath}?${searchParams.toString()}`);
  };
};
