import { render, fireEvent, screen } from "@testing-library/react";
import ScoreButton from "../ScoreButton.tsx";
import "@testing-library/jest-dom";

describe("Button", () => {
  // renders the button correctly
  it("renders the button correctly", () => {
    render(<ScoreButton>Click Me!</ScoreButton>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  // calls the onClick function when clicked
  it("calls the onClick function when clicked", () => {
    const clickMock = jest.fn();
    render(<ScoreButton onClick={clickMock}>Click Me!</ScoreButton>);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(clickMock).toHaveBeenCalled();
  });
});
