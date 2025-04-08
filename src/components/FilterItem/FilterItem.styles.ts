import styled from "styled-components";

export const ItemStyled = styled.div<{ selected: boolean }>`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  padding: 8px 0;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.dark};
  }
`;

export const ItemSelectedStyled = styled.button<{ selected: boolean }>`
  border-radius: 8px;
  background-color: ${({ theme, selected }) =>
    selected ? `${theme.colors.accent.light}0D` : "transparent"};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.accent.dark : theme.colors.neutrals.extraLight};
  color: ${({ theme }) => theme.colors.accent.dark};
  padding: 8px 12px;
  text-align: left;

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  }
`;
