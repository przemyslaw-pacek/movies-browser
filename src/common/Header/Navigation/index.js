import { toMovies, toPeople } from "../../config/routes";
import { LogoIcon, LogoText, LogoWrapper, NavSection, StyledNavLink, StyledNavigation } from "./styled";

export const Navigation = () => (
    <StyledNavigation>
        <LogoWrapper to={toMovies()}>
            <LogoIcon />
            <LogoText>Movies Browser</LogoText>
        </LogoWrapper>
        <NavSection>
            <li><StyledNavLink to={toMovies()}>MOVIES</StyledNavLink></li>
            <li><StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink></li>
        </NavSection>
    </StyledNavigation>
);