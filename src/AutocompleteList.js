import React from 'react';

const AutocompleteList = ({ list }) => {
    return (<div data-testid="suggestion-list">{list}</div>);
};

export default AutocompleteList;