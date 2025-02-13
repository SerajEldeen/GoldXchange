"use client";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const fetchExchangeRates = async () => {
  const { data } = await axios.get(
    "https://v6.exchangerate-api.com/v6/ca4f700001403ab67419b6e5/latest/USD"
  );
  return data.conversion_rates;
};
function ExchangeRates() {
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
    staleTime: 0,
  });
  if (isPending)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (isError) return <p>Error: {error.message}</p>;
  const fromRate = data[from];
  const toRate = data[to];

  const res = (amount * toRate) / fromRate;
  return (
    <div>
      <div className="h-1 w-full bg-primary mt-16 " />
      <h1 className="font-playfair font-bold text-xl ml-5 mt-2 text-primary text-center sm:text-left">
        Check live foreign currency exchange rates
      </h1>
      <div className="flex justify-center items-center mt-5">
        <select
          aria-label="From"
          className="w-40 px-4 py-2 border-2 border-solid border-secondary
            rounded-lg outline-none text-center  "
          onChange={(e) => setFrom(e.target.value)}
          value={from}
        >
          {Object.entries(data).map(([currency]) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <Image
          width={25}
          height={25}
          className=" mx-2 sm:mx-5"
          src="/right-arrow.png"
          alt="Right-Arrow"
        />
        <select
          aria-label="To"
          className="w-40 px-4 py-2 border-2 border-solid border-secondary
            rounded-lg outline-none text-center "
          onChange={(e) => setTo(e.target.value)}
          value={to}
        >
          {Object.entries(data).map(([currency]) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center items-center mt-5">
        <input
          type="number"
          placeholder="Amount"
          className="w-40 px-4 py-2 border-2 border-solid border-secondary
            rounded-lg outline-none text-center caret-primary"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Image
          width={25}
          height={25}
          className=" mx-2 sm:mx-5"
          src="/right-arrow.png"
          alt="Right-Arrow"
        />
        <div
          className="w-40 px-4 py-2 border-2 border-solid border-secondary bg-white
            rounded-lg  text-center "
        >
          {res.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ExchangeRates;
