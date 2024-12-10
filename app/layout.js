import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ingredient Volume Calculator",
  description: "Calculate ingredient volumes based on market data",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ingredient Volume Calculator</title>
        <meta name="description" content="Calculate ingredient volumes based on market data" />
      </head>
      <body className="bg-black-100 font-sans" style={{ fontFamily: "var(--font-geist-sans)" }}>
        <div className="container mx-auto p-4 pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
