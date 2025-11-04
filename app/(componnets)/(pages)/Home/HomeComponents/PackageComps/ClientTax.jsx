"use client";
import { useSearchParams } from "next/navigation";
import ClientPrice from "./ClientPrice";

const ClientTax = ({ currency, color = "" }) => {


  
  const searchParams = useSearchParams();
  const activeCurrency = searchParams.get("c") || "usd";

  if (!currency) {
    return null;
  }
  const priceKey = `${activeCurrency}_tax`;
  const price = currency[priceKey];

  return (
    <>
      <h4 className={`${color} text-lg font-medium`}>
        <ClientPrice many={price} />
      </h4>
    </>
  );
};

export default ClientTax;
