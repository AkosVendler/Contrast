import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function NavigationItem() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div>
            <div className="cursor-pointer z-40 2xl:w-full mm:w-screen h-24 flex items-center justify-center fixed bottom-4">
                <div
                    id="nav"
                    onClick={toggleNav}
                    className="w-20 h-20 z-40 rounded-full flex justify-center items-center bg-[#EB5E28]"
                >
                    <Image src="/arrow-up.svg" width={35} height={35} alt="Arrow Up"/>
                </div>
            </div>

            {isNavVisible && (
        <div
          id="menu"
          className="bg-[#CCC5B9] lg:text-xl lg:w-5/12 lg:h-24 fixed bottom-28 left-1/2 transform -translate-x-1/2 rounded-[53px] flex justify-center items-end py-7 lg:gap-16
          mm:text-sm mm:w-[90%] mm:gap-12 mm:h-20
          "
        >
          <div className="flex flex-col items-center justify-center gap-1 relative">
            <Link href="/aboutme" className="text-[#252422] uppercase">
              Rólam
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 relative">
            <Link href="/projects" className="text-[#252422] uppercase">
              Projektek
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 relative">
            <Link href="/contact" replace className="text-[#252422] uppercase">
              Kapcsolat
            </Link>
          </div>
        </div>
      )}
        </div>
    );
}

export default NavigationItem;
