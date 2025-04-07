import { ChevronDown, X } from "lucide-react";
import {
  ButtonStyled,
  ContainerStyled,
  DropdownStyled,
  ListStyled,
  OptionStyled,
  SelectedStyled,
  ClearButtonStyled,
  LabelStyled,
} from "./DropdownFilter.styles";
import { useState } from "react";

interface DropdownFilterProps {
  label: string;
  options: string[];
  selected: string[];
  onSelect: (option: string) => void;
  onClear: () => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  selected,
  onSelect,
  onClear,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <ContainerStyled>
      {!selected.length ? (
        <ButtonStyled onClick={toggle} isOpen={open}>
          <LabelStyled>{label}</LabelStyled>
          <ChevronDown size={16} />
        </ButtonStyled>
      ) : (
        <SelectedStyled>
          <span>{selected.join(", ")}</span>
          <ClearButtonStyled onClick={onClear}>
            <X size={16} />
          </ClearButtonStyled>
        </SelectedStyled>
      )}

      {open && (
        <DropdownStyled>
          <ListStyled>
            {options.map((option) => (
              <OptionStyled key={option} onClick={() => onSelect(option)}>
                {option}
              </OptionStyled>
            ))}
          </ListStyled>
        </DropdownStyled>
      )}
    </ContainerStyled>
  );
};

export default DropdownFilter;
