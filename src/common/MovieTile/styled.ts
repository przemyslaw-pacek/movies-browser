import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import no_poster from "./no_poster.svg";

export const MovieNavLink = styled(NavLink)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  transition: transform ease 300ms;
  position: relative;
  width: 100%;
  padding: 16px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.color.heater};
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translate(0, -10px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    flex-direction: row;
    width: 100%;
    min-height: 201px;
    gap: 16px;
  }
`;

export const Image = styled.img<{
  $noImage?: boolean;
}>`
  border-radius: 5px;

  ${({ $noImage }) =>
    $noImage &&
    css`
      padding-top: calc(100% * 434 / 292);
      background-image: url("${no_poster}");
      background-color: ${({ theme }) => theme.color.silver};
      background-size: 32%;
      background-position: center;
      background-repeat: no-repeat;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    width: 114px;
    height: 169px;
    padding-top: unset;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.header`
  margin-top: 16px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 16px;
    margin: 0;
  }
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 13px;
    margin-bottom: 0;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 0;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    margin: 6px 0 8px;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.color.mystic};
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Opinion = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    align-items: end;
    margin-top: 6px;
    gap: 8px;
  }
`;

export const Vector = styled.img`
  transform: translateY(-8%);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    width: 16px;
  }
`;

export const Rating = styled.div`
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 13px;
  }
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 13px;
  }
`;
