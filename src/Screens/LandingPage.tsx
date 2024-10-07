import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
      <Navbar />
      <header className="flex flex-col items-center justify-center h-screen text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Digital Rails for{" "}
          <span className="text-orange-400">Climate Finance</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          We’re building infrastructure that makes it easier for carbon credits
          to be bought, sold, and retired.
        </p>
        <button className="bg-orange-400 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transform transition duration-300 hover:scale-105 hover:bg-orange-500">
          Learn More
        </button>
      </header>
    </div>
  );
};

export default LandingPage;
