import React from "react";

const DashboardNavbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Carbon Exchange</div>
      <div className="flex items-center space-x-4">
        <div className="text-gray-700">Base</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
