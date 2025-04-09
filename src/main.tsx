import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { PostProvider } from "./context/posts/PostContext.tsx";
import { AuthorProvider } from "./context/authors/AuthorContext.tsx";
import { CategoryProvider } from "./context/categories/CategoryContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider } from "./context/header/headerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PostProvider>
          <AuthorProvider>
            <CategoryProvider>
              <HeaderProvider>
                <App />
              </HeaderProvider>
            </CategoryProvider>
          </AuthorProvider>
        </PostProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
