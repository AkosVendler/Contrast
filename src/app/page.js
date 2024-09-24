"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import "./globals.css";
import Nav from "./navigatonitem";

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();
    gsap.set("#container", { visibility: "visible" });
    gsap.set("#nav", { visibility: "visible" });
    gsap.set("#right-side", { visibility: "visible" });

    t1.from("#my-text", {
      autoAlpha: 0,
      y: "5vw",
      x: "26vw",
      ease: "power4.out",
      delay: 1,
      duration: 0.5,
      stagger: {
        amount: 1,
      },
      opacity: 0,
    });
    t1.to("#my-text", {
      opacity: 1,
      x: "0vw",
    });

    const t2 = gsap.timeline();
    t2.from("#logo", {
      opacity: 0,
      stagger: 0,
      delay: 2.5,
    }).to("#logo", {
      opacity: 1,
      stagger: 0,
    });

    const t3 = gsap.timeline();
    t3.from("#nav", {
      opacity: 0,
      stagger: 0,
      delay: 2.5,
    }).to("#nav", {
      opacity: 1,
      stagger: 0,
    });

    const t4 = gsap.timeline();
    t4.from("#right-side", {
      opacity: 0,
      stagger: 0,
      delay: 2.5,
    }).to("#right-side", {
      opacity: 1,
      stagger: 0,
    });

    // Video play delay (3 seconds)
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000); // 3 másodperces késleltetés, ha 5 másodperc kell, változtasd meg 5000-re

    return () => {
      clearTimeout(timeout); // Timeout törlése, ha a komponens unmount-olódik
    };
  }, []);

  return (
    <>
      <div className="flex mm:[100%] lg:flex-row mm:flex-col mm:h-screen">
        <div id="left-side" className="p-7 lg:h-2/4 mm:h-2/4">
          <main id="container" className="">
            <Link href={"/"}>
              <h1 id="logo" className="text-[#252422] font-medium text-4xl">
                Contrast.
              </h1>
            </Link>
            <h1
              id="my-text"
              className="text-[#252422] uppercase font-black xl:text-8xl mm:pt-10 2xl:text-9xl mm:text-5xl"
            >
              Terek
            </h1>
            <h1
              id="my-text"
              className="text-[#252422] xl:text-8xl 2xl:px-20 mm:px-4 uppercase font-black 2xl:text-9xl mm:text-5xl"
            >
              Személyre
            </h1>
            <h1
              id="my-text"
              className="text-[#252422] xl:text-8xl uppercase font-black 2xl:text-9xl mm:text-5xl"
            >
              Szabva
              <div
                id="right-side"
                className="relative lg:bottom-20 transform -translate-x-1/2 lg:w-40 lg:h-40 z-50 rounded-full flex justify-center items-center bg-[#1E1E1E]
               mm:w-20 mm:h-20 mm:left-72 mm:bottom-10 xl:left-[550px] 2xl:left-[700px]"
              >
                <Image
                  src="/warrow-up.svg"
                  width={70}
                  height={70}
                  className="mm:w-[50px] mm:h-[50px]"
                />
              </div>
            </h1>
          </main>
        </div>
        <div
          id="right-side"
          className="bg-black lg:w-2/4 lg:h-screen mm:w-4/4 mm:h-[60vh]"
        >
          <div className="bg-video h-full">
            <video
              ref={videoRef}
              className="bg-video__content object-cover w-full h-full"
              muted
              loop
            >
              <source src="/forweb2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Nav />
    </>
  );
}
