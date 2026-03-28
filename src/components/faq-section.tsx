import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/constants";
import { Circle } from "./ui/circle";

export default function FAQSection() {
  return (
    <main className="main-container text-black py-c-10">
      <div className="p-c-29-5">
        <div className="bg-white res-border border-black rounded-c-20 card-shadow p-c-13 flex flex-col items-center relative ">
          <img
            src="/faq/mask1.png"
            alt=""
            className="absolute right-c-10 top-c-10 w-c-30 lg:w-c-51 "
          />
          <img
            src="/faq/mask2.svg "
            alt=""
            className="absolute left-0 -top-c-17 w-c-33-5"
          />
          <div className="absolute size-c-42 -bottom-c-20 -right-c-10">
            <Circle className="size-c-8 absolute -top-1/3 left-1/2 -translate-x-1/2 " />
            <Circle className="size-c-42" />
            <Circle className="size-c-15-5 -bottom-1/4 -left-1/4" />
          </div>
          <header className="relative ">
            <h3 className="font-phonk text-c-20 text-center px-c-20">FAQs</h3>
            <div className="bg-[#4271FF] absolute w-full h-c-4 rounded-full" />
          </header>

          <Tabs
            defaultValue="General"
            className="w-full mt-c-10 flex justify-center"
          >
            <TabsList>
              {faqData.map((tab) => (
                <TabsTrigger key={tab.category} value={tab.category}>
                  {tab.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {faqData.map((tab) => (
              <TabsContent
                key={tab.category}
                value={tab.category}
                className="flex justify-center w-full"
              >
                <Accordion
                  type="single"
                  collapsible
                  className="max-w-[900px] w-full mt-c-10"
                >
                  {tab.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-c-5">
                          <p className="font-phonk text-c-12-5">{index + 1}</p>
                          <p className="font-syne text-c-10 font-semibold">
                            {item.question}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="font-syne font-medium text-c-7 ml-c-14">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
