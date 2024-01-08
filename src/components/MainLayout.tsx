import React, { ReactNode } from "react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={`flex min-h-screen`}>
      {/* <Header /> */}
      {children}
    </main>
  );
};

export default MainLayout;
