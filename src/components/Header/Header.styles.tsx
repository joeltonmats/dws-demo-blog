import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 1024px) {
    padding: 16px 56px;
  }
`;

export const LogoStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1.25rem;
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors.neutrals.extraDark};
    font-size: 0.875rem;
    font-weight: normal;
  }
`;

export const SearchWrapper = styled.div`
  align-items: center;
  display: none;
  gap: 8px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SearchInputStyled = styled.input`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.medium};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  outline: none;
  padding: 6px 12px;
`;

export const SearchButtonStyled = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  cursor: pointer;
  display: flex;
`;
