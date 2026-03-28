import UglyArrow from "@/assets/mask/uglyArrow";
import { Button } from "./ui/button";
import { Star } from "@/assets/mask/star";
import MaskAboutUsCard from "@/assets/mask/mask-aboutus-card";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { clamp, getPosition } from "@/utils/position";
import { useState } from "react";
import MaskAboutUsImg from "@/assets/mask/mask-aboutus-img";
import { Circle } from "./ui/circle";
const cardData = [
  {
    title: "Vison",
    description: [
      "At Winfluence, we pioneer the ad agency landscape by uniting small agencies to ignite creative sparks. We amplify diverse talents, reshaping advertising dynamics.",
      "Our unique teamwork approach unlocks each agency's strengths, crafting attention-grabbing campaigns that redefine success.",
    ],
  },
  {
    title: "Mission",
    description: [
      "We're not just a platform; we're a force of creativity, harnessing the power of small agencies to ignite business growth.",
      "By harnessing the collective brilliance of small agencies, we empower brands to reach a wider audience, drive growth, and redefine success.",
    ],
  },
];

export const AboutUsSection = () => {
  const width = useWindowWidth();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = activeIndex === 0 ? 1 : 0;
    setActiveIndex(nextIndex);
  };

  const pos = clamp((288 / 1920) * width, 288 * 0.35, 288);
  const size1 = clamp((168 / 1920) * width, 168 * 0.35, 168);
  const size2 = clamp((108 / 1920) * width, 108 * 0.35, 108);
  const size3 = clamp((108 / 1920) * width, 108 * 0.35, 108);
  const cpos1 = getPosition(30, pos, size1);
  const cpos2 = getPosition(150, pos, size2);
  const cpos3 = getPosition(220, pos, size3);

  return (
    <main className="bg-[#3366FF] px-c-24 py-c-32 text-white overflow-hidden rounded-t-c-24">
      <div className="max-w-[1920px] mx-auto">
        <section className="lg:grid lg:grid-cols-4">
          <p className="font-phonk text-c-17-5 lg:col-span-3 text-center lg:text-start">
            Igniting{" "}
            <span className="font-bowlby text-black bg-[#C6F806] border-[4px] border-black pl-c-4 pr-c-10 py-c-2 rounded-c-7-5 shadow-2xl inline-block rotate-5 relative m-c-2">
              Business Growth
              <Star className="absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 w-c-28" />
            </span>{" "}
            Through Campaigns
          </p>
        </section>
        <section className="grid lg:flex lg:justify-between gap-c-20 mt-c-11-5">
          <div className="relative order-2 lg:order-1">
            <div className="border-[2px] md:border-[3px] lg:border-[4px] border-black text-black card-aboutus-shadow rounded-c-7-5 px-c-12 pb-c-11 bg-white">
              <div className="flex justify-between items-center">
                <div className="relative w-fit">
                  <h2 className="font-phonk text-c-16">
                    Our {activeIndex === 0 ? "Mission" : "Vision"}
                  </h2>
                  <div className="bg-[#C6F806] absolute w-full h-c-2 rounded-full" />
                </div>
                <img src="/aboutus-mask.png" alt="mask" className="w-c-36" />
              </div>
              <div className="mt-c-10 font-syne font-medium text-c-7-5 leading-[128%] grid gap-c-10">
                {cardData[activeIndex].description.map((item, index) => (
                  <p
                    key={index}
                    className="font-syne font-medium text-c-7-5 leading-[128%]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-center-safe mt-c-8">
                <MaskAboutUsCard className="w-c-20" />
                <Button onClick={handleClick} color="lime">
                  Read Our {activeIndex === 0 ? "Mission" : "Vision"}
                </Button>
              </div>
            </div>
            <UglyArrow className="absolute top-0 -translate-y-1/2 left-full translate-x-1/2 w-c-20 hidden lg:block" />
          </div>
          <div className="grid place-items-center order-1">
            <div className="size-c-144 relative">
              <img
                src="/about-us/aboutus-hero.png"
                alt=""
                className="rounded-full res-border border-black"
              />
              <div
                className="absolute size-c-42"
                style={{ left: cpos1.left, top: cpos1.top }}
              >
                <Circle className="size-c-8 absolute -top-1/3 left-1/2 -translate-x-1/2 " />
                <Circle className="size-c-42" />
                <Circle className="size-c-15-5 -bottom-1/4 -left-1/4" />
              </div>
              <MaskAboutUsImg
                className="absolute size-c-27"
                style={{ left: cpos2.left, top: cpos2.top }}
              />
              <div
                className="res-border absolute size-c-18 grid place-items-center p-c-13 border-dashed border-black rounded-full"
                style={{ left: cpos3.left, top: cpos3.top }}
              >
                <Circle className="size-c-14" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
