import { Title, Grid } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import { Person } from "../../../core/types";

export const Crew = ({ movieCrew }: { movieCrew: Person[] }) =>
  movieCrew && movieCrew.length !== 0 ? (
    <Grid>
      <Title>Crew</Title>
      {movieCrew.map((person) => (
        <PersonTile
          key={person.credit_id}
          id={person.id}
          image={person.profile_path}
          title={person.name}
          subtitle={person.job}
        />
      ))}
    </Grid>
  ) : null;
