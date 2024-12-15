import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "./fetchPopularMovies";
import { fetchGenres } from "../../common/fetchGenres";
import { MainTitle, Content } from "./styled";
import { MovieTile } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const MovieList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    isLoading,
    error,
    data: movies,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => fetchPopularMovies(currentPage),
    retry: false,
  });

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    retry: false,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Container>
          <Content>
            <MainTitle>Popular movies</MainTitle>
            {movies.map((movie) => (
              <MovieTile
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                genres={movie.genre_ids.map(
                  (number) =>
                    genres && genres.find((item) => item.id === number).name
                )}
                rating={movie.vote_average}
                votes={movie.vote_count}
              />
            ))}
          </Content>
          <Pagination />
        </Container>
      )}
    </>
  );
};
