import { useScreenWidth } from '../../../common/hooks/useScreenWidth';
import star from '../../../images/star.svg';
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
    Year
} from './styled';
import { useMovieDetails } from '../useMovieDetails';

const Details = () => {
    const isLargeScreen = useScreenWidth();
    const { movieDetails } = useMovieDetails();
    const movie = movieDetails.data;

    return (
        <Tile>
            {movie?.poster_path
                ? <Image src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w342" : "w154"}${movie.poster_path}`} alt={movie?.title}/>
                : <Image $noImage />
            }
            <Content>
                <Title>{movie?.title}</Title>
                <Year>
                    {movie?.release_date
                        ? (new Date(movie.release_date).getFullYear())
                        : null
                    }
                </Year>
                <Production>
                    <div>
                        <Info>Production:</Info>
                        {movie?.production_countries
                            ? isLargeScreen
                                ? movie.production_countries.map((production) => production.name).join(", ")
                                : movie.production_countries.map((production) => production.iso_3166_1).join(", ")
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Release date:</Info>
                        {movie?.release_date
                            ? (new Date(movie.release_date).toLocaleDateString())
                            : "Unknown"
                        }
                    </div>
                </Production>
                <Tags>
                    {Array.isArray(movie?.genres) && movie.genres.length > 0
                        ? movie.genres.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)
                        : null
                    }
                </Tags>
                {movie?.vote_average
                    ? <Opinion>
                        <Rating>
                            <Vector src={star} alt="star" />
                            <Text>{movie.vote_average.toFixed(1).replace(".", ",")}</Text>
                        </Rating>
                        <Ten>/ 10</Ten>
                        <Votes>
                            {movie.vote_count?.toLocaleString(undefined, {
                                useGrouping: true,
                            })}
                            {movie.vote_count === 1
                                ? " vote"
                                : " votes"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <NoVotes> No votes yet</NoVotes>
                    </Opinion>
                }
            </Content>
            <Description>{movie?.overview}</Description>
        </Tile>
    )
};

export default Details;