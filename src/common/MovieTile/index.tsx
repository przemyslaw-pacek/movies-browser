import { useScreenWidth } from "../useScreenWidth";
import { useState } from "react";
import { toMovie } from "../../core/routes";
import {
  Content,
  Image,
  Opinion,
  Rating,
  Tag,
  Tags,
  Title,
  Vector,
  Votes,
  Subtitle,
  MovieNavLink,
} from "./styled";
import star from "./star.svg";
import { Tile } from "../../core/types";

export const MovieTile = ({
  id,
  image,
  title,
  role,
  year,
  genres,
  rating,
  votes,
}: Tile) => {
  const isLargeScreen = useScreenWidth();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <MovieNavLink to={toMovie(id)}>
      {image && (
        <Image
          src={`https://image.tmdb.org/t/p/${
            isLargeScreen ? "w342" : "w154"
          }${image}`}
          alt={title}
          $hidden={!isImageLoaded}
          onLoad={() => setIsImageLoaded(true)}
        />
      )}
      {!isImageLoaded && <Image as="div" $noImage />}
      <Content>
        <Title>{title}</Title>

        {role ? (
          <Subtitle>
            {role} {year && `(${new Date(year).getFullYear()})`}
          </Subtitle>
        ) : (
          year && <Subtitle>{new Date(year).getFullYear()}</Subtitle>
        )}

        {genres && (
          <Tags>
            {genres.map((genre) => (
              <Tag key={genre}>{genre}</Tag>
            ))}
          </Tags>
        )}

        <Opinion>
          {votes ? (
            <>
              <Vector src={star} alt="star" />
              <Rating>{rating && rating.toFixed(1).replace(".", ",")}</Rating>
              <Votes>
                {votes.toLocaleString(undefined, {
                  useGrouping: true,
                })}
                {votes === 1 ? " vote" : " votes"}
              </Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Opinion>
      </Content>
    </MovieNavLink>
  );
};
