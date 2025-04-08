import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownUp } from "lucide-react";

import { useAuthorContext } from "../../context/authors/AuthorContext";
import { useCategoryContext } from "../../context/categories/CategoryContext";
import { usePostContext } from "../../context/posts/PostContext";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import Header from "../../components/Header/Header";
import PostList from "../../components/PostList/PostList";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";

import {
  ContentWrapper,
  ControlsWrapper,
  FiltersWrapper,
  PageWrapper,
  SidebarWrapper,
  SortBar,
  SortToggle,
  Title,
} from "./Home.styles";

const HomePage: React.FC = () => {
  const { state: postState } = usePostContext();
  const { state: authorState } = useAuthorContext();
  const { state: categoryState } = useCategoryContext();

  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortNewestFirst, setSortNewestFirst] = useState(true);

  const [tempSelectedAuthors, setTempSelectedAuthors] = useState<string[]>([]);
  const [tempSelectedCategories, setTempSelectedCategories] = useState<
    string[]
  >([]);

  const navigate = useNavigate();

  /* Handlers */
  const toggleTempAuthor = (author: string) => {
    setTempSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((a) => a !== author)
        : [...prev, author]
    );
  };

  const toggleTempCategory = (category: string) => {
    setTempSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCategorySelect = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleAuthorSelect = (author: string) => {
    if (!selectedAuthors.includes(author)) {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

  const applyFilters = () => {
    setSelectedAuthors(tempSelectedAuthors);
    setSelectedCategories(tempSelectedCategories);
  };

  const filteredPosts = postState.posts
    .filter((post) => {
      const matchAuthor =
        selectedAuthors.length === 0 ||
        selectedAuthors.includes(post.author.name);
      const matchCategory =
        selectedCategories.length === 0 ||
        post.categories.some((c) => selectedCategories.includes(c.name));
      return matchAuthor && matchCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortNewestFirst ? dateB - dateA : dateA - dateB;
    });

  const allCategories = Array.from(
    new Set(categoryState.categories.map((c) => c.name))
  );
  const allAuthors = Array.from(
    new Set(authorState.authors.map((a) => a.name))
  );

  // useEffect(() => {
  //   setTempSelectedAuthors(selectedAuthors);
  //   setTempSelectedCategories(selectedCategories);
  // }, [selectedAuthors, selectedCategories]);

  return (
    <>
      <Header showSearch />

      <ControlsWrapper>
        <Title>DWS blog</Title>
        <SortBar>
          <span>Sort by:</span>
          <SortToggle onClick={() => setSortNewestFirst(!sortNewestFirst)}>
            {sortNewestFirst ? "Newest first" : "Oldest first"}
            <ArrowDownUp size={16} />
          </SortToggle>
        </SortBar>
      </ControlsWrapper>

      <PageWrapper>
        {/* Desktop Sidebar */}
        <SidebarWrapper>
          <SidebarFilter
            categories={allCategories}
            authors={allAuthors}
            selectedCategories={tempSelectedCategories}
            selectedAuthors={tempSelectedAuthors}
            onCategorySelect={toggleTempCategory}
            onAuthorSelect={toggleTempAuthor}
            onApplyFilters={applyFilters}
          />
        </SidebarWrapper>
        <ContentWrapper>
          {/* Mobile filters */}
          <FiltersWrapper>
            <DropdownFilter
              label="Category"
              options={allCategories}
              selected={selectedCategories}
              onSelect={handleCategorySelect}
              onClear={() => setSelectedCategories([])}
            />

            <DropdownFilter
              label="Author"
              options={allAuthors}
              selected={selectedAuthors}
              onSelect={handleAuthorSelect}
              onClear={() => setSelectedAuthors([])}
            />

            <SortToggle onClick={() => setSortNewestFirst(!sortNewestFirst)}>
              {sortNewestFirst ? "Newest first" : "Oldest first"}
              <ArrowDownUp size={16} />
            </SortToggle>
          </FiltersWrapper>

          <PostList posts={filteredPosts} onClickPost={handlePostClick} />
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default HomePage;
