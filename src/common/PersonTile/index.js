import { toPerson } from '../config/routes';
import { Description, Grid, PersonNavLink, StyledImage, StyledSubtitle, StyledTitle } from './styled';

export const PersonTile = ({ id, image, title, subtitle }) => (
    <PersonNavLink to={toPerson({ id })}>
        <Grid>
            {image
                ? <StyledImage src={`https://image.tmdb.org/t/p/w185${image}`} alt={title}/>
                : <StyledImage $noImage />
            }
            <Description>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
            </Description>
        </Grid>
    </PersonNavLink>
);