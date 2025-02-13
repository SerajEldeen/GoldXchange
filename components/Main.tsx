"use client";
import Link from "next/link";

interface MainProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Main: React.FC<MainProps> = ({ activePage, setActivePage }) => {
  return (
    <main className="w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-top gap-10 pt-10">
        <button
          type="button"
          onClick={() => setActivePage("goldprice")}
          className={`px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 ${
            activePage === "goldprice"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <Link href="/goldprice">Gold price</Link>
        </button>

        <button
          type="button"
          onClick={() => setActivePage("currencyconverter")}
          className={`px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 ${
            activePage === "currencyconverter"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <Link href="/currencyconverter">Currency Converter</Link>
        </button>
      </div>
    </main>
  );
};

export default Main;
