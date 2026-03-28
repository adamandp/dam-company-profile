import clsx from "clsx";
import Slash from "../assets/mask/slash";
import Stars from "../assets/mask/stars";
import UglyArrow from "../assets/mask/uglyArrow";
import { Button } from "../components/ui/button";
import { type ImgHTMLAttributes } from "react";
import HomeMask from "@/assets/mask/home/mask1";
import Logo from "./logo";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  background?: "left" | "right";
}

const ImageContainer = ({
  background = "left",
  src,
  className,
}: ImageProps) => (
  <main className={clsx("relative ")}>
    <img
      src={src}
      alt="logo"
      className={`border-[#FFEB01] border-2 rounded-c-6 relative z-10 ${className}`}
    />
    <div
      className={clsx(
        "absolute  top-0 rounded-c-6 w-full h-full bg-[#C6F806]",
        background === "left" ? "-left-c-6 -rotate-4" : "-right-c-6 rotate-4",
      )}
    />
  </main>
);

const navItems = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About Us", href: "#about" },
  { id: 3, name: "Services", href: "#services" },
  { id: 4, name: "Reviews", href: "#reviews" },
  { id: 5, name: "FAQs", href: "#faqs" },
  { id: 6, name: "Contact", href: "#contact" },
];

const userItems = [
  { id: 1, img: "home/danilla.jpg", name: "danilla" },
  { id: 2, img: "home/irene.jpg", name: "irene" },
  { id: 3, img: "home/marion.jpg", name: "marion" },
];

const Mask = ({ className }: { className?: string }) => (
  <main className={className}>
    <div className={`size-c-52-5 relative grid place-items-center`}>
      <div className="absolute z-20 flex flex-col gap-c-1 text-center font-shrikhand-regular -rotate-12">
        <p className=" text-c-11 leading-none">200+</p>
        <p className="text-c-6 leading-none">Ads</p>
      </div>
      <HomeMask className="w-full h-full absolute text-blue-500" />
    </div>
  </main>
);

export const MainSection = () => (
  <main id="home" className="main-container">
    <div className="px-c-24 py-c-13-5">
      <header className="relative flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex  border-2 border-[#C6F806] rounded-full px-c-9 py-c-5 gap-c-11">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="font-tt-commons text-c-7-5 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      <div className="mt-c-16 lg:grid grid-cols-3">
        <section className="col-span-2 flex flex-col items-center">
          <div className="font-phonk text-center lg:text-start">
            <p className="text-[#C6F806] text-c-7-5">
              Advertising Gen <span className="font-rubik">-</span> Z Style
            </p>
            <p className="text-c-20">
              Shapping Next Gen{" "}
              <span className="bg-[#C6F806] text-black px-c-2 -rotate-3 inline-block  shadow-2xl rounded-c-7-5">
                Advertising
              </span>{" "}
              with{" "}
              <span className="inline-block text-[#3366FF]">
                <Stars className="w-c-20 h-c-20 inline" />
                <span>Gen</span>
                <span className="font-rubik ">-</span> Z
              </span>{" "}
              Creativity
            </p>
          </div>
          <div className="w-full grid grid-cols-3 justify-center justify-items-center  relative">
            <div className="grid lg:grid-cols-2 justify-items-end w-full col-span-2">
              <Slash className="w-c-40  lg:order-2" />
              <div className="mt-c-2 relative gap-c-2 grid justify-center w-fit">
                <UglyArrow className="h-c-28 w-fit" />
                <div className="absolute top-full right-full -translate-x-c-8 -translate-y-1/2 lg:order-1 grid gap-c-8">
                  <Button color="blue" className="whitespace-nowrap">
                    Explore Now
                  </Button>
                  <div className="flex items-center gap-c-2 cursor-pointer">
                    <div className="size-c-4 bg-[#2CF74C] rounded-full" />
                    <p className="font-syne text-c-5 underline whitespace-nowrap text-white/70">
                      Have any Questions?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Mask className="justify-self-end lg:hidden" />
            <div className="hidden lg:block lg:absolute -top-[60%] right-0 translate-x-1/4 translate-y-1/4">
              <ImageContainer src="/image3.jpg" className="w-c-112" />
            </div>
          </div>
        </section>
        <section className="mt-c-30 lg:mt-0 flex flex-wrap lg:flex-col lg:flex-nowrap justify-center gap-c-16 lg:gap-0">
          <div className="self-center flex items-center gap-c-5">
            <ImageContainer src="/image1.jpg" className="h-c-56" />
            <Mask className="hidden lg:grid " />
          </div>
          <div className="self-end">
            <ImageContainer
              src="/image2.jpg"
              background="right"
              className="h-c-72"
            />
          </div>
          <div className="lg:hidden lg:self-start">
            <ImageContainer src="/image3.jpg" className="h-c-64" />
          </div>
        </section>
      </div>
      <div className="grid gap-c-3 lg:gap-0 lg:grid-cols-2 mt-c-30 lg:mt-c-56">
        <div className="flex gap-c-6 items-center justify-center lg:justify-start">
          <div className="flex">
            {userItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-full size-c-19 object-cover  ${
                  item.id !== 1 ? "-ml-c-4" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-c-16 font-broadaers">150+</p>
          <div className="grid content-evenly text-c-7">
            <p>Active User &</p>
            <p>Business</p>
          </div>
        </div>
        <div className="font-syne text-c-7 font-semibold text-center lg:text-right">
          Explore our dynamic advertising portfolio showcasing digital
          transformations and measurable successes
        </div>
      </div>
    </div>
  </main>
);
