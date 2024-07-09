'use client'

import { ChangeEvent, useState, useRef } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

interface catProps {
    catId?: number;
}

const FilterableSelect: React.FC<catProps> = async ( catId ) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?parent=${catId}`,
//     { next: { revalidate: 3600 } }
//   );
//   let data = await res.json();
// //   console.log(data);

  const categories: string[] = ['Maruti', 'Hyundai', 'Tata', 'Mahindra'];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (category: string) => {
    setSearchTerm(category);
    setIsDropdownOpen(false);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };

  const handleSubmit = () => {
    if (searchTerm) {
        router.push(`/car-brands/${searchTerm.toLowerCase()}`);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="categorySelect" className="form-label">
            Select News Category
          </label>
          <div className="position-relative" ref={dropdownRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Search categories"
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={handleInputClick}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu show w-100">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <button
                      key={category}
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSelect(category)}
                    >
                      {category}
                    </button>
                  ))
                ) : (
                  <div className="dropdown-item">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-danger w-100" type="button" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterableSelect;