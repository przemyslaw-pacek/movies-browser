import { useState, useEffect } from "react";
import {
  Wrapper,
  MainInfo,
  MainTitle,
  Opinion,
  Rating,
  Votes,
  Vector,
  Poster,
  Plexa,
  BlackBar,
} from "./styled";
import star from "../../../common/MovieTile/star.svg";
import plexa from "./plexa.png";
import { Movie } from "../../../core/types";

export const Top = ({ movie }: { movie: Movie }) => {
  const url_img = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = url_img;
    img.onload = () => setIsPosterLoaded(true);
  }, [movie.backdrop_path, url_img]);

  return isPosterLoaded ? (
    <BlackBar>
      <Wrapper>
        <Poster src={url_img} alt={movie.title} />
        <Plexa src={plexa} alt="background" />
        <MainInfo>
          <MainTitle>{movie.title}</MainTitle>
          <Opinion>
            {movie.vote_average ? (
              <>
                <Vector src={star} alt="star" />
                <Rating>
                  {movie.vote_average.toFixed(1).replace(".", ",")}
                </Rating>
                <Votes>/ 10</Votes>
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
        </MainInfo>
      </Wrapper>
    </BlackBar>
  ) : null;
};
