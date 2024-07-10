"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./style.css";
import "../globals.css";
import { gsap } from "gsap";
import Nav from "../navigatonitem";

export default function Contacts() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [sectionBackgrounds, setSectionBackgrounds] = useState([]);

  const sectionBackgrounds1 = [
    "/galerytempimg.png",
    "/galerytempimg2.png",
    "/galerytempimg3.png",
    "/galerytempimg4.png",
  ];
  const sectionBackgrounds2 = [
    "/galerytempimg2.png",
    "/galerytempimg3.png",
    "/galerytempimg4.png",
    "/galerytempimg.png",
  ];
  const sectionBackgrounds3 = [
    "/galerytempimg3.png",
    "/galerytempimg4.png",
    "/galerytempimg.png",
    "/galerytempimg2.png",
  ];
  const sectionBackgrounds4 = [
    "/galerytempimg4.png",
    "/galerytempimg.png",
    "/galerytempimg2.png",
    "/galerytempimg3.png",
  ];
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setIsCursorVisible(!isNavVisible); 
  };

  const openModalWithBackgrounds = (backgrounds) => {
    setSectionBackgrounds(backgrounds);
    setShowModal(true);
    gsap.set(".imagefull", { visibility: "visible" });
    gsap.set("body", { overflow: "auto" });
  };

  const closeModal = () => {
    setShowModal(false);
    gsap.set(".imagefull", { visibility: "hidden" });
    gsap.set("body", { overflow: "hidden" });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    gsap.set("#hover-container", { visibility: "visible" });
    gsap.set("#hover-container2", { visibility: "visible" });
    gsap.set("#hover-container3", { visibility: "visible" });
    gsap.set("#hover-container4", { visibility: "visible" });
    gsap.set("#nav", {visibility: "visible"});

    const timeline = gsap.timeline();

    timeline
      .from("#hover-container", {
        opacity: 0,
        x: -200,
        duration: 1,
        stagger: {
          amount: 1,
        },
        ease: "power4.out",
      })
      .to("#hover-container", {
        opacity: 1,
        x: 2,
        duration: 2,
        ease: "power4.out",
      })
      .from(
        "#hover-container2",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=1.25"
      )
      .to("#hover-container2", {
        opacity: 1,
        ease: "power4.out",
        duration: 0.5,
      })
      .from(
        "#hover-container3",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=1.25"
      )
      .to("#hover-container3", {
        opacity: 1,
        ease: "power4.out",
        duration: 0.5,
      })
      .from(
        "#hover-container4",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=1.25"
      )
      .to("#hover-container4", {
        opacity: 1,
        ease: "power4.out",
        duration: 0.5,
      });
  }, []); 
  
  return (
    <>
      {showModal && (
        <div className="imagefull">
          {sectionBackgrounds.map((background, index) => (
            <div
              key={index}
              className="section grid place-content-center bg-no-repeat bg-cover h-screen"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
          ))}
          <div className="fixed right-2 top-0 cursor-pointer mm:top-3" onClick={closeModal}>
            <Image src="/cross.svg" width={100} height={100} className="mm:w-[50px] mm:h-[50px]" />
          </div>
        </div>
      )}
      <div className="p-5 box-border">
        <div className="top-[-20px] bg-[#FFFCF2] relative z-20 h-28 w-full flex items-center border-b-[#403D39] border-b-[1px] justify-between box-border">
        <Link href={"/"}><h1 className="text-[#252422] font-medium text-4xl">Contrast.</h1></Link>
          <h1 className="text-[#252422] mm:text-2xl 2xl:text-4xl uppercase">Projektek</h1>
        </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-5 lg:gap-4 h-1/2 mm:grid-cols-2 mm:grid-rows-3 mm:gap-2">
          <div
            id="hover-container"
            onClick={() => openModalWithBackgrounds(sectionBackgrounds1)}
            className="cursor-zoom 
            lg:row-span-5 
            bg-[url('/galerytempimg.png')] bg-no-repeat bg-cover bg-center
            2xl:h-[800px] mm:h-[240px] xl:h-[600px]" 
          ></div>
          <div
            onClick={() => openModalWithBackgrounds(sectionBackgrounds2)}
            id="hover-container2"
            className="cursor-zoom 
            lg:col-span-3 lg:row-span-2 
            bg-[url('/galerytempimg2.png')] bg-no-repeat bg-cover bg-center
            2xl:h-[392px] mm:h-[240px] xl:h-[292px]"
          ></div>
          <div
            onClick={() => openModalWithBackgrounds(sectionBackgrounds3)}
            id="hover-container3"
            className="cursor-zoom 
            lg:row-span-3 lg:col-start-2 lg:row-start-3 lg:col-span-1
            mm:col-span-2
            bg-[url('/galerytempimg3.png')] bg-no-repeat bg-cover bg-center
            mm:h-[240px] 2xl:h-[392px] xl:h-[292px]"
          ></div>
          <div
            onClick={() => openModalWithBackgrounds(sectionBackgrounds4)}
            id="hover-container4"
            className="cursor-zoom 
            lg:row-span-3 lg:col-start-3 lg:row-start-3 mm:col-span-2 mm:row-start-3 
            bg-[url('/galerytempimg4.png')] bg-no-repeat bg-cover bg-center
            mm:h-[240px] 2xl:h-[392px] xl:h-[292px]"
          ></div>
        </div>
      </div>
      <Nav/>
    </>
  );
}
