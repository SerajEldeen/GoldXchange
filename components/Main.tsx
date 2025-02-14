"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface MainProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Main: React.FC<MainProps> = ({ activePage, setActivePage }) => {
  const { data: session } = useSession();

  const handleClick = (page: string) => {
    if (!session) {
      toast.error("Sorry, you need to sign in first.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    setActivePage(page);
  };

  return (
    <main className="w-full">
      <p className="mt-10 text-center text-xl px-2 font-playfair">
        <span className="font-bold text-primary">GoldXchange </span> – Your
        go-to platform for real-time gold prices and seamless currency
        conversion.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-top gap-10 pt-10">
        <button
          type="button"
          onClick={() => handleClick("goldprice")}
          className={`px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 ${
            activePage === "goldprice"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <Link href={session ? "/goldprice" : ""}>Gold price</Link>
        </button>

        <button
          type="button"
          onClick={() => handleClick("currencyconverter")}
          className={`px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 ${
            activePage === "currencyconverter"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <Link href={session ? "/currencyconverter" : ""}>
            Currency Converter
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Main;
