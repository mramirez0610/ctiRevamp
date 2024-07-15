import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./_components/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Climb Time Indy",
  description: "The best climbing gym in Indianapolis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <TopNav />  
          <main>{children}</main>
        </div>
        <footer>
          <p>&copy; 2024 Climb Time Indy</p>
        </footer>
      </body>
    </html>
  );
}
