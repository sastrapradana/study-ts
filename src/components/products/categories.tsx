"use client";

import { getProductCategories } from "@/app/services/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesProducts = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const router = useRouter();
  const category: any = useSearchParams().get("category");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    router.push(`/products?category=${e.target.value}`);
  };

  const getCategories = async () => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
    const data = await getProductCategories();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, [category]);

  return (
    <div className="w-max h-max">
      {categories.length > 0 && (
        <select
          id="categories"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Pilih Kategori</option>
          <option value="">Semua</option>
          {categories.map((category: string, index: number) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CategoriesProducts;
