"use client";

import { useAppStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";

interface CardProps {
  id: string | number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ButtonCart = ({ data }: { data: CardProps }) => {
  const [keranjang, setKeranjang] = useAppStore(
    useShallow((state: any) => [state.keranjang, state.setKeranjang])
  );
  const handleClick = () => {
    const filterKeranjang = keranjang.filter((item: any) => item.id == data.id);
    console.log({ filterKeranjang });

    if (filterKeranjang.length > 0) {
      alert("Produk sudah ada di keranjang");
    } else {
      setKeranjang(data);
    }
    console.log({ data }, keranjang);
  };

  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
};

export default ButtonCart;
