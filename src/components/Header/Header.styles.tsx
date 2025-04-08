import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background: linear-gradient(180deg, #fbe2e7 0%, #d4f4ef 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutrals.light}`};
  display: flex;
  height: 72px;
  justify-content: space-between;
  left: 0;
  padding: 0 16px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;

  @media (min-width: 1024px) {
    padding: 0 56px;
  }
`;

export const LogoStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1.25rem;
  font-weight: bold;

  span {
    font-weight: normal;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutrals.extraDark};
  }
`;

export const SearchDesktopWrapper = styled.div`
  align-items: center;
  display: none;
  gap: 8px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SearchMobileIcon = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.light};
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.lightest};
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  width: 100%;
  width: 250px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.medium};
  }
`;

export const SearchButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.light};
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.lightest};
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.lightest};
  inset: 0;
  padding: 16px;
  position: fixed;
  z-index: 200;
`;

export const OverlayHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;

  button {
    border: none;
  }
`;

export const SuggestionBox = styled.div`
  margin-top: 16px;
`;

export const SuggestionItem = styled.div<{ disabled?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  padding: 8px 0;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? "inherit" : `${theme.colors.accent.light}22`};
  }

  small {
    color: ${({ theme }) => theme.colors.neutrals.medium};
    font-size: 0.75rem;
    margin-left: 8px;
  }
`;
