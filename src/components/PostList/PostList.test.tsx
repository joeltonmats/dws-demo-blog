import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "styled-components";

import PostList from "./PostList";
import { Post } from "../../types";
import { theme } from "../../styles/theme";

const mockPost: Post = {
  id: "1",
  title: "Test Post",
  content: "This is the content of the test post.",
  thumbnailUrl: "https://example.com/thumb.jpg",
  createdAt: "2025-04-01T00:00:00.000Z",
  updatedAt: "2025-04-01T00:00:00.000Z",
  authorId: "100",
  author: {
    id: "100",
    name: "Author Test",
    profilePicture: "https://example.com/avatar.jpg",
    createdAt: "2025-04-01T00:00:00.000Z",
    updatedAt: "2025-04-01T00:00:00.000Z",
  },
  categories: [
    {
      id: "10",
      name: "Tech",
      createdAt: "2025-04-01T00:00:00.000Z",
      updatedAt: "2025-04-01T00:00:00.000Z",
      postId: "1",
    },
  ],
};

describe("PostList", () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  it("should render a  list of posts", () => {
    renderWithTheme(<PostList posts={[mockPost]} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("Author Test")).toBeInTheDocument();
  });

  it("should call onClickPost with post ID", () => {
    const onClickPost = vi.fn();
    renderWithTheme(<PostList posts={[mockPost]} onClickPost={onClickPost} />);
    fireEvent.click(screen.getByText("Test Post"));
    expect(onClickPost).toHaveBeenCalledWith("1");
  });

  it("should render not found message when posts are empty", () => {
    renderWithTheme(<PostList posts={[]} />);
    expect(screen.getByText(/no posts found./i)).toBeInTheDocument();
  });
});
