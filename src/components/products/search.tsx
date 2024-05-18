"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const SearchProducts = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const search: string | null = useSearchParams().get("search");

  const handleButton = () => {
    if (input !== "") {
      router.push(`/products?search=${input}`);
    }
  };

  useEffect(() => {
    if (search) {
      setInput(search);
    } else {
      setInput("");
    }
  }, [search]);

  return (
    <div className="w-full h-max flex justify-center items-center mt-4 gap-4">
      <div className="w-[60%] lg:w-[40%]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full p-4 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari..."
          />
        </div>
      </div>
      <div className="w-max h-max" onClick={handleButton}>
        <Button title="Search" variant="blue" size="sm" />
      </div>
    </div>
  );
};

export default SearchProducts;
