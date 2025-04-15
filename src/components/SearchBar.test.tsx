import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

const mockOnSearchChange = jest.fn();

test("renders SearchBar input field", () => {
  render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
});

test("calls onSearchChange when user types", () => {
  render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);

  const inputElement = screen.getByPlaceholderText(/search/i);

  fireEvent.change(inputElement, { target: { value: "Ervin" } });

  expect(mockOnSearchChange).toHaveBeenCalledWith("Ervin");
});
