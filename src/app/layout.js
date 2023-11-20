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
        <div className="leading-relaxed">
          <div className="min-h-screen font-sans bg-stone-50">
            <div className={inter.className}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
