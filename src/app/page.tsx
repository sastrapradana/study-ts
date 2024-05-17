import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-4">
      <h1 className="text-5xl font-bold font tracking-[2px]">Klima Tech</h1>
      <div className="w-max h-max flex items-center gap-5">
        <button className="py-1 px-4 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700">
          <Link href="/products">Products</Link>
        </button>
        <button className="py-1 px-4 rounded-lg bg-purple-600 hover:bg-purple-700">
          <Link href="/dashboard">Dashboard</Link>
        </button>
      </div>
    </div>
  );
}
