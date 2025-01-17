import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Plat UI',
  description: 'Created by Tushar Sharma',
};
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />


        {children}
      </body>
    </html>
  );
}
