"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchGoldPrice = async () => {
  const { data } = await axios.get("https://www.goldapi.io/api/XAU/USD", {
    headers: {
      "x-access-token": "goldapi-rph4esm73e5wqb-io",
      "Content-Type": "application/json",
    },
  });
  return data;
};
function GoldPage() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["goldPrice"],
    queryFn: fetchGoldPrice,
    staleTime: 0,
  });
  if (isPending)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (isError) return <p>Error: {error.message}</p>;
  const formattedTime = new Date(data.timestamp * 1000).toLocaleTimeString(
    "en-US",
    {
      timeZone: "Africa/Cairo", // Converts to EET
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Formats in AM/PM
    }
  );
  return (
    <div>
      <div className="h-1 w-full bg-primary mt-16" />
      <h1 className="font-playfair font-bold text-xl ml-5 mt-2 text-primary text-center sm:text-left">
        International Gold Price per Ounce 24 K
      </h1>
      <div className="flex sm:flex-row flex-col justify-center items-center font-poppins gap-10 mt-10">
        <p>
          Gold Price: {data.price} <span className="text-primary">USD</span>
        </p>
        <p>
          Price<span className="text-primary">/</span>Gram:{" "}
          {data.price_gram_24k} <span className="text-primary">USD</span>
        </p>
        <p>
          Time: {formattedTime} <span className="text-primary">EST</span>
        </p>
      </div>
    </div>
  );
}

export default GoldPage;
