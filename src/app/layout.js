import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Climb Time Indy",
  description: "The best climbing gym in Indianapolis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        {children}
        <footer>
          <p>&copy; 2024 Climb Time Indy</p>
        </footer>
      </body>
    </html>
  );
}
