import { Check, ChevronDown, X } from "lucide-react";
import {
  ButtonStyled,
  ContainerStyled,
  DropdownStyled,
  ListStyled,
  OptionStyled,
  SelectedStyled,
  ClearButtonStyled,
  LabelStyled,
  SelectedItemsWrapper,
  SelectedItemStyled,
} from "./DropdownFilter.styles";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((prev) => !prev);
  const isSelected = (option: string) => selected.includes(option);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ContainerStyled ref={ref}>
      {!selected.length ? (
        <ButtonStyled onClick={toggle} $isOpen={open}>
          <LabelStyled>{label}</LabelStyled>
          <ChevronDown size={16} />
        </ButtonStyled>
      ) : (
        <SelectedStyled onClick={toggle}>
          <SelectedItemsWrapper>
            {selected.map((s, i) => {
              const extraCharacter = i === selected.length - 1 ? "" : ",";

              return (
                <SelectedItemStyled
                  key={s}
                >{`${s}${extraCharacter}`}</SelectedItemStyled>
              );
            })}
          </SelectedItemsWrapper>
          <ClearButtonStyled
            aria-label="Clear selected filters"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setOpen(false);
            }}
          >
            <X size={16} />
          </ClearButtonStyled>
        </SelectedStyled>
      )}

      {open && (
        <DropdownStyled>
          <ListStyled>
            {options.map((option) => (
              <OptionStyled
                key={option}
                onClick={() => onSelect(option)}
                $selected={isSelected(option)}
              >
                {option}
                {isSelected(option) && <Check size={16} />}
              </OptionStyled>
            ))}
          </ListStyled>
        </DropdownStyled>
      )}
    </ContainerStyled>
  );
};

export default DropdownFilter;
