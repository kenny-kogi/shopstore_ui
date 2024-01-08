import React from "react";
import MainLayout from "@component/components/MainLayout";
import { get_all_products } from "@component/remoteApi/axios";
import { Product } from "@component/interfaces/products";
import ProductList from "@component/container/ProductList";
import Header from "@component/components/header";

type IProps = {
  products: Product[];
};

const ProductListPage = ({ products }: IProps) => {
  return (
    <MainLayout>
      <ProductList products={products} />
    </MainLayout>
  );
};

export default ProductListPage;

export async function getServerSideProps({ req, res }) {
  const allProducts = await (await get_all_products("xxx")).data;
  console.log(allProducts);

  return {
    props: {
      products: allProducts,
    },
  };
}
