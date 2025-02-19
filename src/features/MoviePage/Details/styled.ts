import styled, { css } from "styled-components";
import no_poster from "../../../common/MovieTile/no_poster.svg";

export const Tile = styled.article`
  width: 100%;
  min-height: 544px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.color.heater};
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    min-height: unset;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px;
  }
`;

export const Image = styled.img<{
  $noImage?: boolean;
  $hidden?: boolean;
}>`
  width: 312px;
  height: 464px;
  margin: 0 40px 20px 0;
  float: left;
  border-radius: 5px;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-image: url("${no_poster}");
      background-color: ${({ theme }) => theme.color.silver};
      background-size: 32%;
      background-position: center;
      background-repeat: no-repeat;
    `}

  @media(max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 114px;
    height: 169px;
    margin: 0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: calc(100% - 152px);
  }
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-top: 12px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 9px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-weight: 500;
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 8px;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 13px;
    margin-bottom: 2px;
  }
`;

export const Production = styled.div`
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 12px;
  }
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    margin-right: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    display: none;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 20px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    gap: 8px;
    margin: 4px 0 8px 0;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.color.mystic};
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Opinion = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    margin-top: 8px;
  }
`;

export const Vector = styled.img`
  transform: translateY(12%);

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 16px;
  }
`;

export const Rating = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Votes = styled.span<{
  $hidden?: boolean;
}>`
  font-size: 14px;
  padding-right: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 12px;

    ${({ $hidden }) =>
      $hidden &&
      css`
        display: none;
      `}
  }
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-top: 20px;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 17px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 14px;
    margin-top: -6px;
  }
`;
