"use client";
import { useSearchParams } from "next/navigation";
import ClientPrice from "./ClientPrice";

const ClientValyuta = ({ currency, color = "" }) => {


  
  const searchParams = useSearchParams();
  const activeCurrency = searchParams.get("c") || "usd";

  if (!currency) {
    return null;
  }
  const priceKey = `${activeCurrency}_price`;
  const price = currency[priceKey];

  return (
    <>
      <h4 className={`${color} text-lg font-medium`}>
        <ClientPrice many={price} />
      </h4>
    </>
  );
};

export default ClientValyuta;
