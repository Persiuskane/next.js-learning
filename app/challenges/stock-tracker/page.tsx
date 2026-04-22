import StockDetails from "./getStockData";

export default function StockTracker() {
  return (
    <>
      <div className="max-w-full mx-auto w-full ">
        <h1 className="text-4xl align-middle text-center px-2.5">
          Stock Tracker
        </h1>
      </div>
      <StockDetails />
    </>
  );
}
