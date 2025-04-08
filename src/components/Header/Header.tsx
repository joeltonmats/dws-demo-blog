import React, { useState } from "react";
import { Search } from "lucide-react";

import {
  HeaderWrapper,
  LogoStyled,
  SearchButtonStyled,
  SearchInputStyled,
  SearchWrapper,
} from "./Header.styles";

interface HeaderProps {
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSearch = false }) => {
  const [query, setQuery] = useState("");

  return (
    <HeaderWrapper>
      <LogoStyled>
        dentsu <span>world services</span>
      </LogoStyled>
      {showSearch && (
        <SearchWrapper>
          <SearchInputStyled
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButtonStyled>
            <Search size={20} />
          </SearchButtonStyled>
        </SearchWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
