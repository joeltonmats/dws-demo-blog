import React, { useEffect, useState } from "react";
import { Search, ArrowLeft, X } from "lucide-react";
import {
  HeaderWrapper,
  LogoStyled,
  SearchInput,
  SearchDesktopWrapper,
  SearchMobileIcon,
  Overlay,
  OverlayHeader,
  SuggestionBox,
  SuggestionItem,
  SearchButton,
} from "./Header.styles";
import { getAuthors, getCategories } from "../../api/api";
import { Author, Category } from "../../types";
import texts from "../../constants/constants";
import textsHelper from "../../constants/constants.helpers";
import { useNavigate } from "react-router-dom";
import { useHeaderContext } from "../../context/header/headerContext";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [suggestions, setSuggestions] = useState<
    { label: string; type: "Author" | "Category" }[]
  >([]);
  const { context, onSearch } = useHeaderContext();

  const navigate = useNavigate();

  const handleSuggestionClick = (value?: string) => {
    if (value) {
      const enhancedValue = value === "RESET" ? "" : value;
      setQuery(enhancedValue);
      onSearch?.(enhancedValue);
    } else {
      onSearch?.(query);
    }
    setOverlayOpen(false);
  };

  const handleSubmit = () => {
    onSearch?.(query);
    setOverlayOpen(false);
  };

  useEffect(() => {
    if (context === "home") {
      getAuthors().then(setAuthors);
      getCategories().then(setCategories);
    }
  }, [context]);

  useEffect(() => {
    if (context !== "home" || !query) {
      setSuggestions([]);
      return;
    }

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
  }, [query, context, authors, categories]);

  useEffect(() => {
    return () => setQuery("");
  }, []);

  return (
    <>
      <HeaderWrapper>
        <LogoStyled onClick={() => navigate("/")} role="button" tabIndex={0}>
          {textsHelper.header.title()}
        </LogoStyled>

        <SearchDesktopWrapper>
          <SearchInput
            placeholder={texts.header.searchPlaceholder}
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              if (context === "home") {
                setOverlayOpen(true);
              }
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && handleSubmit()
            }
          />

          {context === "post" && (
            <SearchButton onClick={handleSubmit}>
              <Search size={20} />
            </SearchButton>
          )}
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
              <button
                onClick={() => {
                  handleSuggestionClick("RESET");
                  setQuery("");
                }}
              >
                <X size={20} />
              </button>
            )}
          </OverlayHeader>

          <SuggestionBox>
            {context === "home" && suggestions.length > 0 ? (
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
                {context === "home"
                  ? `${texts.searchOverlay.noResults} ${query}`
                  : `${texts.searchOverlay.select} ${query}`}
              </SuggestionItem>
            ) : (
              <SuggestionItem disabled>
                {context === "home"
                  ? texts.searchOverlay.startSearch
                  : texts.searchOverlay.startSearchWithoutSuggestion}
              </SuggestionItem>
            )}
          </SuggestionBox>
        </Overlay>
      )}
    </>
  );
};

export default Header;
