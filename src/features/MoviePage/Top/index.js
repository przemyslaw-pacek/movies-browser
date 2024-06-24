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
    BlackBar
} from './styled';
import star from '../../../images/star.svg';
import plexa from "../../../images/plexa.png";
import { useMovieDetails } from '../useMovieDetails';
import { useEffect, useState } from 'react';

const Top = () => {
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    const [isPosterLoaded, setIsPosterLoaded] = useState(false);

    useEffect(() => {
        if (movie?.backdrop_path) {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
            img.onload = () => setIsPosterLoaded(true);
        }
    }, [movie?.backdrop_path]);

    return movie?.backdrop_path && isPosterLoaded && (
        <BlackBar>
            <Wrapper>
                <Poster src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                <Plexa src={plexa} />
                <MainInfo>
                    <MainTitle>{movie?.title}</MainTitle>

                    {movie?.vote_average
                        ? <Opinion>
                            <Rating>
                                <Vector src={star} alt="" />
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
                        : <Opinion>
                            <Votes>No votes yet</Votes>
                        </Opinion>
                    }

                </MainInfo>
            </Wrapper>
        </BlackBar>
    )
};

export default Top;