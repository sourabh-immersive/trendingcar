import React, { useState, ChangeEvent, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/navigation';

interface City {
  id: number;
  name: string;
  slug: string;
}

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
  const [cities, setCities] = useState<City[]>([]);
  const router = useRouter(); // Ensure this is within the component that is part of Next.js context

  useEffect(() => {
    // Fetch cities from the API
    const fetchCities = async () => {
      try {
        const response = await fetch('https://trendingcar.com/admin/api/fuelStationCities'); // Replace with your API endpoint
       
        const dataCity = await response.json();
        const data: City[] = dataCity.data;
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : cities.filter(
      city => city.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

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
    console.log('suggestion--', suggestion.slug);
    onChange(event as ChangeEvent<HTMLInputElement>, suggestion.name);
    router.push(`/fuel-stations/${suggestion.slug}`);
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
        onChange: (event, { newValue }) => {
          onChange(event as ChangeEvent<HTMLInputElement>, newValue);
        }
      }}
    />
  );
};

export default Autocomplete;
