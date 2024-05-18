import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-4">
      <h1 className="text-5xl font-bold font tracking-[2px]">Klima Tech</h1>
      <div className="w-max h-max flex items-center gap-5">
        <Button title="Products" variant="fuchsia" size="md" url="/products" />
        <Button title="Dashboard" variant="purple" size="md" url="/dashboard" />
      </div>
    </div>
  );
}
