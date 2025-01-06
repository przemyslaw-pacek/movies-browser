import { useScreenWidth } from "../../../common/useScreenWidth";
import star from "../../../common/MovieTile/star.svg";
import {
  Content,
  Description,
  Image,
  Info,
  NoVotes,
  Opinion,
  Production,
  Rating,
  Tag,
  Tags,
  Ten,
  Text,
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
              <Rating>
                <Vector src={star} alt="star" />
                <Text>{movie.vote_average.toFixed(1).replace(".", ",")}</Text>
              </Rating>
              <Ten>/ 10</Ten>
              <Votes>
                {movie.vote_count.toLocaleString(undefined, {
                  useGrouping: true,
                })}
                {movie.vote_count === 1 ? " vote" : " votes"}
              </Votes>
            </>
          ) : (
            <NoVotes>No votes yet</NoVotes>
          )}
        </Opinion>
      </Content>
      <Description>{movie.overview}</Description>
    </Tile>
  );
};
