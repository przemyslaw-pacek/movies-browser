import { useQueryParameter } from "../queryParameters";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "./fetchSearchResults";
import { fetchGenres } from "../fetchData";
import { Container } from "../Container";
import { Content, Grid, MainTitle } from "./styled";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { NoResults } from "./NoResults";
import { MovieTile } from "../MovieTile";
import { PersonTile } from "../PersonTile";
import { Pagination } from "../Pagination";
import { Movie, Person } from "../../core/types";

export const SearchResults = () => {
  const query = useQueryParameter("query");
  const [isLoadingDebounce, setIsLoadingDebounce] = useState(false);

  const location = useLocation();
  const isMoviesPage = location.pathname.startsWith("/movies");
  const page = new URLSearchParams(location.search).get("page");
  const currentPage = page ? parseInt(page) : 1;

  useEffect(() => {
    if (query) {
      setIsLoadingDebounce(true);

      const debounceTimeout = setTimeout(() => {
        setIsLoadingDebounce(false);
      }, 500);

      return () => clearTimeout(debounceTimeout);
    }
  }, [query]);

  const {
    isLoading: isLoadingQuery,
    error,
    data: searchResults,
  } = useQuery({
    queryKey: ["results", query, isMoviesPage, currentPage],
    queryFn: () => fetchSearchResults({ query, isMoviesPage, currentPage }),
    retry: false,
  });

  const isLoading = isLoadingDebounce || isLoadingQuery;
  const search_quantity = searchResults?.total_results;
  const search_list = searchResults?.results;

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    retry: false,
  });

  return (
    <>
      {isLoading ? (
        <Container>
          <MainTitle>Search results for "{query}"</MainTitle>
          <Loading />
        </Container>
      ) : error ? (
        <Error />
      ) : search_quantity === 0 ? (
        <NoResults />
      ) : isMoviesPage ? (
        <Container>
          <MainTitle>
            Search results for "{query}" ({search_quantity})
          </MainTitle>
          <Content>
            {search_list.map((movie: Movie) => (
              <MovieTile
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                genres={movie.genre_ids.map(
                  (number) =>
                    genres.find(
                      (genre: { id: number; name: string }) =>
                        genre.id === number
                    ).name
                )}
                rating={movie.vote_average}
                votes={movie.vote_count}
              />
            ))}
          </Content>
          <Pagination />
        </Container>
      ) : (
        <Container>
          <MainTitle>
            Search results for "{query}" ({search_quantity})
          </MainTitle>
          <Grid>
            {search_list.map((person: Person) => (
              <PersonTile
                key={person.id}
                id={person.id}
                image={person.profile_path}
                title={person.original_name}
              />
            ))}
          </Grid>
          <Pagination />
        </Container>
      )}
    </>
  );
};
