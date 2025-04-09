import styled from "styled-components";

export const ContainerStyled = styled.div`
  flex-shrink: 0;
  position: relative;
  width: auto;
`;

export const ButtonStyled = styled.button<{ $isOpen: boolean }>`
  align-items: center;
  background-color: ${({ theme, $isOpen }) =>
    $isOpen
      ? `${theme.colors.secondary.medium}0D`
      : theme.colors.neutrals.lightest};
  border-radius: 42px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary.medium};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.caption};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  height: 32px;
  justify-content: space-between;
  min-width: 110px;
  padding: 0 12px;
  width: auto;
`;

export const LabelStyled = styled.span`
  margin-right: 4px;
`;

export const DropdownStyled = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 16px;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 10;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const OptionStyled = styled.li<{ $selected?: boolean }>`
  align-items: center;
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary.light : theme.colors.neutrals.extraDark};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  justify-content: space-between;
  padding: 8px 0;
`;

export const SelectedStyled = styled.div`
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.secondary.medium}0D`};
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.secondary.medium};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.typography.sizes.caption};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  gap: 8px;
  height: auto;
  justify-content: space-between;
  min-height: 32px;
  padding: 0 12px;
`;

export const SelectedItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 0;
`;

export const SelectedItemStyled = styled.span`
  background-color: transparent;
`;

export const ClearButtonStyled = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary.medium};
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  padding: 0;
`;
