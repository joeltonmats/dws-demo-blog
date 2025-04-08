import React, { useEffect, useState } from "react";
import { Search, ArrowLeft, X } from "lucide-react";
import {
  HeaderWrapper,
  LogoStyled,
  SearchInput,
  SearchButton,
  SearchDesktopWrapper,
  SearchMobileIcon,
  Overlay,
  OverlayHeader,
  SuggestionBox,
  SuggestionItem,
} from "./Header.styles";
import { getAuthors, getCategories } from "../../api/api";
import { Author, Category } from "../../types";
import texts from "../../constants/constants";
import textsHelper from "../../constants/constants.helpers";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [suggestions, setSuggestions] = useState<
    { label: string; type: "Author" | "Category" }[]
  >([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    if (!query) return setSuggestions([]);

    const q = query.toLowerCase();
    const filtered = [
      ...authors
        .filter((a) => a.name.toLowerCase().includes(q))
        .map((a) => ({ label: a.name, type: "Author" as const })),
      ...categories
        .filter((c) => c.name.toLowerCase().includes(q))
        .map((c) => ({ label: c.name, type: "Category" as const })),
    ];
    setSuggestions(filtered);
  }, [query, authors, categories]);

  const handleSuggestionClick = (value?: string) => {
    if (value) {
      setQuery(value);
    }
    setOverlayOpen(false);
  };

  const handleSubmit = () => {
    alert(`Search: ${query}`);
  };

  return (
    <>
      <HeaderWrapper>
        <LogoStyled>{textsHelper.header.title()}</LogoStyled>

        <SearchDesktopWrapper>
          <SearchInput
            placeholder={texts.header.searchPlaceholder}
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              setOverlayOpen(true);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && handleSubmit()
            }
          />
          <SearchButton onClick={handleSubmit}>
            <Search size={20} />
          </SearchButton>
        </SearchDesktopWrapper>

        <SearchMobileIcon onClick={() => setOverlayOpen(true)}>
          <Search size={20} />
        </SearchMobileIcon>
      </HeaderWrapper>

      {overlayOpen && (
        <Overlay>
          <OverlayHeader>
            <button onClick={() => setOverlayOpen(false)}>
              <ArrowLeft size={20} />
            </button>
            <SearchInput
              autoFocus
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              placeholder={texts.header.searchPlaceholder}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                e.key === "Enter" && handleSubmit()
              }
            />
            {query && (
              <button onClick={() => setQuery("")}>
                <X size={20} />
              </button>
            )}
          </OverlayHeader>

          <SuggestionBox>
            {suggestions.length > 0 ? (
              suggestions.map((s, i) => (
                <SuggestionItem
                  key={i}
                  onClick={() => handleSuggestionClick(s.label)}
                >
                  {s.label} <small>({s.type})</small>
                </SuggestionItem>
              ))
            ) : query.trim().length > 0 && suggestions.length === 0 ? (
              <SuggestionItem onClick={() => handleSuggestionClick()}>
                {`${texts.searchOverlay.noResults} ${query}`}
              </SuggestionItem>
            ) : (
              <SuggestionItem disabled>
                {texts.searchOverlay.startSearch}
              </SuggestionItem>
            )}
          </SuggestionBox>
        </Overlay>
      )}
    </>
  );
};

export default Header;
