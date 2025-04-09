import React, { createContext, useContext, useState } from "react";

export type ContextType = "home" | "post";

interface HeaderContextProps {
  context: ContextType;
  setContext: (value: ContextType) => void;
  onSearch?: (query: string) => void;
  setOnSearch: (callback?: (query: string) => void) => void;
}

const HeaderContext = createContext<HeaderContextProps>({
  context: "home",
  setContext: () => {},
  onSearch: undefined,
  setOnSearch: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [context, setContext] = useState<ContextType>("home");
  const [onSearch, setOnSearch] = useState<
    ((query: string) => void) | undefined
  >();

  return (
    <HeaderContext.Provider
      value={{ context, setContext, onSearch, setOnSearch }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
