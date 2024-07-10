"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../globals.css";
import "./style.css";
import Nav from "../navigatonitem";
import { gsap } from "gsap";
import { SplitText } from "../splitText";

export default function Page() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const splitRefs = useRef([]);
  const profileRef = useRef(null);

  splitRefs.current = [];

  const addToRefs = (el) => {
    if (el && !splitRefs.current.includes(el)) {
      splitRefs.current.push(el);
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const chars = [];
    splitRefs.current.forEach((ref) => {
      const mySplitText = new SplitText(ref, { type: "chars" });
      chars.push(...mySplitText.chars);
    });

    gsap.set("body", { overflowY: "scroll" });
    gsap.set("#nav", { visibility: "visible" });

    gsap.from(chars, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.02,
      delay: 0.5,
    });

    gsap.set(chars, { visibility: "visible" });
    gsap.to(chars, {
      opacity: 0,
    });

    gsap.from(profileRef.current, {
      scale: 1.3,
      duration: 1.2,
      ease: "power4.inOut",
    });

    const t2 = gsap.timeline();
    t2.addLabel("start")
      .to(
        ".uncover_slice",
        {
          height: 0,
          duration: 1,
          ease: "power4.inOut",
          stagger: { amount: 0.33 },
        },
        "start"
      )
      .to(
        profileRef.current,
        {
          scale: 1,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "start"
      );

    // Cleanup function to prevent memory leaks
    return () => {
      gsap.killTweensOf(chars);
      t2.kill();
    };
  }, []);

  return (
    <>
      <div className="p-5 box-border">
        <div className="top-[-20px] bg-[#FFFCF2] relative z-20 h-28 w-full flex items-center border-b-[#403D39] border-b-[1px] justify-between box-border">
          <Link href={"/"}><h1 className="text-[#252422] font-medium text-4xl">Contrast.</h1></Link>
          <h1 className="text-[#252422] mm:text-2xl 2xl:text-4xl uppercase">Rólam</h1>
        </div>
        <div className="w-4/4 h-2/4 flex items-center justify-around ">
          <div className="flex mm:h-1/4 2xl:h-4/5 justify-start">
            <div className="overflow-hidden relative z-30">
              <h1 ref={addToRefs} className="text-[#252422] 2xl:text-9xl xl:text-8xl mm:text-3xl font-black leading-none">
                LOREM
              </h1>
              <h1 ref={addToRefs} className="text-[#252422] 2xl:text-9xl xl:text-8xl mm:text-3xl font-black leading-none">
                IPSUM
              </h1>
              <h1 ref={addToRefs} className="text-[#252422] 2xl:text-9xl xl:text-8xl mm:text-3xl font-black leading-none">
                DOLOR SIT
              </h1>
              <h1 ref={addToRefs} className="text-[#252422] 2xl:text-9xl xl:text-8xl mm:text-3xl font-black leading-none">
                AMET
              </h1>
            </div>
            <div className="overflow-hidden 2xl:h-[650px] 2xl:w-[700px] mm:h-[240px] mm:w-[270px] xl:w-[500px] xl:h-[480px] relative 2xl:left-7 mm:left-0">
              <div ref={profileRef}>
                <Image id="profile" src="/aboutmeprofil.png" width={700} height={650} alt="Profile" className="2xl:h-[650px] 2xl:w-[700px] xl:w-[500px] xl:h-[480px] mm:w-[270px] mm:h-[240px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex 2xl:flex-row w-full xl:flex-row xl:gap-80 justify-stretch 2xl:px-8 mm:px-0 mm:flex-col-reverse mm:gap-10">
          <div className="w-72">
            <div className="border-b-2 border-[#252422]">
              <h2 className="text-[#252422] font-semibold mm:text-xl 2xl:text-3xl">Kövess itt is</h2>
            </div>
            <div className="flex items-center justify-between w-72 border-b-2 border-[#252422]">
              <h2 className="text-[#252422] mm:text-xl 2xl:text-2xl">Instagram</h2>
              <Image src="/arrow.svg" width={42} height={42} />
            </div>
            <div className="flex items-center justify-between w-72 border-b-2 border-[#252422]">
              <h2 className="text-[#252422] mm:text-xl 2xl:text-2xl">Tiktok</h2>
              <Image src="/arrow.svg" width={42} height={42} />
            </div>
          </div>
          <div className="2xl:w-[1050px] 2xl:pl-80 mm:pl-0  mm:w-[90%] relative 2xl:left-5 mm:left-0">
            <h2 className="text-[#252422] pt-10 font-medium 2xl:text-3xl mm:text-xl">
              <span className="dropcap">L</span>orem ipsum dolor sit amet consectetur. Semper hac phasellus donec lacinia. Placerat auctor sit cras rhoncus diam massa porttitor. Leo cras dictum maecenas nunc quis turpis dui placerat cursus. Sit eget eget velit viverra dolor nibh nunc sed.
            </h2>
            <h2 className="text-[#252422] font-medium 2xl:text-3xl mm:text-xl">Lorem ipsum dolor sit amet consectetur. Semper hac phasellus donec lacinia.</h2>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}
