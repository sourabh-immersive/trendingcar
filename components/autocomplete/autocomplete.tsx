import React, { useState, ChangeEvent } from 'react';
import Autosuggest from 'react-autosuggest';

interface City {
  name: string;
}

const cities: City[] = [
  { name: 'Indore' },
  { name: 'Bhopal' },
  { name: 'Mumbai' },
  { name: 'Delhi' },
  { name: 'Chennai' },
  // Add more cities as needed
];

const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(
    city => city.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = (suggestion: City) => suggestion.name;

const renderSuggestion = (suggestion: City) => (
  <div>
    {suggestion.name}
  </div>
);

interface AutocompleteProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState<City[]>([]);

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event: React.FormEvent<HTMLInputElement>,
    { suggestion }: { suggestion: City }
  ) => {
    onChange(event as ChangeEvent<HTMLInputElement>, { newValue: suggestion.name });
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={{
        placeholder: "Search your city (e.g. Indore, Bhopal)",
        value,
        onChange
      }}
    />
  );
};

export default Autocomplete;
