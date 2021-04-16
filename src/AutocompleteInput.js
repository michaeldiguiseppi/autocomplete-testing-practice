import React from 'react';

const AutocompleteInput = ({ autocomplete, value }) => {
  return (
    <div className="containerCenter">
      <input data-testid="autocomplete-field" className="autocomplete" onChange={(e) => autocomplete(e)} value={value} />
    </div>
  );
};

export default AutocompleteInput;