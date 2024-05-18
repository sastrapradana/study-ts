import Button from "@/components/ui/button";
import ProductsList from "@/components/products/products";
import CategoriesProducts from "@/components/products/categories";
import SearchProducts from "@/components/products/search";
import Keranjang from "@/components/products/keranjang";

export default function Products() {
  return (
    <main className="w-full min-h-[100vh] max-h-max">
      <h1 className="text-[2rem] mt-4 text-center font-semibold">
        Klima Store
      </h1>
      {/* input */}
      <SearchProducts />

      <div className="w-[90%] m-auto h-max mt-4 flex justify-between items-center">
        <Button title="Home" variant="red" size="md" url="/" />
        <div className="w-max h-max flex items-center gap-2">
          <Keranjang />
          <CategoriesProducts />
        </div>
      </div>

      {/* list */}
      <ProductsList />
    </main>
  );
}
