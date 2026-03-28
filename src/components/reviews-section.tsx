import ArrowReview from "@/assets/mask/review/arrow-review";
import { Sparkle } from "lucide-react";

export const ReviewSection = () => {
  return (
    <main className="px-c-24 py-c-12 text-black bg-white rounded-b-c-25">
      <div className="max-w-[1920px] mx-auto">
        <section className="flex justify-between items-center relative">
          <h1 className="font-phonk text-c-20 text-center lg:text-start">
            Hear What Our{" "}
            <span className="text-[#D8FF40] bg-black rounded-full font-bowlby text-c-25 px-c-10">
              Clients
            </span>{" "}
            Have to Say
          </h1>
          <img
            src="/review/hero.png"
            alt=""
            className="w-c-118 hidden lg:block"
          />
          <ArrowReview className="w-c-58 h-c-49 text-[#4271FF] absolute top-full -translate-y-c-19 hidden lg:block" />
        </section>
        <h2 className="font-syne text-c-12-5 leading-[131%] lg:ml-[10%] mt-c-10">
          At Winfluence our clients' success stories speak volumes. Don't just
          take our word for it – read what our clients have to say about their
          experience partnering with us."
        </h2>
        <div className="bg-[#4271FF] res-border border-black rounded-c-12-5 px-c-20 py-c-11 relative mt-c-13-5 card-shadow">
          <header className="flex items-center font-phonk text-white">
            <div className="flex flex-col">
              <h4 className="text-c-12-5">John Doe ⭐⭐⭐⭐⭐</h4>
              <h5 className="text-c-8-5">Marketing Director Company A</h5>
            </div>
          </header>
          <p className="font-syne text-c-10-5 leading-[131%] text-left lg:text-center px-c-14-5 py-c-7 bg-[#C6F806] rounded-c-12-5 mt-c-5-5 res-border border-black">
            Working with Winfluence was a game-changer for us. Their innovative
            digital strategies propelled our brand to new heights, resulting in
            a 30% increase in website traffic
          </p>
          <div className="absolute -top-0 -translate-y-1/2 right-0">
            <div className="relative">
              <Sparkle
                fill="#C6F806"
                className=" stroke-black stroke-1 size-c-40 md:size-c-55-5 "
              />
              <Sparkle
                fill="#C6F806"
                className="absolute top-0 right-0 stroke-black stroke-2 size-c-12"
              />
              <Sparkle
                fill="#C6F806"
                className="absolute bottom-0 right-0 stroke-black stroke-2 size-c-12"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
