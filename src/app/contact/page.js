"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import "../globals.css";  
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { Flip } from "gsap/Flip";
import Nav from "../navigatonitem";

export default function Contacts() {
    const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    const container = document.querySelector("#left-imgs");
    const images = Array.from(container.querySelectorAll("img"));

    images.forEach(image => {
        const clone = image.cloneNode(true);
        container.appendChild(clone);
    });

    const totalImages = container.querySelectorAll("img").length;
    const imageHeight = images[0].clientHeight;

    gsap.to(container, {
        y: `-${imageHeight * images.length}`,
        duration: 50, 
        ease: "linear",
        repeat: -1,
        modifiers: {
            y: gsap.utils.unitize(y => parseFloat(y) % (imageHeight * images.length))
        }
    });

    //second!!!
    const container2 = document.querySelector("#right-imgs");
    const images2 = Array.from(container2.querySelectorAll("img"));

    images2.forEach(image2 => {
        const clone2 = image2.cloneNode(true);
        container2.appendChild(clone2);
    });

    const totalImages2 = container2.querySelectorAll("img").length;
    const imageHeight2 = images2[0].clientHeight;
    gsap.set("body", { overflowY: "auto" });
    gsap.set("#nav", { visibility: "visible" });
    gsap.to(container2, {
        y: `-${imageHeight2 * images2.length}`,
        duration: 60,
        ease: "linear",
        repeat: -1,
        modifiers: {
            y: gsap.utils.unitize(y => parseFloat(y) % (imageHeight2 * images2.length))
        }
    });
}, []);
  return (
    <>
    <div className="p-5 box-border w-screen overflow-hidden">
      <div className=" top-[-20px] bg-[#FFFCF2] relative z-20 h-28 w-full flex items-center border-b-[#403D39] border-b-[1px] justify-between box-border">
        <Link href={"/"}><h1 className="text-[#252422] font-medium text-4xl">Contrast.</h1></Link>
        <h1 className="text-[#252422] mm:text-2xl 2xl:text-4xl uppercase">Kapcsolat</h1>
      </div>
      <div className="flex 2xl:flex-row mm:flex-col xl:flex-row  justify-between ">
        <div className=" 2xl:h-screen mm:h-2/4 w-1/6 flex flex-col 2xl:justify-between mm:justify-normal xl:py-40 2xl:py-40 mm:py-10">
          <h1 className="text-[#000] xl:text-8xl mm:text-5xl 2xl:w-[600px] mm:w-[500px] 2xl:text-8xl uppercase">
            Lépj velem <br></br> kapcsolatba
          </h1>
          <div>
            <div className="2xl:py-14 mm:py-10">
              <h2 className="text-[#252422] mm:w-[400px] text-2xl font-medium uppercase">
                írj emailt ide
              </h2>
              <Link href={"https://mail.google.com/mail/?view=cm&to=vendler.akos@gmail.com"} className="text-[#252422] px-1 text-xl ">
                contact@amdesign.com
              </Link>
            </div>
            <div>
              <div>
                <h1 className="w-72 text-[#252422] border-b-[#403D39] border-b-[1px] text-2xl font-bold">
                  Kövess itt is
                </h1>
              </div>
              <div className="w-72 h-14 flex justify-between items-center text-[#252422] border-b-[#403D39] border-b-[1px] text-2xl font-light">
                <h1>Instagram</h1>
                <Link href={"https://www.instagram.com"} target="_blank"><Image src="/rarrow-up.svg" width={40} height={40} /></Link>
              </div>
              <div className="w-72 h-14 flex justify-between items-center text-[#252422] border-b-[#403D39] border-b-[1px] text-2xl font-light">
                <h1>X</h1>
                <Link href={"https://www.x.com"} target="_blank"><Image src="/rarrow-up.svg" width={40} height={40} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:h-screen mm:h-[50vh] mm:overflow-hidden">
          <div className="flex gap-3">
            <div id="left-imgs" className="pt-3 flex flex-col gap-3">
              <Image
                src="/tempimg.png"
                width={470}
                height={630}
              />
              <Image
                src="/tempimg3.png"
                width={470}
                height={630}
              />
            </div>
            <div id="right-imgs" className="pt-8 flex flex-col gap-3">
              <Image
                src="/tempimg2.png"
                width={470}
                height={630}
              />
              <Image
                src="/tempimg4.png"
                width={470}
                height={630}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nav/>
    </>
  );
}
