import React from "react";
import { Product } from "@component/interfaces/products";
import Card from "@component/components/card";

type IProps = {
  products: Product[];
};

const ProductList = ({ products }: IProps) => {
  console.log(products);
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
          >
            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
