"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, motion, useScroll } from "framer-motion";
import Vacancy from "@/components/Vacancy";
// import Lenis from '@studio-freight/lenis'

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

interface VacanciesProps {
   data: any
   course: any
}

const Vacancies: React.FC<VacanciesProps> = ({ data, course }) => {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
   })

   // useEffec t(() => {
   //    const lenis = new Lenis()

   //    function raf(time: any) {
   //       lenis.raf(time)
   //       requestAnimationFrame(raf)
   //    }

   //    requestAnimationFrame(raf)
   // })

   return (
      <motion.div
         className="bg-[#D6001C] mx-auto rounded-3xl my-14 max-lg:my-10"
      >
         <div className="custom-container  py-14 max-xl:py-10 max-lg:py-7">
            <div className="mb-11 max-lg:mb-8 max-md:mb-6">
               <h2 className="mb-8 max-lg:mb-4 text-white">
                  {course.vacancies.title}
               </h2>
               <div className="flex max-xs:flex-col sm:items-center gap-24 max-xl:gap-14 max-lg:gap-12 max-md:gap-2 mb-11 max-lg:mb-8 max-md:mb-6">
                  <div className="">
                     <p className="font-helveticaNeueMedium text-xl max-xl:text-lg max-md:text-base leading-normal text-nowrap text-white">
                        {course.vacancies.salary}
                     </p>
                     <p className="font-helveticaNeueMedium text-lg max-xl:text-base max-md:text-sm leading-normal text-[#E0E0E0]">
                        {course.vacancies.text}
                     </p>
                  </div>
                  <div className="">
                     <p className="font-helveticaNeueMedium text-xl max-xl:text-lg max-md:text-base leading-normal text-nowrap text-white">
                        {course.vacancies.vacancies}
                     </p>
                     <p className="font-helveticaNeueMedium text-lg max-xl:text-base max-md:text-sm leading-normal text-[#E0E0E0]">
                        {course.vacancies.text2}
                     </p>
                  </div>
               </div>

               <div className="flex items-center gap-3">
                  <Image src={"/icons/hh.svg"} width={48} height={48} alt="hh" />
                  <p className="text-xl max-lg:text-lg max-md:text-base font-helveticaNeueMedium text-white">
                     {course.vacancies.hh}
                  </p>
               </div>
            </div>

            <Carousel
               className="w-full m-auto max-md:hidden"
               opts={{
                  align: "start",
                  dragFree: true
               }}
            >
               <CarouselContent className="w-fit m-auto flex gap-6">
                  {
                     data.map((item: string, idx: number) => (
                        <CarouselItem key={idx} className="basis-1/4">
                           <div className="w">
                              <img
                                 className="object-cover w-auto h-auto rounded-xl"
                                 src={`https://wepro.uz/api/uploads/${item}`}
                                 width={1000}
                                 height={1000}
                                 alt="vacacy"
                              />
                           </div>
                        </CarouselItem>
                     ))
                  }
               </CarouselContent>
            </Carousel>

            <div
               ref={container}
               className="w-fit max-md:w-full relative max-md:flex flex-col m-auto gap-10 mt-[10vh] hidden"
            >
               {data.map((item: string, idx: number) => {
                  const targetScale = 1 - ((data.length - idx) * 0.05);
                  return (
                     <Vacancy
                        key={`p_${idx}`}
                        idx={idx}
                        item={item}
                        progress={scrollYProgress}
                        range={[idx * .25, 1]}
                        targetScale={targetScale}
                     />
                  );
               })}
            </div>
         </div>
      </motion.div>
   );
};

export default Vacancies;
