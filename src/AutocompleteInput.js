import React from 'react';

const AutocompleteInput = ({ autocomplete, value, clearInput }) => {
  return (
    <div className="autocomplete-input-container">
      <input data-testid="autocomplete-field" className="autocomplete-field" onChange={(e) => autocomplete(e)} value={value} />
      <button type="reset" data-testid="autocomplete-clear-button" onClick={(e) => clearInput(e)}>Clear</button>
    </div>
  );
};

export default AutocompleteInput;