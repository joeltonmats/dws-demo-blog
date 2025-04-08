import { SlidersHorizontal } from "lucide-react";
import FilterItem from "../FilterItem/FilterItem";
import {
  ButtonStyled,
  Divider,
  Header,
  Section,
  Title,
  Wrapper,
} from "./SidebarFilter.styles";

interface SidebarFilterProps {
  authors: string[];
  categories: string[];
  onAuthorSelect: (author: string) => void;
  onCategorySelect: (category: string) => void;
  onApplyFilters: () => void;
  selectedAuthors: string[];
  selectedCategories: string[];
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  authors,
  categories,
  onAuthorSelect,
  onCategorySelect,
  onApplyFilters,
  selectedAuthors,
  selectedCategories,
}) => {
  return (
    <Wrapper>
      <Header>
        <SlidersHorizontal size={18} />
        Filters
      </Header>

      <Section>
        <Title>Category</Title>
        {categories.map((cat, i) => (
          <>
            <FilterItem
              key={cat}
              label={cat}
              isSelected={selectedCategories.includes(cat)}
              onClick={() => onCategorySelect(cat)}
            />
            {i < categories.length - 1 && <Divider />}
          </>
        ))}
      </Section>

      <Section>
        <Title>Author</Title>
        {authors.map((auth, i) => (
          <>
            <FilterItem
              key={auth}
              label={auth}
              isSelected={selectedAuthors.includes(auth)}
              onClick={() => onAuthorSelect(auth)}
            />
            {i < authors.length - 1 && <Divider />}
          </>
        ))}
      </Section>

      <ButtonStyled onClick={onApplyFilters}>Apply filters</ButtonStyled>
    </Wrapper>
  );
};

export default SidebarFilter;
