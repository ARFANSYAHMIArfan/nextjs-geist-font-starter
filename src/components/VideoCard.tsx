"use client";

import React from "react";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  uploaded: string;
}

export default function VideoCard({
  thumbnail,
  title,
  channel,
  views,
  uploaded,
}: VideoCardProps) {
  return (
    <div className="w-full max-w-xs bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h3 className="text-black font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-700 text-sm">{channel}</p>
        <p className="text-gray-600 text-xs">
          {views} views • {uploaded}
        </p>
      </div>
    </div>
  );
}
