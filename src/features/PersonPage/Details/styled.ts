import styled, { css } from "styled-components";
import no_profile from "../../../common/PersonTile/no_profile.svg";

export const Tile = styled.article`
  min-height: 548px;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.color.heater};
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    min-height: 360px;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    min-height: 292px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    display: flex;
    flex-wrap: wrap;
    min-height: 195px;
    padding: 16px;
    gap: 16px;
  }
`;

export const Image = styled.img<{
  $noImage?: boolean;
  $hidden?: boolean;
}>`
  width: 312px;
  height: 468px;
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
      background-image: url("${no_profile}");
      background-color: ${({ theme }) => theme.color.silver};
      background-size: 32%;
      background-position: center;
      background-repeat: no-repeat;
    `}

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    width: 198px;
    height: 297px;
    margin: 0 32px 4px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 162px;
    height: 243px;
    margin: 0 24px 4px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    width: 108px;
    height: 162px;
    margin: 0;
  }
`;

export const PersonalData = styled.div`
  flex: 1;
`;

export const Name = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    font-size: 25px;
    margin: 6px 0 20px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-weight: 500;
    font-size: 14px;
    margin: 4px 0 16px 0;
  }
`;

export const Birth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 12px;
    gap: 6px;
  }
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    margin-right: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    margin-right: 4px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 14px;
    margin-top: 0;
  }
`;
