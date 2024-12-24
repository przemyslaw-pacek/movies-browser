import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../../../common/fetchData";
import { Title, Grid } from "./styled";
import { MovieTile } from "../../../common/MovieTile";

export const Cast = ({ personCast }) => {
  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    retry: false,
  });

  return personCast && personCast.length !== 0 ? (
    <Grid>
      <Title>Movies - Cast ({personCast.length})</Title>
      {personCast.map((movie) => (
        <MovieTile
          key={movie.credit_id}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          role={movie.character}
          year={movie.release_date}
          genres={movie.genre_ids.map(
            (number) => genres && genres.find((item) => item.id === number).name
          )}
          rating={movie.vote_average}
          votes={movie.vote_count}
        />
      ))}
    </Grid>
  ) : null;
};
