import { describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { fireEvent, render, screen } from "@testing-library/react";
import DropdownFilter from "./DropdownFilter";

describe("DropdownFilter", () => {
  const options = ["Category 1", "Category 2", "Category 3"];
  const selected: string[] = [];

  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  it("should render label and opens dropdown", () => {
    renderWithTheme(
      <DropdownFilter
        label="Category"
        onClear={() => {}}
        onSelect={() => {}}
        options={options}
        selected={selected}
      />
    );

    expect(screen.getByText("Category")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Category 1")).toBeInTheDocument();
  });

  it("should call onSelect when an option is clicked", () => {
    const handleSelect = vi.fn();

    renderWithTheme(
      <DropdownFilter
        label="Category"
        onClear={() => {}}
        onSelect={handleSelect}
        options={options}
        selected={selected}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Category 2"));

    expect(handleSelect).toHaveBeenCalledWith("Category 2");
  });

  it("should call onClear when clear button is clicked", () => {
    const handleClear = vi.fn();

    renderWithTheme(
      <DropdownFilter
        label="Category"
        onClear={handleClear}
        onSelect={() => {}}
        options={options}
        selected={["Category 1"]}
      />
    );
    fireEvent.click(screen.getByText("Category 1"));

    const clearBtn = screen.getByLabelText("Clear selected filters");
    fireEvent.click(clearBtn);

    expect(handleClear).toHaveBeenCalled();
  });
});
