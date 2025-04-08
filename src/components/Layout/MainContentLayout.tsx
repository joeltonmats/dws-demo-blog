import styled from "styled-components";

export const MainContentLayout = styled.main`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px;

  @media (max-width: 1024px) {
    display: block;
    padding: 16px;
  }
`;
