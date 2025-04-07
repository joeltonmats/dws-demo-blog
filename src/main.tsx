import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { PostProvider } from "./context/posts/PostContext.tsx";
import { AuthorProvider } from "./context/authors/AuthorContext.tsx";
import { CategoryProvider } from "./context/categories/CategoryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <PostProvider>
        <AuthorProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </AuthorProvider>
      </PostProvider>
    </ThemeProvider>
  </StrictMode>
);
