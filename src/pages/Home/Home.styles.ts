import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 32px 56px 56px 56px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 24px 16px;
  }
`;

export const SidebarWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SortToggle = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  gap: 4px;
  margin-left: auto;

  svg {
    color: ${({ theme }) => theme.colors.accent.medium};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.medium};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.neutrals.extraLight};
    padding: 4px 8px;

    svg {
      color: ${({ theme }) => theme.colors.neutrals.extraLight};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.accent.medium};
  }
`;

export const ControlsWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    padding: 0 56px 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const SortBar = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  gap: 8px;
`;
