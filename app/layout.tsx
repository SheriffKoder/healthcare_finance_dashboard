import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";


export const metadata: Metadata = {
  title: "Healthcare Finance Dashboard",
  description: "Displays the performance by facility, year or name of the payer company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    // main_bg: the gradient background of the website
    <html lang="en" className="main_bg">
      
      <body className="relative">
      <div className="absolute w-[100vw] h-[100%] top-0 left-0 main_bg_shade"></div>

        {/* Website's nav bar */}
        <nav className="w-full h-[4.5rem] flex items-center justify-center glass_card fixed z-[100]"
        style={{border: "none"}}>
          <ul className="flex flex-row gap-[1rem] md:gap-[4rem]
          text-white items-center justify-start md:justify-center text-sm font-thin opacity-100 w-full md:w-auto pl-[1rem]">
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Home</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Services</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">About</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Contact</Link></li>
          </ul>
          <button className="absolute flex items-center h-full right-[1rem]">
            <Link href={"/"} className="text-white glass_card_hover_on text-xs rounded-full px-5 py-1 pb-[0.35rem]">contact</Link>
          </button>
        </nav>

        {/* Website's content page.tsx */}
        {children}

        {/* Website's footer */}
        <footer className="w-full min-h-[200px] pt-[2rem] flex items-center justify-center">
          <ul className="flex flex-row gap-[2rem] md:gap-[4rem]
          text-white items-center justify-center text-xs font-thin opacity-50">
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Home</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Services</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">About</Link></li>
            <li><Link href="/"  className="hover:text-accent1 trans_anim">Contact</Link></li>
          </ul>
      </footer>
      </body>

    </html>
  );
}
