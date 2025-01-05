import {
  Name,
  PersonalData,
  Description,
  Image,
  Birth,
  Info,
  Tile,
} from "./styled";
import { useScreenWidth } from "../../../common/useScreenWidth";
import { Person } from "../../../core/types";

export const Details = ({ person }: { person: Person }) => {
  const isLargeScreen = useScreenWidth();

  return (
    <Tile>
      {person.profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/${isLargeScreen ? "w500" : "w185"}${
            person.profile_path
          }`}
          alt={person.name}
        />
      ) : (
        <Image as="div" $noImage />
      )}
      <PersonalData>
        <Name>{person.name}</Name>
        <Birth>
          <div>
            <Info>{isLargeScreen ? "Date of birth: " : "Birth: "}</Info>
            {person.birthday
              ? new Date(person.birthday).toLocaleDateString()
              : "Unknown"}
          </div>
          <div>
            <Info>Place of birth: </Info>
            {person.place_of_birth || "Unknown"}
          </div>
          {person.deathday && (
            <div>
              <Info>{isLargeScreen ? "Date of death: " : "Death: "}</Info>
              {new Date(person.deathday).toLocaleDateString()}
            </div>
          )}
        </Birth>
      </PersonalData>
      <Description>{person.biography}</Description>
    </Tile>
  );
};
