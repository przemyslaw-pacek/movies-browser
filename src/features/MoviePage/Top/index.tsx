import { useState } from "react";
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
  Placeholder,
} from "./styled";
import star from "../../../common/MovieTile/star.svg";
import plexa from "./plexa.png";
import { Movie } from "../../../core/types";

export const Top = ({ movie }: { movie: Movie }) => {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const url_img = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

  return movie.backdrop_path ? (
    <BlackBar>
      <Wrapper>
        <Plexa src={plexa} alt="background" />
        {!isPosterLoaded && <Placeholder />}
        <Poster
          src={url_img}
          alt={movie.title}
          onLoad={() => setIsPosterLoaded(true)}
        />
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
