import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNav";

function Layout({ children }: any) {
  return (
    <div className="flex flex-col h-screen">
      <DashboardNavbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-6 bg-gray-50">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
