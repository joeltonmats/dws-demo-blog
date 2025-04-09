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
import texts from "../../constants/constants";

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
        {texts.sidebar.title}
      </Header>

      <Section>
        <Title> {texts.sidebar.category}</Title>
        {categories.map((cat, i) => (
          <div key={cat}>
            <FilterItem
              label={cat}
              isSelected={selectedCategories.includes(cat)}
              onClick={() => onCategorySelect(cat)}
            />
            {i < categories.length - 1 && <Divider />}
          </div>
        ))}
      </Section>

      <Section>
        <Title> {texts.sidebar.author}</Title>
        {authors.map((auth, i) => (
          <div key={auth}>
            <FilterItem
              key={auth}
              label={auth}
              isSelected={selectedAuthors.includes(auth)}
              onClick={() => onAuthorSelect(auth)}
            />
            {i < authors.length - 1 && <Divider />}
          </div>
        ))}
      </Section>

      <ButtonStyled onClick={onApplyFilters}>
        {texts.sidebar.apply}
      </ButtonStyled>
    </Wrapper>
  );
};

export default SidebarFilter;
