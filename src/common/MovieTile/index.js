import {
    Content,
    Image,
    Opinion,
    Rating,
    Tag,
    Tags,
    Text,
    Title,
    Vector,
    Votes,
    Subtitle,
    MovieNavLink,
    NoVotes
} from './styled';
import star from '../../images/star.svg';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { toMovie } from '../config/routes';

export const MovieTile = ({ id, image, title, role, year, genres, rating, votes }) => {
    const isLargeScreen = useScreenWidth();

    return (
        <MovieNavLink to={toMovie({ id })}>
            {image
                ? <Image src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w342" : "w154"}${image}`} alt={title} />
                : <Image $noImage />
            }
            <Content>
                <Title>{title}</Title>

                <Subtitle>
                    {role
                        ? (year
                            ? `${role} (${new Date(year).getFullYear()})`
                            : role)
                        : (year
                            ? (new Date(year).getFullYear())
                            : "")
                    }
                </Subtitle>

                <Tags>
                    {genres
                        ? genres.map((genre) =>
                            <Tag key={genre}>{genre}</Tag>)
                        : ""
                    }
                </Tags>

                {votes
                    ? <Opinion>
                        <Rating>
                            <Vector src={star} alt="star"/>
                            <Text>{rating.toFixed(1).replace(".", ",")}</Text>
                        </Rating>
                        <Votes>
                            {votes.toLocaleString(undefined, {
                                useGrouping: true,
                            })}
                            {votes === 1
                                ? " vote"
                                : " votes"}
                        </Votes>
                    </Opinion>
                    : <Opinion>
                        <NoVotes>No votes yet</NoVotes>
                    </Opinion>
                }

            </Content>
        </MovieNavLink>
    )
};