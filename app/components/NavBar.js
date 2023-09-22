import Link from "next/link";
import React from "react";
import { Signout } from "./logout";
import Search from "./Search";
const NavBar = () => {
      return (
        <header className="bg-gray-950 sticky top-0  z-10 opacity-80">
            <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-6 font-bold  text-white">
              <div className="flex items-center justify-around space-x-8 ">
              <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                    <Link href="/gallery">
                        bechgrid
                    </Link>
                    
                </h1>
                    <Link href="/gallery">
                       Home
                    </Link>
              </div>
                <Search />
                <Signout/>
            </nav>
        </header>
      )
}

export default NavBar