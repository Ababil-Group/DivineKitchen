import React from "react";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-secondary/10">
      <MainHeader />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
