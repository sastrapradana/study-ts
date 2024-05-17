import Card from "@/components/products/Card";
import Link from "next/link";

interface ProductsType {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description: string;
}

const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Products() {
  const { products } = await getProducts();

  return (
    <main className="w-full min-h-[100vh] max-h-max">
      <h1 className="text-[2rem] mt-4 text-center font-semibold">
        Products List
      </h1>
      {/* input */}
      <div className="w-full h-max flex justify-center items-center mt-4">
        <div className="w-[40%]">
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari..."
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto h-max mt-4">
        <button className="py-1 px-4 rounded-lg bg-rose-500 hover:bg-rose-600">
          <Link href="/">Home</Link>
        </button>
      </div>

      {/* list */}
      <div className="w-[95%] h-max mt-8 pb-4 m-auto flex flex-wrap items-center justify-center gap-5">
        {products.map((product: ProductsType) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    </main>
  );
}
