import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AutocompleteList from "./AutocompleteList";

beforeEach(cleanup);

describe("<AutocompleteList />", () => {
  it("should not render a suggestion list if the list passed in props is blank", () => {
    const { getByTestId } = render(<AutocompleteList list={[]} />);
    expect(getByTestId(/suggestion-list/).children.length).toBe(0);
  });

  it("should render a list of suggestions when the list is passed as props", () => {
    const list = [<p key="0">Adam</p>, <p key="1">Anthony</p>];
    const { getByTestId } = render(<AutocompleteList list={list} />);
    expect(getByTestId(/suggestion-list/).children.length).toBe(2);
  });
});
