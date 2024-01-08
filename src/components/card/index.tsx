import React from "react";
import Image from "next/image";
import { Product } from "@component/interfaces/products";

const Card = (product: Product) => {
  console.log("Product", product);
  return (
    <div className="w-52 h-64 border-textGrey rounded-lg shadow-lg flex flex-col">
      <Image
        alt="title"
        src={product.product.image}
        width={100}
        height={100}
        className="mx-auto"
      />

      <div className="mt-3 p-2">
        <p className="text-sm">{product.product.title}</p>

        <div className="flex  items-baseline gap-2">
          <p>KSh</p>
          <p className="text-2xl text-defaultGreen">11</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
