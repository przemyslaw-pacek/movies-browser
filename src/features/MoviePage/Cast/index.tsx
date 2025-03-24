import { Title, Grid } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import { Person } from "../../../core/types";

export const Cast = ({ movieCast }: { movieCast: Person[] }) =>
  movieCast.length > 0 ? (
    <Grid>
      <Title>Cast</Title>
      {movieCast.map((person) => (
        <PersonTile
          key={person.credit_id}
          id={person.id}
          image={person.profile_path}
          title={person.name}
          subtitle={person.character}
        />
      ))}
    </Grid>
  ) : null;
