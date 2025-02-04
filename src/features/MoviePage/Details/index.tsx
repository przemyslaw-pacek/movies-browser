import { useScreenWidth } from "../../../common/useScreenWidth";
import star from "../../../common/MovieTile/star.svg";
import {
  Content,
  Description,
  Image,
  Info,
  Opinion,
  Production,
  Rating,
  Tag,
  Tags,
  Tile,
  Title,
  Vector,
  Votes,
  Year,
} from "./styled";
import { Movie } from "../../../core/types";

export const Details = ({ movie }: { movie: Movie }) => {
  const isLargeScreen = useScreenWidth();

  return (
    <Tile>
      {movie.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w342" : "w154"}${
            movie.poster_path
          }`}
          alt={movie.title}
        />
      ) : (
        <Image as="div" $noImage />
      )}
      <Content>
        <Title>{movie.title}</Title>
        <Year>
          {movie.release_date && new Date(movie.release_date).getFullYear()}
        </Year>
        <Production>
          <div>
            {movie.production_countries.length > 0 && (
              <>
                <Info>Production:</Info>
                {isLargeScreen
                  ? movie.production_countries
                      .map((production) => production.name)
                      .join(", ")
                  : movie.production_countries
                      .map((production) => production.iso_3166_1)
                      .join(", ")}
              </>
            )}
          </div>
          <div>
            {movie.release_date && (
              <>
                <Info>Release date:</Info>
                {new Date(movie.release_date).toLocaleDateString()}
              </>
            )}
          </div>
        </Production>
        {movie.genres.length > 0 && (
          <Tags>
            {movie.genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
        )}
        <Opinion>
          {movie.vote_average ? (
            <>
              <Vector src={star} alt="star" />
              <Rating>{movie.vote_average.toFixed(1).replace(".", ",")}</Rating>
              <Votes $hidden>/ 10</Votes>
              <Votes>
                {movie.vote_count.toLocaleString(undefined, {
                  useGrouping: true,
                })}
                {movie.vote_count === 1 ? " vote" : " votes"}
              </Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Opinion>
      </Content>
      <Description>{movie.overview}</Description>
    </Tile>
  );
};
