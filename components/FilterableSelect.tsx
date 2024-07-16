"use client";

import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSistrix } from "react-icons/fa6";

interface CatProps {
  catId?: number;
  postsData?: boolean;
}

interface Category {
  name: string;
  slug: string;
}

const FilterableSelect: React.FC<CatProps> = ({ catId, postsData }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (catId) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?parent=${catId}&per_page=100`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        setCategories(
          data.map((category: any) => ({
            name: category.name,
            slug: category.slug,
          }))
        );
      }

      if (postsData) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?parent=${1}&per_page=100`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        setCategories(
          data.map((category: any) => ({
            name: category.name,
            slug: category.slug,
          }))
        );
      }
    };
    fetchData();
  }, [catId]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (category: Category) => {
    setSearchTerm(category.name);
    if (catId == 91) {
      router.push(`/tips-and-advice/${category.slug}`);
    } 
    if(catId == 1) {
      router.push(`/car-news-india/${category.slug}`);
    }
    if(catId == 144) {
      router.push(`/car-collection/${category.slug}`);
    }
    if(catId == 88) {
      router.push(`/car-expert-reviews/${category.slug}`);
    }
    
    setIsDropdownOpen(false);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };

  const handleSubmit = () => {
    const selectedCategory = categories.find(
      (category) => category.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (selectedCategory) {
      router.push(`/car-brands/${selectedCategory.slug}`);
    } else {
      // Optionally, you can handle the case where no matching category is found.
      console.error("No matching data found");
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="filterableSelect" className={` ${(postsData) ? 'headerSearch' : 'mt-3 mb-4'}`}>
      <div className="row">
        <div className={`${ postsData ? 'col-md-10' : 'col-md-8'}`}>
          <label htmlFor="categorySelect" className="form-label">
            Select News Category
          </label>
          <div className="position-relative" ref={dropdownRef}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={handleInputClick}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu show w-100">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <button
                      key={category.slug}
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
        <div className={`${ postsData ? 'col-md-2' : 'col-md-4'} d-flex align-items-end`}>
          {postsData && (
            <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>
              <FaSistrix />
            </button>
          )}

          {catId && (
            <button
              className="btn btn-primary w-100 submitBtn"
              type="button"
              onClick={handleSubmit}
            >
              Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterableSelect;
