import React, { useState } from 'react';
import './App.css';
import AutocompleteInput from './AutocompleteInput';
import AutocompleteList from './AutocompleteList';

export const names = ['Adam', 'Anthony', 'Bob', 'Billy', 'Carol', 'Cathy', 'Kevin', 'Kyle', 'Frank', 'Fred'];

const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState('');
  
  const suggestions = [];

  const setInputValue = (suggestion) => {
    setValue(suggestion);
  }

  const autocomplete = (event) => {
    setValue(event.target.value);
    names.forEach(name => {
      if (name.substr(0, event.target.value.length).toUpperCase() === event.target.value.toUpperCase()) {
        suggestions.push(name);
        setList(
          suggestions.map((suggestion, index) => {
            return <p key={index} onClick={() => setInputValue(suggestion)}>{suggestion}</p>
          })
        );
        if (event.target.value.length === 0) {
          setList([]);
        }
      }
    });
  }
  return (
    <div className="containerCenter">
      <AutocompleteInput autocomplete={autocomplete} value={value} />
      <AutocompleteList list={list} />
    </div>
  );
}

export default App;
