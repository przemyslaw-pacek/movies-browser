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
  const url_img = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    if (movie.backdrop_path) {
      const img = new Image();
      img.src = url_img;
      img.onload = () => setIsPosterLoaded(true);
    }
  }, [movie.backdrop_path, url_img]);

  return isPosterLoaded ? (
    <BlackBar>
      <Wrapper>
        <Poster src={url_img} alt={movie.title} />
        <Plexa src={plexa} alt="background" />
        <MainInfo>
          <MainTitle>{movie.title}</MainTitle>
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
