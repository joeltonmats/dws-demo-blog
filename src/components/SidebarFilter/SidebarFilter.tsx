import { SlidersHorizontal } from "lucide-react";
import FilterItem from "../FilterItem/FilterItem";
import { ButtonStyled, Section, Title, Wrapper } from "./SidebarFilter.styles";

interface SidebarFilterProps {
  authors: string[];
  categories: string[];
  onAuthorSelect: (author: string) => void;
  onCategorySelect: (category: string) => void;
  onClear: () => void;
  selectedAuthors: string[];
  selectedCategories: string[];
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  authors,
  categories,
  onAuthorSelect,
  onCategorySelect,
  onClear,
  selectedAuthors,
  selectedCategories,
}) => {
  return (
    <Wrapper>
      <Section>
        <Title style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SlidersHorizontal size={18} />
          Filters
        </Title>
      </Section>

      <Section>
        <Title>Category</Title>
        {categories.map((cat) => (
          <FilterItem
            key={cat}
            label={cat}
            isSelected={selectedCategories.includes(cat)}
            onClick={() => onCategorySelect(cat)}
          />
        ))}
      </Section>

      <Section>
        <Title>Author</Title>
        {authors.map((auth) => (
          <FilterItem
            key={auth}
            label={auth}
            isSelected={selectedAuthors.includes(auth)}
            onClick={() => onAuthorSelect(auth)}
          />
        ))}
      </Section>

      <ButtonStyled onClick={onClear}>Apply filters</ButtonStyled>
    </Wrapper>
  );
};

export default SidebarFilter;
