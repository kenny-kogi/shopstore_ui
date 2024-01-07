import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen`}
    >
      {children}
    </main>
  );
};

export default MainLayout;
