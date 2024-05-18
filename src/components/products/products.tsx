"use client";

import {
  getCategories,
  getProducts,
  getSearchProducts,
} from "@/app/services/api";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SkeletonCard from "./skeleton-card";

interface ProductsType {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description: string;
}

const ProductsList = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams ? searchParams.get("category") : null;
  const search = searchParams ? searchParams.get("search") : null;

  const getProductsList = async () => {
    try {
      if (category && category !== "") {
        const data = await getCategories(category);
        setProducts(data?.products || []);
      } else if (search && search !== "") {
        const dataSearch = await getSearchProducts(search);

        setProducts(dataSearch?.products || null);
      } else {
        const data = await getProducts();
        setProducts(data?.products || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductsList();
  }, [category, search]);

  return (
    <div className="w-[95%] h-max mt-8 pb-4 m-auto flex flex-wrap items-center justify-center gap-5">
      {products.length === 0 && <SkeletonCard />}
      {products?.map((product: ProductsType) => (
        <div className="w-max h-max cursor-pointer" key={product.id}>
          <Card
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
            rating={product.rating}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
