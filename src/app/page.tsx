"use client";

import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

const videos = [
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    title: "React Tutorial for Beginners",
    channel: "Code Academy",
    views: "1.2M",
    uploaded: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1B",
    uploaded: "13 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg",
    title: "JavaScript Crash Course",
    channel: "Tech World",
    views: "850K",
    uploaded: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/5MgBikgcWnY/hqdefault.jpg",
    title: "Learn Next.js in 10 Minutes",
    channel: "Dev Simplified",
    views: "500K",
    uploaded: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1Rs2ND1ryYc/hqdefault.jpg",
    title: "CSS Grid Tutorial",
    channel: "Design Course",
    views: "300K",
    uploaded: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/7QUtEmBT_-w/hqdefault.jpg",
    title: "Top 10 Coding Tips",
    channel: "Programming Hub",
    views: "2M",
    uploaded: "1 year ago",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
