"use client";

import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300 bg-white">
      <div className="text-2xl font-bold text-black">YouTube</div>
      <div className="flex flex-1 mx-6 max-w-2xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r-md font-semibold hover:bg-gray-800 transition">
          Search
        </button>
      </div>
      <button className="text-black font-semibold border border-black px-4 py-2 rounded-md hover:bg-gray-100 transition">
        Sign In
      </button>
    </header>
  );
}
