import React, { useState } from "react";
import "./App.css";
import AutocompleteInput from "./AutocompleteInput";
import AutocompleteList from "./AutocompleteList";
import names from "./names";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const suggestions = [];

  const setInputValue = (suggestion) => {
    setValue(suggestion);
    setList([]);
  };

  const autocomplete = (event) => {
    setValue(event.target.value);
    names.forEach((name) => {
      if (
        name.substr(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestions.push(name);
        setList(
          suggestions.map((suggestion, index) => {
            return (
              <p
                key={index}
                data-testid="suggestion-list-item"
                className="suggestion-list-item"
                onClick={() => setInputValue(suggestion)}
              >
                {suggestion}
              </p>
            );
          })
        );
        if (event.target.value.length === 0) {
          setList([]);
        }
      }
    });
  };

  const clearInput = (e) => {
    e.target.value = "";
    setList([]);
    setInputValue("");
  };

  return (
    <div className="containerCenter">
      <AutocompleteInput
        autocomplete={autocomplete}
        value={value}
        clearInput={clearInput}
      />
      <AutocompleteList list={list} />
    </div>
  );
};

export default App;
