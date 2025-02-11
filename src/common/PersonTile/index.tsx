import { useState } from "react";
import { toPerson } from "../../core/routes";
import {
  Description,
  Grid,
  PersonNavLink,
  StyledImage,
  StyledSubtitle,
  StyledTitle,
} from "./styled";
import { Tile } from "../../core/types";

export const PersonTile = ({ id, image, title, subtitle }: Tile) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <PersonNavLink to={toPerson(id)}>
      <Grid>
        {image && (
          <StyledImage
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt={title}
            $hidden={!isImageLoaded}
            onLoad={() => setIsImageLoaded(true)}
          />
        )}
        {!isImageLoaded && <StyledImage as="div" $noImage />}
        <Description>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </Description>
      </Grid>
    </PersonNavLink>
  );
};
