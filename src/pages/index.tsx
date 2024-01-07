import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@component/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="mx-auto p-24">
        <h1>Hello Welcome</h1>
      </div>
    </MainLayout>
  );
}
