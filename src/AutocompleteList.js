import React from 'react';

const AutocompleteList = ({ list }) => {
    return (<div data-testid="suggestion-list" className="suggestion-list">{list}</div>);
};

export default AutocompleteList;