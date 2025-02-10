import styled from "styled-components";

export const BlackBar = styled.div`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  margin-top: -56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: -40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    margin-top: -24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  max-width: 1368px;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 40px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    margin: 24px auto;
  }
`;

export const Plexa = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 1368px;
`;

export const MainInfo = styled.div`
  color: ${({ theme }) => theme.color.white};
  bottom: 0;
  left: 0;
  position: absolute;
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    padding-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    padding-bottom: 8px;
  }
`;

export const MainTitle = styled.div`
  font-weight: 600;
  font-size: 64px;
  padding-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 48px;
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
    font-size: 36px;
    padding-bottom: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 24px;
  }
`;

export const Opinion = styled.section`
  width: 136px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: auto;
    height: auto;
  }
`;

export const Vector = styled.img`
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 24px;
    margin-right: -2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    width: 16px;
    margin-right: -4px;
  }
`;

export const Rating = styled.div`
  font-size: 30px;
  font-weight: 500;

  transform: translateY(8%);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
    font-weight: 600;
    margin-right: -3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 14px;
    margin-right: -6px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
    padding-right: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 10px;
    padding-right: 0;
  }
`;
