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
      if(type!==''){
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_LARAVEL_BASE_URL}/${api}`,
          { next: { revalidate: 3600 } }
        );
        const data1 = await res.json();
        const data = data1.data;
        setCategories(data.map((category: any) => ({ name: category.name, slug: category.slug })));
      }else{
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?parent=1&per_page=100`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        setCategories(data.map((category: any) => ({ name: category.name, slug: category.slug })));
      }
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
    <div id="Autocomplete" className="mt-3 mb-3">
      <div className="row">
        <div className="col-md-12">
        {type !== '' && (
          <label htmlFor="categorySelect" className="form-label">
            Select {type}
          </label>
          )}
          <div className="position-relative" ref={dropdownRef}>
            <input
              type="text"
              className="form-control"
              placeholder= {`Search ${type}`}
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={handleInputClick}
            />
            <button className="btn btn-theme position-absolute r-0 t-0" type="button">
              <img
                src="/search-icon.png"
                className="img-fluid"
              />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu show w-100 Autocomplete">
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
 
