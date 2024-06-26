import React from 'react';

interface SearchSectionProps {
  title: string;
  placeholder: string;
  searchIconSrc: string;
  onSearch: (searchText: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ title, placeholder, searchIconSrc, onSearch }) => {
  const [searchText, setSearchText] = React.useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="container">
        <h5 className="section-title">{title}</h5>
        <div className="search-wrapper pos-rel">
            <input
            type="text"
            id="search"
            className="form-control"
            placeholder={placeholder}
            value={searchText}
            onChange={handleInputChange}
            />
            <img
            src={searchIconSrc}
            className="img-fluid pos-abs search-img cursor-pointer"
            alt="Search"
            onClick={handleSearch}
            />
        </div>
    </div>
        
  );
};

export default SearchSection;
