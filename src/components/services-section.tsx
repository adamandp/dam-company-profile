import { MaskService } from "@/assets/mask/services/mask-service";
import Slider from "react-slick";

const SlickSlider = (Slider as any).default || Slider;

const settings = {
  dots: true,
  arrows: false,
  centerMode: true,
  infinite: true,
  centerPadding: "80px",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 550,
      centerMode: true,
      centerPadding: "40px",
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      centerPadding: "40px",
      centerMode: true,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  color: string;
}

const cardData = [
  {
    id: 1,
    title: "Data Analytics",
    description:
      "Our innovative digital strategies cut through the noise, ensuring your brand's message reaches the right people.",
    color: "#C6F806",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help you connect with your audience, grow your brand, and achieve your goals.",
    color: "#3366FF",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Our social media management services help you connect with your audience, grow your brand, and achieve your goals.",
    color: "#C6F806",
  },
];

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="slider-item">
      <div
        key={card.id}
        className={`card-shadow w-c-122-5 h-c-159-5 rounded-c-12-5  relative overflow-hidden bg-[url(/services/Rectangle.svg)] bg-repeat bg-[${card.color}] px-c-5-5 py-c-15 grid content-between justify-items-center text-center  font-syne text-black`}
        style={{ boxSizing: "unset" }}
      >
        <img
          src={`/services/card-img${card.id}.png`}
          alt=""
          className="h-c-63"
        />
        <h3 className="text-c-10 font-bold leading-[98%]">{card.title}</h3>
        <p className="text-c-7 font-medium leading-[131%] mt-c-6-5">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <main id="services" className="bg-white">
      <div className="px-c-24 py-c-12 text-black ">
        <div className="max-w-[1920px] mx-auto relative">
          <header className="bg-[#C6F806] font-phonk text-[clamp(0.8rem,4vw,4rem)] md:py-c-8 -rotate-5 w-[101vw] absolute z-50 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-wrap items-center justify-evenly max-w-[1920px] mx-auto">
              Advertising <MaskService className="w-c-8 md:w-c-12-5" /> Digital
              <MaskService className="w-c-8 md:w-c-12-5" /> Marketing
            </div>
          </header>
          <section className="pt-c-68">
            <h1 className="text-c-20 font-phonk text-center">
              We provide world class{" "}
              <span className="bg-[#3366FF] p-c-4 rounded-full -rotate-5 inline-block res-border border-black">
                <span className="text-white border-white res-border border-dashed rounded-full font-bowlby px-c-6 tracking-wider">
                  services
                </span>
              </span>{" "}
              for you
            </h1>
            <h2 className="text-c-10 font-syne font-semibold text-center leading-[131%] mt-c-10">
              From market insights to execution, we develop results-oriented
              campaigns that drive business growth and resonate with your target
              market.
            </h2>
          </section>
        </div>
      </div>
      <section className="py-c-10">
        <div className="slider-container lg:hidden">
          <SlickSlider {...settings}>
            {cardData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </SlickSlider>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="flex flex-wrap gap-c-20">
            {cardData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      <div className="pb-[100px]"></div>
    </main>
  );
};
