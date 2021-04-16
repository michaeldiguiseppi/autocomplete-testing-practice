import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("closes the list when an element is selected", () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const inputElement = getByTestId(/autocomplete-field/);
    fireEvent.change(inputElement, { target: { value: "a" } });
    const listItems = getAllByTestId(/suggestion-list-item/);
    expect(listItems).toHaveLength(2);
    fireEvent.click(listItems[0]);
    expect(inputElement.value).toBe("Ava");
    expect(getByTestId(/suggestion-list/).children.length).toBe(0);
  });
});
