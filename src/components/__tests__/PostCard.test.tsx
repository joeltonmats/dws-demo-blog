import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import PostCard from "../PostCard";
import { theme } from "../../styles/theme";

const mockPost = {
  id: "1",
  title: "Test Post",
  content: "This is a sample content of the blog post.",
  thumbnailUrl: "https://via.placeholder.com/300",
  createdAt: "2024-01-20T00:00:00.000Z",
  updatedAt: "2024-01-20T00:00:00.000Z",
  authorId: "a1",
  author: {
    id: "a1",
    name: "Author Lastname",
    profilePicture: "",
    createdAt: "",
    updatedAt: "",
  },
  categories: [
    { id: "c1", name: "Category 1", postId: "1", createdAt: "", updatedAt: "" },
    { id: "c2", name: "Category 2", postId: "1", createdAt: "", updatedAt: "" },
  ],
};

describe("PostCard", () => {
  it("should render post title, author, date, and categories", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PostCard post={mockPost} />
      </ThemeProvider>
    );

    expect(getByText("Test Post")).toBeInTheDocument();
    expect(getByText("Author Lastname")).toBeInTheDocument();
    expect(getByText("Category 1")).toBeInTheDocument();
    expect(getByText("Category 2")).toBeInTheDocument();
  });
});
