'use client';

import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CatProps {
  api?: string;
  type?: string;
  redirect?:string;
}

interface Category {
  name: string;
  slug: string;
}
const Autocomplete: React.FC<CatProps> = ({ api,type,redirect }) => {
  console.log(type);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://trendingcar.com/admin/api/${api}`,
        { next: { revalidate: 3600 } }
      );
      const data1 = await res.json();
      const data = data1.data;
      setCategories(data.map((category: any) => ({ name: category.name, slug: category.slug })));
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (category: Category) => {
    setSearchTerm(category.name);
    setIsDropdownOpen(false);
    router.push(`/${redirect}/${category.slug}`);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };
 
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div id="Autocomplete" className="mt-3 mb-4">
      <div className="row">
        <div className="col-md-8">
          <label htmlFor="categorySelect" className="form-label">
            Select {type}
          </label>
          <div className="position-relative" ref={dropdownRef}>
            <input
              type="text"
              className="form-control"
              placeholder= {`Search ${type}`}
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={handleInputClick}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu show w-100">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <button
                      key={`cat-${category.slug}`}
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSelect(category)}
                    >
                      {category.name}
                    </button>
                  ))
                ) : (
                  <div className="dropdown-item">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default Autocomplete;
 
