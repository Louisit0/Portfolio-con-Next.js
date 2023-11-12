import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Luis Ramirez",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="leading-relaxed bg-stone-50">
          <div className="mx-auto min-h-screen max-w-screen-lg py-12 font-sans  md:py-20 lg:py-0 lg:px-8 ">
            <div className={inter.className}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
