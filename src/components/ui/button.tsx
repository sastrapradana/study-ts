import Link from "next/link";

const Button = ({
  title,
  variant,
  size,
  url,
}: {
  title: string;
  variant: string;
  size: string;
  url?: string;
}) => {
  return (
    <button className={`rounded-lg ${variantBtn[variant]} ${sizeBtn[size]}`}>
      {url ? <Link href={url}>{title}</Link> : title}
    </button>
  );
};

const variantBtn: any = {
  fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  blue: "bg-blue-600 hover:bg-blue-700",
  white: "bg-white hover:bg-gray-400",
  black: "bg-gray-800 hover:bg-gray-900",
};

const sizeBtn: any = {
  md: "py-1 px-4",
  sm: "py-2 px-6 text-[1.1rem]",
  lg: "py-3 px-8 text-[1.2rem]",
};

export default Button;
