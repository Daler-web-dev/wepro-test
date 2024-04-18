import Image from "next/image";
import { Suspense, } from "react";
import axios from "axios";
import HeroTabs from "@/components/HeroTabs";
import HeroLoading from "@/components/HeroLoading";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import HeroButton from "@/components/children/HeroButton";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"


interface HeroProps {
   lang: any
}

const Hero: React.FC<HeroProps> = async ({ lang }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/banners"
   );

   const { homePage } = await getDictionary(lang);

   return (
      <>
         <div className="max-w-[1728px] mx-auto px-36 max-3xl:px-16 max-lg:px-5 max-sm:px-0 mt-10 max-lg:mt-7 max-md:mt-0">
            <Carousel
               className="relative"
            >
               
               <CarouselContent>
                  {
                     data.map((item: any) => (
                        <CarouselItem className={`min-h-[430px] max-lg:min-h-[380px] max-sm:min-h-full relative sm:flex items-center px-28 max-lg:px-20 max-sm:px-0`} key={item._id}>
                           <div className="sm:absolute sm:z-[-1] sm:top-0 sm:left-0 max-sm:min-h-[215px] w-full sm:h-full">
                              <img
                                 className="object-cover w-full h-full max-sm:h-[215px]"
                                 src={`https://wepro.uz/api/${item.pcImage}`}
                                 alt="banner"
                              />
                           </div>
                           <div className="bg-white max-w-[390px] w-full py-5 px-7 rounded-xl">
                              <div className="">
                                 <h1 className="mb-2 font-helveticaNeueBold text-3xl max-lg: text-black">
                                    {item.title}
                                 </h1>
                                 <h3 className="mb-5 text-sm text-[#00000099]">
                                    {item.description}
                                 </h3>
                                 {item.buttonText.length ? (
                                    <a href={item.link} target="_blank">
                                       <button className="bg-black text-white font-helveticaNeueBold py-3 px-7 rounded-lg">
                                          {item.buttonText}
                                       </button>
                                    </a>
                                 ) : null}
                              </div>
                           </div>
                        </CarouselItem>
                     ))
                  }
               </CarouselContent>
               <CarouselPrevious className="absolute left-5 max-lg:left-3 max-sm:top-28 bg-black text-white border-black" />
               <CarouselNext className="absolute right-5 max-lg:right-3 max-sm:top-28 bg-black text-white border-black" />
            </Carousel>
         </div>


         {/* <div className="custom-container mt-10">
            <div className="max-sm:block hidden mb-8">
               <h1
                  className="text-4xl font-helveticaNeueBold text-center mb-3"
               >
                  {homePage.Hero.title}
               </h1>
               <p className="text-[#00000099] text-sm font-helveticaNeueBold text-center mb-7">
                  {homePage.Hero.dcr}
               </p>

               <div className="flex flex-col gap-2">
                  <HeroButton homePage={homePage} />
                  <Link href={"#courses"} className="bg-[#ffffff] text-[#151FE1] w-full font-helveticaNeueBold text-center py-3 rounded-lg border-2 border-[#151FE1]">
                     {homePage.Hero.buttton2}
                  </Link>
               </div>
            </div>
            <Suspense fallback={<HeroLoading />}>
               <HeroTabs courses={data} homePage={homePage} />
            </Suspense>
         </div> */}
      </>
   );
};

export default Hero;
