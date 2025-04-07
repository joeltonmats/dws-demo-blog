import styled from "styled-components";

export const ContainerStyled = styled.div`
  position: relative;
  width: 314px;
`;

export const ButtonStyled = styled.button<{ isOpen: boolean }>`
  align-items: center;
  background-color: ${({ theme, isOpen }) =>
    isOpen
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
  padding: 0 12px;
  width: 110px;
`;

export const LabelStyled = styled.span`
  margin-right: 4px;
`;

export const DropdownStyled = styled.div`
  background: white;
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

export const OptionStyled = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  padding: 8px 0;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export const SelectedStyled = styled.div`
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.secondary.medium}0D`};
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.secondary.medium};
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.caption};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  height: 32px;
  justify-content: space-between;
  padding: 0 12px;
  width: 100%;
`;

export const ClearButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary.medium};
`;
