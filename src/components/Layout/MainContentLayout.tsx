import styled from "styled-components";

export const MainContentLayout = styled.main`
  display: grid;
  gap: 24px;
  grid-template-columns: 280px 1fr;
  margin: 0 auto;
  max-width: 1200px;
  padding: 56px;

  @media (max-width: 1024px) {
    display: block;
    padding: 16px;
  }
`;
