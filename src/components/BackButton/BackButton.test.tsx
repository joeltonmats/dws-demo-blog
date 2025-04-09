/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BackButton from "./BackButton";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const navigateMock = vi.fn();

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(() => navigateMock),
  };
});

describe("BackButton", () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  beforeEach(() => {
    navigateMock.mockClear();
  });

  it("should render with text and icon", () => {
    renderWithTheme(<BackButton />);
    expect(screen.getByRole("button")).toHaveTextContent(/back/i);
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("should call navigate(/) when clicked", () => {
    renderWithTheme(<BackButton />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("should be accessible via role and label", () => {
    renderWithTheme(<BackButton />);
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
  });
});
