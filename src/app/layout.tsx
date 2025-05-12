import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "YouTube Clone",
  description: "Simplified YouTube homepage clone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: white;
            color: black;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
