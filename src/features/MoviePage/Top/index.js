import React, { useState, useEffect } from "react";
import {
  Wrapper,
  MainInfo,
  MainTitle,
  Opinion,
  Rating,
  Ten,
  Votes,
  Text,
  Vector,
  Poster,
  Plexa,
  BlackBar,
} from "./styled";
import star from "../../../common/MovieTile/star.svg";
import plexa from "./plexa.png";

export const Top = ({ movie }) => {
  const [isPosterLoaded, setisPosterLoaded] = useState(false);

  const handleBackdropLoad = () => {
    setisPosterLoaded(true);
  };

  useEffect(() => {
    setisPosterLoaded(false);
  }, [movie.backdrop_path]);

  return movie.backdrop_path ? (
    <BlackBar>
      <Wrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          onLoad={handleBackdropLoad}
          style={{ opacity: isPosterLoaded ? 1 : 0 }}
        />
        <Plexa src={plexa} alt="background" />
        <MainInfo>
          <MainTitle>{movie?.title}</MainTitle>

          {movie.vote_average ? (
            <Opinion>
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
            </Opinion>
          ) : (
            <Opinion>
              <Votes>No votes yet</Votes>
            </Opinion>
          )}
        </MainInfo>
      </Wrapper>
    </BlackBar>
  ) : null;
};
