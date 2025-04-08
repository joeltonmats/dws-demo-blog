import styled from "styled-components";

interface FilterItemProps {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}

const Item = styled.button<{ selected: boolean }>`
  border-radius: 8px;
  background-color: ${({ theme, selected }) =>
    selected ? `${theme.colors.accent.light}0D` : "transparent"};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.accent.dark : theme.colors.neutrals.extraLight};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.accent.dark : theme.colors.neutrals.darkest};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  padding: 8px 12px;
  text-align: left;
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutrals.extraLight};
    color: ${({ theme }) => theme.colors.accent.dark};
  }
`;

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <Item selected={isSelected} onClick={onClick}>
      {label}
    </Item>
  );
};

export default FilterItem;
