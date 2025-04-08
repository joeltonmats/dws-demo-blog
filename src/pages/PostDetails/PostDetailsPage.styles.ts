import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #efc4b4 0%, #00bfc1 100%);
  padding: 16px;

  @media (min-width: 1024px) {
    padding: 56px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 56px;
  }
`;

export const SideColumn = styled.div`
  flex-shrink: 0;

  @media (min-width: 1024px) {
    width: 120px;
  }
`;

export const MainColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
