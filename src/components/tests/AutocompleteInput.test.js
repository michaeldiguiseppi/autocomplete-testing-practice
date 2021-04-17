import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AutocompleteInput from "../AutocompleteInput";

beforeEach(cleanup);

describe("<AutocompleteInput />", () => {
  it("renders without crashing", () => {
    render(<AutocompleteInput />);
  });

  it("renders an input field", () => {
    const { getByTestId } = render(<AutocompleteInput />);
    getByTestId(/autocomplete-field/);
  });

  it("should fill the input field with the value received from props", () => {
    const { getByTestId } = render(<AutocompleteInput value="Adam" />);
    const inputEl = getByTestId(/autocomplete-field/);
    expect(inputEl.value).toBe("Adam");
  });

  it("should call the autocomplete function from props when changing the input value", () => {
    const autocomplete = jest.fn();
    const { getByTestId } = render(
      <AutocompleteInput autocomplete={autocomplete} />
    );
    const inputEl = getByTestId(/autocomplete-field/);
    fireEvent.change(inputEl, { target: { value: "a" } });
    expect(autocomplete).toHaveBeenCalledTimes(1);
  });

  it("should call the autocomplete function from props the same number of times as characters input to the field", () => {
    const autocomplete = jest.fn();
    const { getByTestId } = render(
      <AutocompleteInput autocomplete={autocomplete} />
    );
    const inputEl = getByTestId(/autocomplete-field/);
    fireEvent.change(inputEl, { target: { value: "a" } });
    fireEvent.change(inputEl, { target: { value: "ad" } });
    fireEvent.change(inputEl, { target: { value: "ada" } });
    expect(autocomplete).toHaveBeenCalledTimes(3);
  });

  it("should render a clear button", () => {
    const clearInput = jest.fn();
    const { getByTestId } = render(
      <AutocompleteInput clearInput={clearInput} />
    );
    getByTestId(/autocomplete-clear-button/);
  });

  it("should clear the input when the clear button is pressed", () => {
    const clearInput = jest.fn(),
      autocomplete = jest.fn();
    const { getByTestId } = render(
      <AutocompleteInput clearInput={clearInput} autocomplete={autocomplete} />
    );
    const inputField = getByTestId(/autocomplete-field/);
    const clearButton = getByTestId(/autocomplete-clear-button/);
    fireEvent.change(inputField, { target: { value: "a" } });
    fireEvent.click(clearButton);
    expect(clearInput).toHaveBeenCalledTimes(1);
  });
});
