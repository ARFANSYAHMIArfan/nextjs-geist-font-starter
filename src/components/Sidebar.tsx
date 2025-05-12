"use client";

import React from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Trending", href: "#" },
  { label: "Subscriptions", href: "#" },
  { label: "Library", href: "#" },
  { label: "History", href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 border-r border-gray-300 bg-white min-h-screen p-4">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-black font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
