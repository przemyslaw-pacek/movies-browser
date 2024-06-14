import {
    Name,
    PersonalData,
    Description,
    Image,
    Birth,
    Info,
    Tile
} from './styled';
import { useScreenWidth } from '../../../../common/hooks/useScreenWidth';
import { usePersonDetails } from '../../usePersonDetails';

export const PersonDetailsTile = () => {
    const isLargeScreen = useScreenWidth();
    const { personDetails } = usePersonDetails();
    const person = personDetails.data;

    return (
        <Tile>
            {person?.profile_path
                ? <Image src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w500" : "w185"}${person.profile_path}`} />
                : <Image $noImage />
            }
            <PersonalData>
                <Name>{person?.name}</Name>
                <Birth>
                    <div>
                        <Info>
                            {isLargeScreen ? "Date of birth: " : "Birth: "}
                        </Info>
                        {person?.birthday
                            ? (new Date(person.birthday)).toLocaleDateString()
                            : "Unknown"
                        }
                    </div>
                    <div>
                        <Info>Place of birth: </Info>
                        {person?.place_of_birth
                            ? person.place_of_birth
                            : "Unknown"
                        }
                    </div>
                </Birth>
            </PersonalData>
            <Description>
                {person?.biography}
            </Description>
        </Tile >
    )
};