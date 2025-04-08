import { ItemSelectedStyled, ItemStyled } from "./FilterItem.styles";

interface FilterItemProps {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return isSelected ? (
    <ItemSelectedStyled selected={isSelected} onClick={onClick}>
      {label}
    </ItemSelectedStyled>
  ) : (
    <ItemStyled selected={isSelected} onClick={onClick}>
      {label}
    </ItemStyled>
  );
};

export default FilterItem;
