"use client";
import { useEffect, useState } from "react";
import Store, { StockData } from "./stockInfo";

const store = new Store();

export default function StockDetails() {
  const [stockInfo, setStockInfo] = useState<StockData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const newInfo = await updateStockInfo();
      setStockInfo(newInfo);
    };
    fetchData();
    const interval = setInterval(fetchData, 3000);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  if (!stockInfo) return <div>Loading...</div>;
  const { name, symbol, price, time } = stockInfo;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Symbol: {symbol}</p>
      <p>Price: {price}</p>
      <p>Time: {time}</p>
    </div>
  );
}

const updateStockInfo = async () => {
  const newInfo = store.returnStockInfo();
  return newInfo;
};
